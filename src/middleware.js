// JWT (JSON Web Token)은 웹 표준 (RFC 7519)으로, 두 개체 사이에서 정보를 안전하게 전송하기 위해 설계된 작고 독립적인 자가 포함된 방식을 제공
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // 요청에 포함된 URL을 복사하여 'nextUrl'에 저장한다
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
