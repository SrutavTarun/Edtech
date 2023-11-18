// App.js

import React from "react";
import "../styles/Why.css"; // Make sure to import the CSS file

const App = () => {
  return (
    <div className="container">
      <div className="title">WHY US?</div>
      <div className="horizontal-line"></div>
      <div className="rotated-line"></div>
      <div className="horizontal-dashed-line"></div>
      <div className="text">
        We offer an extensive and diverse catalogue of courses, covering a wide
        range of subjects, from academic to professional development. With us,
        you have access to a world of knowledge at your fingertips{" "}
      </div>
      <div className="column-container">
        <div className="block" style={{ left: 0, top: 95 }}>
          <div className="content-background"></div>
          <div className="gradient-background"></div>
          <div className="inner-text">
            Learning should be accessible to everyone. We offer a mix of free
            and paid courses, ensuring that you can acquire new skills and
            knowledge without breaking the bank.{" "}
          </div>
          <div className="inner-title">Affordability</div>
        </div>
        <div className="block" style={{ left: 487, top: 95 }}>
          <div className="content-background"></div>
          <div className="gradient-background"></div>
          <div className="inner-text">
            Learning is not a solo journey. Connect with other learners and
            educators, ask questions, and engage in discussions to enhance your
            understanding of the subject matter{" "}
          </div>
          <div className="inner-title">Community and Collaboration </div>
        </div>
        <div className="block" style={{ left: 974, top: 93 }}>
          <div className="content-background"></div>
          <div className="gradient-background"></div>
          <div className="inner-text">
            We understand the needs of both Creators and students because our
            team includes Creators who are passionate about improving the
            learning experience for everyone.
          </div>
          <div className="inner-title">For Creators, By Creators</div>
        </div>
      </div>
      <div className="block" style={{ left: 819, top: 87 }}>
        <div className="content-background"></div>
        <div className="gradient-background"></div>
        <div className="inner-text">
          We're always working to enhance our platform based on user feedback
          and the latest advancements in education technology. Your experience
          with us will keep getting better.
        </div>
        <div className="inner-title">Continuous Improvement</div>
      </div>
    </div>
  );
};

export default App;
