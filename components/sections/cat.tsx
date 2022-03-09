import classNames from "classnames";
import React from "react";
import styles from "../../styles/Categories.module.scss";

const Categories: React.FC = () => {
  return (
    <section className="position-relative">
      <span id="kategorie" className="scroll-anchor"></span>
      <h2 className="mb-4">Detaily soutěže</h2>
      <div className="row text-start">
        <div className="col-md-6 col-12 px-3 d-flex flex-column">
          <div className="d-flex">
            <h2 className="text-left">Kategorie</h2>
          </div>

          <ul className="w-100 text-start">
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
          <div className="d-flex justify-content-center">
            <h2 className={classNames("text-center", styles.title)}>Ceny</h2>
          </div>
          <ol>
            <li>5.000,- Kč</li>
            <li>3.000,- Kč</li>
            <li>2.000,- Kč</li>
          </ol>
          <p className="text-muted">
            Zvláštní cena FOMEI-poukazy, foto-video technika
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
