import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>간편로그인</title>
      </Head>
      <main>
        <button onClick={() => router.push("/login")}>LOGIN</button>
      </main>
    </>
  );
};

export default Home;
