import Head from "next/head";
import Image from "next/image";
import Homepage from "../components/Homepage/homepage";
import Page from "../components/UI/page";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Lumiere | Home</title>
        <meta name="description" content="For Lumiere Books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage books={props.books} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetch("https://lumiere-book.herokuapp.com/books");
  console.log(data);
  const result = await data.json();
  return {
    props: { books: result.books }, // will be passed to the page component as props
  };
}
