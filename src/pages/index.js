import React, { useState } from "react";
import { useSession } from "next-auth/react";

import Head from "next/head";
import { Modal } from "@/pages/components/modal";
// import { router } from "next/client";

const Home = () => {
  const { data: session, status } = useSession();
  const [on, setOn] = useState(false);

  // if (session !== {}) {
  //   router.push("/detail");
  // }

  return (
    <>
      <Head>
        <title>간편로그인</title>
      </Head>
      <main>
        <button onClick={() => setOn(true)}>LOGIN</button>
        <Modal on={on} setOn={setOn} />
      </main>
    </>
  );
};

export default Home;
