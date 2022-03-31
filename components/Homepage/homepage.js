import React from "react";
import Page from "../UI/page";
import BookList from "./book-list";

export default function Homepage(props) {
  //console.log(props.books);
  return (
    <Page>
      <h1 className="text-3xl">All Books</h1>
      <BookList books={props.books} />
    </Page>
  );
}
