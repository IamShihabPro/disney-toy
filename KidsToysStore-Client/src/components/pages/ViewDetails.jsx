import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  FaAt,
  FaDollarSign,
  FaStar,
  FaUser,
  FaUserAlt,
  FaVoicemail,
} from "react-icons/fa";
import { useTitle } from "../hooks/useTitle";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../hooks/useCarts";

const ViewDetails = () => {
  const data = useLoaderData();

  useTitle("View Details");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(AuthContext);
  const [, refetch] = useCarts();

  const handleAddToCart = (product) => {
    // console.log(product);

    const items = {
      foodId: product._id,
      name: product.name,
      photo: product.photo,
      price: product.price,
      category: product.selectedCategory,
      email: user.email,
    };

    if (user) {
      fetch(`https://disney-toys-server.vercel.app/carts/`, {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(items),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          refetch();
        });
    } else {
      Swal.fire({
        title: "Please logIn to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(navigate("/logIn"));
        }
      });
    }
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row shadow-lg p-5 max-w-max">
          <img src={data?.photo} className="lg:w-[50%] rounded-lg" />
          <div className="space-y-5 ">
            <h1 className="text-5xl font-bold lg:text-5xl md:text-4xl sm:text-3xl">
              {data?.name}
            </h1>
            <h1 className=" font-bold text-lg flex items-center text-red-400">
              {" "}
              <FaUserAlt className="mr-5"></FaUserAlt>
              Seller : {data.Sellername}
            </h1>
            <h1 className=" font-bold text-lg flex items-center text-red-400">
              <FaAt className="mr-5"></FaAt>

              {data.selleremail}
            </h1>
            <p className="flex items-center text-lg">
              <FaStar className="text-yellow-500"></FaStar>{" "}
              <span className="font-bold text-[#4cb353]">
                {data.rating} Rating
              </span>
            </p>
            <p className="text-lg font-bold text-indigo-400 bg-blue-50 p-5">
              {data.quantity} Product Available Now
            </p>
            <p className="text-5xl text-red-400 flex my-5">
              Price: <FaDollarSign></FaDollarSign> {data.price}
            </p>

            <button
              onClick={() => handleAddToCart(data)}
              className="button-primary"
            >
              Add To cart
            </button>

            <div className="py-6 space-y-2">
              <h1 className="font-bold text-2xl">Description:</h1>
              <p className=" ">{data?.description}.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
