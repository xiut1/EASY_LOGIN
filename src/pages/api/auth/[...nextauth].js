import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
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
  callbacks: {
    // NextAuth에서 인증 프로세스의 여러 단계에서 특정 로직을 실행하도록 할 수 있는 옵션으로
    // 1. 세션 데이터를 사용자화하거나 작업을 추가하려고 할 때.
    // 2. 토큰에 추가적인 클레임을 넣거나 이 값을 수정하려고 할 때.
    // 3. 인증 과정 도중에 추가적인 작업이 필요할 때 (예를 들어, 회원 가입 과정에서 새 사용자를 DB에 저장하거나, 사용자가 로그인할 때마다 이를 추적하려는 경우).
  },
  session: {
    //
  }
};

export default NextAuth(authOptions);
