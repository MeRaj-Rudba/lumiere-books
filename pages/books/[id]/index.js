import Head from "next/head";
import { Fragment } from "react";
import BookDetails from "../../../components/detailsPage/book-details";
import Page from "../../../components/UI/page";
import variables from "../../../util/variables";

export default function BoookDetails({ book }) {
  return (
    <Fragment>
      <Head>
        <title>{book.title}</title>
        <meta
          name="description"
          content={`This page provides details about the book with title ${book.title} by ${book.author}.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div className=" flex justify-center ">
          <BookDetails book={book} />
        </div>
      </Page>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${variables.apiRoute}/books`);
  const items = await res.json();

  const paths = items.books.map((item) => ({
    params: { id: item._id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${variables.apiRoute}/books/${params.id}`);
  const item = await res.json();

  return { props: { book: item.book } };
}
