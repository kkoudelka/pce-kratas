/* eslint-disable @next/next/no-img-element */
import React from "react";

const partners = [
  { name: "Pardubický kraj", image: "kraj.svg" },
  { name: "Magistrát města Pardubice", image: "pce_siroka_barevna.svg" },
  { name: "FOMEI", image: "fomei.svg" },
  { name: "VčVSAFV a Rychnovská 8", image: "R8_a_VcVSAFV.svg" },
];

const Partners: React.FC = () => {
  return (
    <section className="position-relative">
      <span id="partneri" className="scroll-anchor"></span>
      <div className="d-flex">
        <h2 className="mb-4 underline">Naši partneři</h2>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-center justify-items-around">
        {partners.map((partner) => (
          <div key={partner.name} className="col-12 col-md-3 text-start p-3">
            <img
              src={`/partners/${partner.image}`}
              alt={partner.name}
              height={60}
              className="panter-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
