import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>EASY_LOGIN</title>
      </Head>
      <main>
        <button onClick={() => router.push("/login")}>LOGIN</button>
      </main>
    </>
  );
};

export default Home;
