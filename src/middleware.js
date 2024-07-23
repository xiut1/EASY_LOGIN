// middleware : Next.js 12부터 도입되었으며, 페이지나 API 라우트에 대한 들어오는 요청을 가로채는 사용자 정의 함수
// JSON Web Tokens의 약자로 사용자 인증 정보를 안전하게 저장하고 서버와 클라이언트 간에 전달하는 역활을 한다.
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // 요청에 포함된 URL을 복사
  const nextUrl = req.nextUrl.clone();
  const token = await getToken({ req });

  // 토큰이 없으면, "/login"으로 보낸다.
  if (!token) {
    nextUrl.pathname = "/login";
    return NextResponse.redirect(nextUrl);
    // NextResponse.redirect('/login')로 사용하면 될거같지만 "/" 부분이 "%2F"로 인코딩되어 에러를 발생시킴.
  }
}

export const config = {
  // 배열에 명시된 경로를 가진 요청에 미들웨어가 적용되도록 설정한다.
  matcher: ["/", "/detail"],
};
