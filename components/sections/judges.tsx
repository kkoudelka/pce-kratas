/* eslint-disable @next/next/no-img-element */
import React from "react";

const judges = [
  {
    name: "MgA. Jan Peml",
    image: "peml.jpeg",
    desc: "Střihač, kameraman, režisér a absolvent FAMU Praha. V současnosti vyučuje a vede pracovište Rozhlasová a televizní laboratoř na Institutu komunikačních studií a žurnalistiky UK FSV.",
  },
  {
    name: "Michal Špitálský",
    image: "spitalsky.jpeg",
    desc: "Student druhého ročníku oboru Film and TV Production na Northumbria University, bývalý student DELTY. V současnosti studuje, organizuje filmový festival Jeden svět v Ústí nad Orlicí a pracuje na svém celovečerním dokumentu.",
  },
  {
    name: "Ing. Martin Škrobák",
    image: "skrobak.jpeg",
    desc: "Předseda Východočeského volného sdružení pro amatérský film a video z.s. a hlavní organizátor soutěže Rychnovská 8.",
  },
  {
    name: "Mgr. et MgA. Pavel Trnka, Ph.D.",
    image: "trnka.jpeg",
    desc: "Výtvarník, režisér a autor animovaných filmů. Pracuje jako vysokoškolský pedagog na Pedagogické fakultě v Hradci Králové, kde garantuje řadu předmětů oboru Grafická tvorba a multimédia.",
  },
];

const Judges: React.FC = () => {
  return (
    <section className="position-relative">
      <span id="porota" className="scroll-anchor"></span>
      <div className="d-flex">
        <h2 className="mb-4 underline">Porota</h2>
      </div>
      <div className="d-flex flex-wrap">
        {judges.map((judge) => (
          <div key={judge.name} className="col-12 col-md-6 py-3 mr-3">
            <div className="judge mb-3">
              <img
                src={`/heads/${judge.image}`}
                alt={judge.name}
                className="judge-img"
              />
            </div>
            <h3>{judge.name}</h3>
            <p>{judge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Judges;
