import "@/styles/global.css";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";
// 클릭 후 사용 할 수 있는 옵션값 확인 확인 https://next-auth.js.org/getting-started/client#usesession
import { SessionProvider } from "next-auth/react";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EASY_LOGIN</title>
      </Head>
      {/* // SessionProvider 하위에 있는 항목들에서 session을 사용하기 위해 nextauth 컨텍스트를 지정해줌 */}
      <SessionProvider session={pageProps.session}>
        <main className={notoSansKR.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}
