import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToy from "./MyToy";
import { useTitle } from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useTitle("My Toys");

  useEffect(() => {
    fetch(`https://disney-toys-server.vercel.app/allToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleLowestPrice = () => {
    fetch(`https://disney-toys-server.vercel.app/lowest/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const handleHighestPrice = () => {
    fetch(`https://disney-toys-server.vercel.app/highest/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <div className="flex justify-center my-10 space-x-5">
        <button onClick={handleLowestPrice} className="button-secondary">
          Lowest Price
        </button>
        <button onClick={handleHighestPrice} className="button-secondary">
          Highest Price
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table-xs w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {data &&
              data.map((data) => (
                <MyToy key={data._id} data={data} setData={setData}></MyToy>
              ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
