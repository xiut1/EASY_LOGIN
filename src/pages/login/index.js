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
            // next-auth의 signIn 메서드를 사용, provider(로그인 제공업체)과 options(callbackUrl, redirect)를 정해준다.
            onClick={() => signIn("github", { callbackUrl: "/detail" })}
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
        {/*<button className={styles.closeButton} onClick={() => router.push("/")}>*/}
        {/*  CLOSE*/}
        {/*</button>*/}
      </div>
    </div>
  );
}
