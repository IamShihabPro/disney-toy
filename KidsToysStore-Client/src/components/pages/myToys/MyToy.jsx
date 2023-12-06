import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = ({ data, setData }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://disney-toys-server.vercel.app/deleteToy/${data._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deletedData) => {
            console.log(deletedData);
            // Update the state to remove the deleted item
            setData((prevData) => prevData.filter((item) => item._id !== id));
          })
          .catch((error) => {
            console.log(error);
          });

        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });

    console.log(id);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={data.photo} alt="Avatar Tailwind CSS Component " />
            </div>
          </div>
        </div>
      </td>
      <td>{data.name}</td>
      <td>{data.Sellername}</td>
      <td>{data?.selleremail}</td>
      <td>{data.price}</td>
      <td>{data.rating}</td>
      <td>{data.quantity}</td>
      <td>{data.selectedSubCategory}</td>
      <th>
        <Link to={`/update/${data._id}`}>
          <button className="button-primary">Update</button>
        </Link>

        <button
          onClick={() => handleDelete(data._id)}
          className="button-secondary ml-2"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToy;
