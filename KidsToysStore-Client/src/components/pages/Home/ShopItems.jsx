import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopItems = ({ data }) => {
  return (
    <div>
      <div className="max-w-xs bg-white shadow rounded-lg overflow-hidden h-full">
        <img
          className="w-full h-48 object-cover"
          src={data.photo}
          alt="Toy Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p className=" font-bold button-secondary">${data.price}</p>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500"></FaStar>
            <p className="text-gray-700">4.5</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <Link to={`/viewDetails/${data._id}`} className="button-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
