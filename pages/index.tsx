import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import { MetaHead } from "../components/meta-head";
import Categories from "../components/sections/cat";
import Contact from "../components/sections/contact";
import Judges from "../components/sections/judges";
import Partners from "../components/sections/partners";
import Top from "../components/sections/top";

const Home: NextPage = () => {
  return (
    <Layout>
      <MetaHead
        title="Pardubický kraťas"
        description="Pardubický kraťas je nová studentská filmová soutěž studentů středních škol a druhého stupně základních škol s cílem motivovat studenty k mediální tvůrčí činnosti a obohatit kulturní nabídku pardubického regionu."
      />
      <Top />
      <div className="container">
        <div className="mt-5 px-0 px-md-5 text-left text-white">
          <section className="position-relative">
            <span id="o" className="scroll-anchor"></span>
            <h2 className="mb-4 underline">Co je Pardubický kraťas?</h2>
            <div className="row">
              <div className="col-12 col-md-8 pe-5">
                <p>
                  Pardubický kraťas je nová studentská{" "}
                  <em>filmová soutěž studentů středních škol</em> a žáků druhého
                  stupně základních škol. Cílem tohoto projektu je nejenom
                  vytvoření regionální soutěže krátkých studentských filmů s
                  celostátním přesahem, ale i snaha motivovat studenty k
                  mediální tvůrčí činnosti a obohatit kulturní nabídku
                  pardubického regionu.
                </p>
                <p>
                  Podtitul soutěže <em>filmová veselka na DELTĚ</em> odkazuje na
                  kus historie města Pardubic. <em>Veselka</em> byl totiž název
                  hostince vystavěného na konci 17. století nedaleko Zelené
                  brány. Později přestavěná na hotel, Veselka pohostila císaře,
                  prezidenta a další historické postavy českých dějin. V roce
                  1915 zde taktéž vzniknul filmový sál, který se stal{" "}
                  <em>prvním prostorem určeným výhradně pro promítání filmů</em>{" "}
                  v Pardubicích.
                </p>
              </div>

              <div className="col-12 col-md-4">
                <div className="carticka">
                  <h3 className="carticka-title">Důležité info</h3>
                  <h4>Kde?</h4>
                  <p>DELTA - Střední škola informatiky a ekonomie, Pardubice</p>
                  <h4>Kdy?</h4>
                  <p>7. dubna 2022</p>
                </div>
              </div>
            </div>
          </section>
          <hr className="mt-5 mb-3" />
          <Categories />
          <hr className="my-5" />
          <Judges />
          <hr className="my-5" />
          <Partners />
          <hr className="my-5" />
        </div>
      </div>
      <Contact />
    </Layout>
  );
};

export default Home;
