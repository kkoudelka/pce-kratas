import classNames from "classnames";
import React, { useEffect, useState } from "react";

const key = "pardubicky-pernik-nikoli-susenky";

const Cookies: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (window.localStorage.getItem(key) === null) {
          setDisplay(true);
        }
      } catch (error) {}
    }
  }, []);

  const dismiss = () => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, "true");
      } catch (error) {}
    }
    setAccepted(true);
    setTimeout(() => {
      setDisplay(false);
    }, 2500);
  };

  if (!display) return null;

  return (
    <div className="fixed-bottom pb-2 px-md-5 container text-white">
      <div
        className={classNames("carticka animate__animated animate__fadeIn", {
          animate__fadeOut: accepted,
        })}
      >
        <div className="card-body">
          <h3>
            <i className="me-2 fas fa-cookie-bite"></i>
            Cookies
          </h3>
          <p>
            Tyto webové stránky používají soubory cookies, aby vám zajistily co
            nejlepší zážitek.
          </p>
          <button className="cudlitko" onClick={dismiss}>
            Zavřít
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
