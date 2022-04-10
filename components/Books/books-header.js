import React from "react";
import { IoAdd } from "react-icons/io5";
export default function BooksHeader(props) {
  return (
    <div className="max-w-7xl mx-auto p-10 flex justify-start ">
      <p className="text-2xl" onClick={() => props.setShowModal(true)}>
        <IoAdd className="cursor-pointer" />
      </p>
    </div>
  );
}
