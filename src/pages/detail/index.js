import styles from "./detail.module.scss";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Detail() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // 로그인이 되지 않았을 경우에 미들웨어를 사용 하지 않고 간단하게 페이지 단에서 로그인 페이지로 보낼 수 있음
  // if (status === "unauthenticated") {
  //   router.push("/login");
  //   return;
  // }

  return (
    <>
      {status !== "loading" && status !== "unauthenticated" && (
        <>
          <div className={styles.card}>
            <div className={styles.cardBox}>
              <img className={styles.cardImg} src={session.user.image} alt="" />
              <div className={styles.userName}>{session.user.name}</div>
              <button
                className={styles.logoutButton}
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                LOGOUT
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
