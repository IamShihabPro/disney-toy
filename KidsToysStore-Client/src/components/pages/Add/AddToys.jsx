import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  useTitle("Add a Toys");

  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.Toyname.value;
    const photo = form.photo.value;
    const Sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const allFields = {
      name,
      photo,
      Sellername,
      selleremail,
      price: parseFloat(price),
      rating,
      quantity,
      description,
      selectedSubCategory,
    };

    console.log(allFields);
    fetch(`https://disney-toys-server.vercel.app/allToys`, {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(allFields),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire("Good job!", "Data added successFull!", "success");
        }

        e.target.reset();
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          <form onSubmit={handleAdd} className="px-8 py-6 space-y-6">
            <h2 className="text-2xl font-bold text-center">Add Toy</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="Toyname"
                  placeholder="Toy Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="photo"
                  placeholder="Picture URL of the toy"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="sellername"
                  placeholder="Seller Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="selleremail"
                  placeholder="Email"
                  defaultValue={user?.email}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <select
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option defaultValue>Sub Category</option>
                  <option value="science">Science Toys</option>
                  <option value="math">Math Toys</option>
                  <option value="engineer">Engineer Toys</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button type="submit" className="w-full button-primary">
              Add Toy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
