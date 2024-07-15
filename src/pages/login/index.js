import { signIn } from "next-auth/react";
import styles from "./login.module.scss";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <div className={styles.modalCont}>
          <button
            className={`${styles.loginButton} ${styles.github}`}
            onClick={() => signIn("github", { callbackUrl: process.env.NEXT_PUBLIC_APP_URL + '/detail' })}
          >
            GITHUB
          </button>
          <button
            className={`${styles.loginButton} ${styles.naver}`}
            onClick={() => signIn("naver", { callbackUrl: process.env.NEXT_PUBLIC_APP_URL + '/detail' })}
          >
            NAVER
          </button>
          <button
            className={`${styles.loginButton} ${styles.kakao}`}
            onClick={() => signIn("kakao", { callbackUrl: process.env.NEXT_PUBLIC_APP_URL + '/detail' })}
          >
            KAKAO
          </button>
        </div>
        <button className={styles.closeButton} onClick={() => router.push("/")}>
          닫기
        </button>
      </div>
    </div>
  );
}
