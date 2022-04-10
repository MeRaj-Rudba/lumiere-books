import React, { useState } from "react";
import Head from "next/head";
import BooksHeader from "../../components/Books/books-header";
// import Image from "next/image";
import BookList from "../../components/Homepage/book-list";
import Page from "../../components/UI/page";
import EditBook from "../../components/Books/edit-book";
import variables from "../../util/variables";

export default function Books(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Head>
        <title>Lumiere | All Books</title>
        <meta name="description" content="For Lumiere Books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <h1 className="text-3xl customFont text-gray-700 ">All Books</h1>
          <BooksHeader setShowModal={setShowModal} />
          {showModal ? <EditBook setShowModal={setShowModal} /> : null}
          <BookList books={props.books} />
        </Page>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetch(`${variables.apiRoute}/books`);
  // console.log(data);
  const result = await data.json();
  return {
    props: { books: result.books }, // will be passed to the page component as props
  };
}
