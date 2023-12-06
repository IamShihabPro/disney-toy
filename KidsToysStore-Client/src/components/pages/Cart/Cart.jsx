import React from "react";
import useCarts from "../../hooks/useCarts";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cart, refetch] = useCarts();

  console.log(cart);

  const totalPrice = cart.reduce(
    (sum, cart) => parseFloat(cart.price) + sum,
    0
  );

  const handleDelete = (id) => {
    fetch(`https://disney-toys-server.vercel.app/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        refetch();
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <h1 className="text-3xl font-bold">Total Items : {cart.length}</h1>
        <h1 className="text-3xl font-bold my-5">Total Price : {totalPrice} </h1>

        <table className="table table-sm w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart &&
              cart.map((cart, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={cart.photo} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{cart.name}</td>
                    <td>{cart.price}</td>
                    <th>
                      <FaTrash
                        onClick={() => handleDelete(cart._id)}
                        className="text-red-400"
                      ></FaTrash>
                    </th>
                  </tr>
                );
              })}
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
