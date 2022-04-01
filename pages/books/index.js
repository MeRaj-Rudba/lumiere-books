import Head from "next/head";
// import Image from "next/image";
import BookList from "../../components/Homepage/book-list";
import Page from "../../components/UI/page";

export default function Books(props) {
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
          <BookList books={props.books} />
        </Page>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetch("https://lumiere-book.herokuapp.com/books");
  // console.log(data);
  const result = await data.json();
  return {
    props: { books: result.books }, // will be passed to the page component as props
  };
}
