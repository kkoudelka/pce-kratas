import classNames from "classnames";
import React from "react";
import styles from "../../styles/Categories.module.scss";

const Categories: React.FC = () => {
  return (
    <section className="position-relative">
      <span id="kategorie" className="scroll-anchor"></span>
      <div className="row text-start">
        <div className="col-md-6 col-12 px-3 d-flex flex-column">
          <div className="d-flex">
            <h2 className={classNames("text-left my-3", styles.title)}>
              Kategorie
            </h2>
          </div>

          <ul className={classNames("w-100 text-start categories")}>
            <li>
              Krátký film na regionální téma města Pardubice a Pardubického
              kraje
            </li>
            <li>Krátký hraný film</li>
            <li>Animovaný film</li>
            <li>Videoklip a YouTube videoprezentace</li>
            <li>Juniorské filmové okénko (pro žáky 2. stupně ZŠ)</li>{" "}
            <li>Snímky studentů filmových škol do 21 let</li>
          </ul>
        </div>
        <div className="col-md-6 col-12 px-3 pt-3 pt-md-0 ">
          <div className="d-flex">
            <h2 className={classNames("text-left my-3", styles.title)}>Ceny</h2>
          </div>
          <p>
            Pro první tři místa každé kategorii čeká finanční odměna ve výši{" "}
            <em>5000,- Kč</em> pro první místo, <em>3000,- Kč</em> pro druhé
            místo a <em>2000,- Kč</em> pro třetí místo.
          </p>
          <p>
            Naši partneři rovněž věnovali do soutěže speciální ceny obsahující
            například <em>poukazy FOMEI</em> a <em>foto/video techniku</em>,
            která se rozhodně neztratí.
          </p>

          <div className="d-flex">
            <h2 className={classNames("text-left my-3", styles.title)}>
              Vyhlášení
            </h2>
          </div>
          <p>
            Projekce a slavnostní vyhlášení soutěžních filmů budou probíhat
            online prostřednictvím videostreamu na našem videokanálu{" "}
            <a
              href="https://www.youtube.com/channel/UCCTJGW3hZ7VjCr4LrDVtyQg"
              target="_blank"
            >
              Delta Film
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
