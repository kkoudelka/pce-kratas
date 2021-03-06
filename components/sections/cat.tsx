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
            <li>Juniorské filmové okénko (pro žáky 2. stupně ZŠ)</li>
            <li>Snímky studentů filmových škol do 21 let</li>
          </ul>
        </div>
        <div className="col-md-6 col-12 px-3 pt-3 pt-md-0 ">
          <h2 className={classNames("text-start my-3", styles.title)}>Ceny</h2>
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
        </div>
      </div>

      <h2 className={classNames("text-start my-3", styles.title)}>Vyhlášení</h2>
      <p>
        Projekce a slavnostní vyhlášení soutěžních filmů budou probíhat online
        prostřednictvím videostreamu na našem YouTube kanálu{" "}
        <a
          href="https://www.youtube.com/channel/UCCTJGW3hZ7VjCr4LrDVtyQg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Delta Film
        </a>
        .
      </p>

      <hr className="my-5" />

      <div className="carticka prihlaska position-relative">
        <span id="prihlaska" className="scroll-anchor"></span>

        <div className="d-flex">
          <h2 className={classNames("text-left my-3", styles.title)}>
            Jak se přihlásit?
          </h2>
        </div>
        <p>
          Přihlášení na Pardubický kraťas ti zabere jenom chvíli! Stačí
          následovat tři jednoduché kroky:
        </p>
        <ol>
          <li>
            <h3 className="underline">Vyplň soutěžní přihlášku!</h3>
            <p>
              Zde nalezneš odkaz ke{" "}
              <a href="/kratas_prihlaska.pdf" target="_blank">
                stažení přihlášky
              </a>
              .
            </p>
          </li>

          <li>
            <h3 className="underline">Nahraj svůj hotový film online!</h3>
            <p>
              Nahraj finální podobu filmu na internet - například na porál{" "}
              <a
                href="https://www.uschovna.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Úschovna
              </a>
              , nebo{" "}
              <a
                href="https://wetransfer.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                WeTransfer
              </a>
              .
            </p>
          </li>

          <li>
            <h3 className="underline">Pošli nám odkaz!</h3>
            <p>
              Zašli nám odkaz na platformu s tvým dílem na emailovou adresu{" "}
              <a href="mailto:info@pardubickykratas.cz">
                info@pardubickykratas.cz
              </a>
              .
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Categories;
