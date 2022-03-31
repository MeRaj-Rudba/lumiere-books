import React from "react";

export default function BookList(props) {
  return (
    <div>
      <h2>Book List</h2>
      {props.books ? (
        <ul>
          {props.books.map((b) => (
            <li key={b._id}>{b.title}</li>
          ))}
        </ul>
      ) : (
        <p>No Books Found</p>
      )}
    </div>
  );
}
