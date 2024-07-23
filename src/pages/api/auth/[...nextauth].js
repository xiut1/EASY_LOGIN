// next-auth docs : https://next-auth.js.org/getting-started/example
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

// next-auth options : https://next-auth.js.org/configuration/options
export const authOptions = {
  // 애플리케이션의 비밀 키값. NextAuth가 클라이언트와 서버 사이에 보안 세션을 관리하는 데 사용됨.
  secret: process.env.NEXTAUTH_SECRET,
  // 가용한 인증 제공자를 선언. 각 제공자는 clientId와 clientSecret을 요구함.
  providers: [
    // https://github.com/settings/developers
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // https://developers.naver.com/apps/#/list
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    // https://developers.kakao.com/console/app
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  // 기본 인증 페이지 대신에 표시될 커스텀 페이지의 경로를 설정
  pages: {
    signIn: "/login",
    error: "/error",
  },
  // NextAuth에서 인증 프로세스의 여러 단계에서 특정 로직을 실행하도록 할 수 있는 옵션
  callbacks: {
    // 1. 세션 데이터를 사용자화하거나 작업을 추가하려고 할 때.
    // 2. 토큰에 추가적인 클레임을 넣거나 이 값을 수정하려고 할 때.
    // 3. 인증 과정 도중에 추가적인 작업이 필요할 때 (예를 들어, 회원 가입 과정에서 새 사용자를 DB에 저장하거나, 사용자가 로그인할 때마다 이를 추적하려는 경우).
    session: async (session, user) => {
      session.userId = user?.id;
      console.log(session);
      return session;
    },
  },
  // 세션관련 설정. strategy는 세션 관리 전략, maxAge는 세션의 최대 유지시간, updateAge는 세션 데이터가 업데이트 되는 최소 간격을 설정
  session: {
    // strategy: "jwt", // databaseㅊ
    // maxAge: 30 * 24 * 60 * 60, // 30 일
    // updateAge: 24 * 60 * 60, // 24 시간
  },
  // JSON Web Tokens의 약자로 사용자 인증 정보를 안전하게 저장하고 서버와 클라이언트 간에 전달하는 역활을 한다.
  // 기본적으로 next-auth는 서버 내 메모리에서 세션을 처리하지만, 이를 사용자 지정 JWT를 통해 교체할 수 있습니다.
  jwt: {
    // secret: 'YOUR_JWT_SECRET'
  },
  // NextAuth에서 발생하는 여러 이벤트에 대한 콜백 함수를 정의하는 옵션
  events: {
    // async signIn(message) { /* on successful sign in */ },
    // async signOut(message) { /* on signout */ },
    // async createUser(message) { /* user created */ },
    // async updateUser(message) { /* user updated - e.g. their email was verified */ },
    // async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
    // async session(message) { /* session is active */ },
  },
  // 데이터 저장을 담당하는 어댑터 설정
  // adapter: "YOUR_ADAPTER",
  // 로그 확인을 위한 디버그 옵션
  debug: true,
  // 로그 출력 설정
  // logger: "YOUR_LOGGER_FUNCTION",
  // UI theme 설정
  // theme: "light" // dark
};

export default NextAuth(authOptions);
