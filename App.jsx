import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./animation.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="pos-abs frame-1-12" id="id-12">
        {/* Frame 21 */}
        <section className="pos-abs frame-2-13" id="id-13">
          <div className="pos-abs moon-symbol1-96" id="id-96">
            <div
              className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-96 "
              id="id-bg-96"
              alt="Moon Symbol1 Image"
            >
              {" "}
            </div>
          </div>
          <div className="pos-abs ellipse-1-14" id="id-14"></div>
        </section>
        <div className="pos-abs moon-symbol-85" id="id-85">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-85 "
            id="id-bg-85"
            alt="Moon Symbol1 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs sun-107" id="id-107">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-107 "
            id="id-bg-107"
            alt="Sun1 Image"
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
