import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackButton({ destination = "/" }) {
  return (
    <Link
      to={destination}
      className="flex items-center bg-sky-800 text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-sky-700 transition-colors duration-300 max-w-max"
    >
      <BsArrowLeft className="text-xl mr-1.5" />
      <span className="text-base font-semibold">Back</span>
    </Link>
  );
}

export default BackButton;
