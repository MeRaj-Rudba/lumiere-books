import React from "react";
import { LogoNodejs } from "react-ionicons";
import { IoPricetag } from "react-icons/io5";
import variables from "../../util/variables";

export default function BookDetails(props) {
  const { book } = props;
  return (
    <div className="w-full p-10 max-w-3xl grid justify-items-center  content-center bg-white rounded-lg border border-gray-200 shadow">
      <img
        src={`${variables.apiRoute}/${book.image}`}
        alt={book.title}
        className="w-64 object-cover object-center "
      />

      <div className="w-full mt-10">
        <p className="customFont text-gray-700 text-3xl">{book.title}</p>
        <p className="customFont  font-light italic text-gray-500">
          by {book.author}
        </p>
        <div className="bg-cyan-200  px-3 py-2 text-sm font-semibold   my-2 rounded-lg">
          <span className="flex  text-gray-600 items-center">
            <IoPricetag />

            <p className="customFont font-light ml-2 "> {book.genre}</p>
          </span>
        </div>
        <div className="mt-5">
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Publication : </span>
            {book.publication}
          </p>
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Type : </span>
            {book.type}
          </p>
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Status : </span>
            {book.status}
          </p>
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Published On : </span>
            {book.year}
          </p>
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Availability : </span>
            {book.availability}
          </p>
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Rank : </span>
            {book.rank}
          </p>
          <p className="customFont text-gray-700 ">
            <span className=" font-semibold customFont">Rating : </span>
            {book.rating ? book.rating : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
