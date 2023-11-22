import React from "react";

import "../components/styles/Test.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap">
        <div className="overlap-2">
          <div className="text-wrapper-2">WHY US?</div>
          <img className="line" alt="Line" src="line-5.svg" />
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="overlap-3">
          <img className="line-2" alt="Line" src="line-4.svg" />
          <img className="line-3" alt="Line" src="line-6.svg" />
        </div>
        <Group className="group-13" property1="default" rectangle="rectangle-22-2.svg" />
      </div>
      <div className="frame">
        <img className="line-4" alt="Line" src="line-7.svg" />
        <img className="line-5" alt="Line" src="line-8.svg" />
        <Group className="group-instance" property1="default" rectangle="rectangle-22-3.svg" />
        <Group className="group-13-instance" property1="default" rectangle="rectangle-22-4.svg" />
        <Group className="design-component-instance-node" property1="default" rectangle="rectangle-22-5.svg" />
      </div>
    </div>
  );
};
