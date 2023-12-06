import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Form } from "react-router-dom";
import Toy from "../myToys/Toy";
import Loader from "../../shared/Loader";
import { useTitle } from "../../hooks/useTitle";

const AllToys = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useTitle("All  Toys");

  useEffect(() => {
    setLoading(true);

    fetch(`https://disney-toys-server.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        setLoading(false);
      });
  }, []);

  const handleSearches = (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    console.log(text);

    setLoading(true);

    fetch(`https://disney-toys-server.vercel.app/search/${text}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        setLoading(false);
      });
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="form-control">
          <Form onSubmit={handleSearches} className="input-group">
            <input
              name="text"
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </Form>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className=" table-compact w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data && data.map((data) => <Toy key={data._id} data={data}></Toy>)}
          </tbody>
        </table>
      </div>

      {loading && <Loader></Loader>}
    </div>
  );
};

export default AllToys;
