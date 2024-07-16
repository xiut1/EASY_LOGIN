import "@/styles/global.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    // sessionprovider 하위에 있는 항목들에서 session을 사용하기 위해 nextauth 컨텍스트를 지정해줌
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
