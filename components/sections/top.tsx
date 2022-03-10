/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "../../styles/Top.module.scss";

const Top: React.FC = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} src="/pk_bg.webm" muted autoPlay loop />
      <div className={styles.mask} />
      <div className={styles.content}>
        <div className="d-flex w-100 h-100 flex-column justify-content-center align-items-center pt-5">
          <img
            src="/img/kratas-logo-light.svg"
            height={200}
            className={styles.logo}
            alt="Pardubický kraťas logo"
          />
          <h1 className="visually-hidden">Pardubický Kraťas</h1>
          <h2 style={{ marginTop: "-50px" }}>aneb filmová veselka na DELTĚ</h2>
          <div className="my-5">
            <Link href="/#prihlaska" passHref>
              <a className="cudlitko-linka">
                <button className="cudlitko">Jak se přihlásit</button>
              </a>
            </Link>
          </div>
          <div className="text-center">
            <span className={styles.scrollArrow}>&#187;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
