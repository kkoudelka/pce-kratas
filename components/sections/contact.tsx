/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/Contacts.module.scss";

const kontakts = [
  {
    name: "Gabriela Votavová",
    img: "votavova.webp",
  },
  {
    name: "Richard Brun",
    img: "brun.jpeg",
  },
];

const Contact: React.FC = () => {
  return (
    <>
      <div className="position-relative">
        <span id="kontakt" className="scroll-anchor"></span>
        <div className="container mb-4 px-2 px-md-5">
          <h2 className="mb-4 underline text-white">Kontakty</h2>
          <div className="d-flex flex-wrap flex-md-row flex-column text-white">
            {kontakts.map((kontakt, i) => (
              <div key={i} className="col-12 col-md-5 p-2">
                <div className="carticka d-flex align-items-center">
                  <img
                    decoding="async"
                    src={`/${kontakt.img}`}
                    alt={kontakt.name}
                    width={125}
                    className="me-4 gabca-obrazek"
                  />
                  <div>
                    <h3 className="carticka-title">{kontakt.name}</h3>
                    <div className="d-flex align-items-center mt-2">
                      <a
                        href="mailto:info@pardubickykratas.cz"
                        className="linka-gabca"
                      >
                        <i className="far fa-envelope pce fa-lg me-2"></i>
                        <span>info@pardubickykratas.cz</span>
                      </a>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <a href="tel:+420466611173" className="linka-gabca">
                        <i className="fas fa-phone-alt pce fa-lg me-2"></i>
                        <span>+420 466 611 173</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="position-relative" style={{ height: 500 }}>
          <div
            className="w-100"
            style={{ minHeight: 250, overflowX: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.799591750852!2d15.788179316064909!3d50.033850979420016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcc8b132e5567%3A0x375fdea61136abb9!2sDELTA%20-%20High%20School%20of%20Computer%20Science%20and%20Economics!5e0!3m2!1sen!2suk!4v1646851077288!5m2!1sen!2suk"
              height={500}
              style={{ border: 0, width: "300%", marginLeft: "-100%" }}
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                pointerEvents: "none",
              }}
              className="d-lg-flex container align-items-center d-none"
            >
              <div className={styles.card} style={{ pointerEvents: "auto" }}>
                <div className="card-body mx-3 my-2">
                  <img
                    decoding="async"
                    src="/img/delta_rude.svg"
                    width={200}
                    alt="Delta Logo Cervene jojojo to je nase barvicka"
                  />
                  <hr />
                  <p className="font-weight-bold">
                    Ke Kamenci 151
                    <br />
                    530 03 Pardubice
                  </p>
                  <div className="d-flex align-items-center mt-2">
                    <a
                      href="https://www.delta-skola.cz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linka-gabca"
                    >
                      <i className="fas fa-globe pce fa-lg me-2"></i>
                      <span> www.delta-skola.cz</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-block d-lg-none">
            <div className="row">
              <div className="col-12">
                <div className={styles.card}>
                  <div className="d-flex flex-column align-items-center mx-3 my-2">
                    <img
                      src="/img/delta_rude.svg"
                      width={200}
                      alt="Delta Logo Cervene jojojo to je nase barvicka"
                    />
                    <hr />
                    <p className="font-weight-bold">
                      Ke Kamenci 151
                      <br />
                      530 03 Pardubice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
