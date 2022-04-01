import React from "react";
import BookItem from "./book-item";

export default function BookList(props) {
  return (
    <div>
      {/* <h2 className="customFont">Book List</h2> */}
      {props.books ? (
        <ul className="max-w-7xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {props.books.map((b) => (
            <BookItem key={b._id} book={b} />
          ))}
        </ul>
      ) : (
        <p className="customFont">No Books Found</p>
      )}
    </div>
  );
}
