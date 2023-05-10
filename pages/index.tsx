import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Check Huay | Online</title>
      </Head>
      {/* <Navbar /> */}
      <Cards />
    </main>
  );
}
