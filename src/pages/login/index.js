import styles from "./login.module.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <div className={styles.modalCont}>
          <button
            className={`${styles.loginButton} ${styles.github}`}
            onClick={() => signIn("github", { callbackUrl: "/detail" })}
            // next-auth의 signIn 메서드를 이용해서 provider과 options를 정해준다.
          >
            GITHUB
          </button>
          <button
            className={`${styles.loginButton} ${styles.naver}`}
            onClick={() => signIn("naver", { callbackUrl: "/detail" })}
          >
            NAVER
          </button>
          <button
            className={`${styles.loginButton} ${styles.kakao}`}
            onClick={() => signIn("kakao", { callbackUrl: "/detail" })}
          >
            KAKAO
          </button>
        </div>
        <button className={styles.closeButton} onClick={() => router.push("/")}>
          CLOSE
        </button>
      </div>
    </div>
  );
}
