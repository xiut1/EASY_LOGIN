import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  // naver : /api/auth/callback/naver
  console.log("sss", req.nextUrl.clone());
  // const token = await getToken({ req });
  // console.log("token", token);
}
