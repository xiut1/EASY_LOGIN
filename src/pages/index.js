import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>간편로그인</title>
      </Head>
      <main>
        <div>aaaaaa</div>
      </main>
    </>
  );
};
