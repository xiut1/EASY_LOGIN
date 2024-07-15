import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // 로그인이 되지 않았을 경우에 간단하게 페이지 단에서 로그인 페이지로 보낼 수 있음
  // if (status === "unauthenticated") {
  //   router.push("/login");
  //   return;
  // }

  return (
    <>
      {status !== "loading" && status !== "unauthenticated" && (
        <>
          <div>
            <div>
              <img src={session.user.image} alt="" />
            </div>
            <div>{session.user.name}</div>
          </div>
          <button onClick={() => signOut({ callbackUrl: "/" })}>LOGOUT</button>
        </>
      )}
    </>
  );
}
