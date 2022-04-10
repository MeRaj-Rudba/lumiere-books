import Head from "next/head";
import Image from "next/image";
import BookList from "../components/Homepage/book-list";
import Page from "../components/UI/page";
import styles from "../styles/Home.module.css";
import variables from "../util/variables";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Lumiere | Home</title>
        <meta name="description" content="For Lumiere Books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <h1 className="text-3xl customFont text-gray-700 ">Featured Books</h1>
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
