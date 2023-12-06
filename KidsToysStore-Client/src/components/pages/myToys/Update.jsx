import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const all = {
      price: parseInt(price),
      quantity,
      description,
    };

    console.log(all);

    fetch(`https://disney-toys-server.vercel.app/getone/${data._id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(all),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Item Updated successFull!", "success");
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
          <form onSubmit={handleUpdate} className="px-8 py-6 space-y-6">
            <h2 className="text-2xl font-bold text-center">Update Toy</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="price"
                  defaultValue={data.price}
                  placeholder="Price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className=" space-y-4">
                <input
                  type="text"
                  defaultValue={data.quantity}
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <textarea
                  type="text"
                  defaultValue={data.description}
                  name="description"
                  placeholder="Description"
                  className="textarea order border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Update Toy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
