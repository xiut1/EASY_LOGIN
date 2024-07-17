import "@/styles/global.css";
// 클릭 후 사용 할 수 있는 옵션값 확인 확인 https://next-auth.js.org/getting-started/client#usesession
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    // sessionprovider 하위에 있는 항목들에서 session을 사용하기 위해 nextauth 컨텍스트를 지정해줌
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
