/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.scss";

const links = [
  { href: "/#o", label: "O Soutěži" },
  { href: "/#kategorie", label: "Kategorie" },
  { href: "/#prihlaska", label: "Přihláška" },
  { href: "/", label: "Projekce" },
  //{ href: "/", label: "Workshop" },
  { href: "/#porota", label: "Vyhodnocení" },
  { href: "/#partneri", label: "Partneři" },
  { href: "/#kontakt", label: "Kontakty" },
];

const Navbar: React.FC = () => {
  return (
    <nav
      className={classNames(
        "navbar fixed-top navbar-expand-lg navbar-dark",
        styles.navbar
      )}
    >
      <div className="container">
        <Link passHref href="/">
          <img
            src="/img/kratas-logo-light.svg"
            height={75}
            className={classNames(styles.logo, "pointer")}
            alt="Pardubický kraťas logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
            {links.map((link, i) => (
              <li key={i} className="nav-item">
                <Link href={link.href} passHref>
                  <a className={classNames("nav-link", styles.link)}>
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a
                href="https://www.facebook.com/pardubickykratas/"
                target="_blank"
                className={classNames("nav-link", styles.link)}
                rel="noopener noreferrer"
                title="Facebook"
              >
                <div>
                  <i className="fab fa-facebook fa-lg me-2 me-md-0"></i>
                  <span className="d-md-none">Facebook</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.instagram.com/pardubickykratas/"
                target="_blank"
                title="Instagram"
                className={classNames("nav-link", styles.link)}
                rel="noopener noreferrer"
              >
                <div>
                  <i className="fab fa-instagram fa-lg me-2 me-md-0"></i>
                  <span className="d-md-none">Instagram</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
