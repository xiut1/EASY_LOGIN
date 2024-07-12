import { signOut, useSession } from "next-auth/react";

export default function Detail() {
  const { data: session, status } = useSession();

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
