// next-auth middleware
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // 요청에 포함된 URL을 복사하여 'nextUrl' 변수에 저장한다
  const nextUrl = req.nextUrl.clone();
  const token = await getToken({ req });

  // 토큰이 없으면, "/login"으로 보낸다.
  if (!token) {
    alert('로그인 필요')
    nextUrl.pathname = "/login";
    return NextResponse.redirect(nextUrl);
    // NextResponse.redirect('/login')로 사용하면 될거같지만 "/" 부분이 "%2F"로 인코딩되어 에러를 발생시킴.
  }
}

export const config = {
  // 배열에 명시된 경로를 가진 요청에 미들웨어가 적용되도록 설정한다.
  matcher: ["/", "/detail"],
};
