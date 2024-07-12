import styles from "./Modal.module.scss";
import { signIn } from "next-auth/react";

export const Modal = ({ on, setOn }) => {
  return (
    on && (
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <div className={styles.modalCont}>
            <button
              className={`${styles.loginButton} ${styles.github}`}
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
          <button className={styles.closeButton} onClick={() => setOn(false)}>
            닫기
          </button>
        </div>
      </div>
    )
  );
};
