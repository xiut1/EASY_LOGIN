import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

const env = process.env;

export const authOptions = {
  pages: {
    signIn: "login",
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    NaverProvider({
      clientId: env.NAVER_CLIENT_ID,
      clientSecret: env.NAVER_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: env.KAKAO_CLIENT_ID,
      clientSecret: env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {},
};

export default NextAuth(authOptions);
