import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const url = req.nextUrl.clone();

  if (!token) {
    // TODO : 토큰이 업을때 로그인페이지로 보내고 (login폴더로 페이지 하나 따야함)
    // url.pathname = "/";
    // 토큰이 있을때 그냥 보내기
    // return NextResponse.redirect(url);
  }
}
