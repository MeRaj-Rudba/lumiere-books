import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function BookItem(props) {
  const { book } = props;
  const router = useRouter();

  const handleDetails = () => {
    // console.log(`Show Details`);
    router.push(`books/${book._id.toString()}`);
  };

  return (
    <div
      onClick={handleDetails}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow  my-5 hover:scale-105 hover:cursor-pointer transition-all duration-500"
    >
      <img
        src={book.image}
        className="h-64 w-full object-cover object-center rounded-t-lg"
      />
      <div className="p-5">
        <p className="mb-2 text-xl tracking-tight text-gray-700 customFont">
          {book.title}
        </p>
        <p className="mb-3 font-light italic text-gray-500 customFont">
          by {book.author}
        </p>
        <button
          onClick={handleDetails}
          className={`px-6 py-2 bg-cyan-400 hover:bg-cyan-300 transition-all duration-500 rounded-xl hover:scale-105 text-white customFont `}
        >
          Details
        </button>
      </div>
    </div>
  );
}
