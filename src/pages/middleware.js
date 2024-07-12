// pages/_middleware.js
import { getSession } from "next-auth/react";

export default async function middleware(req, res, next) {
  const session = await getSession({ req });

  if (!session && req.url !== "/") {
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }

  next();
}
