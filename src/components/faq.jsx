import {useState} from "react";
import "./styles/faq.css";

function Item({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="item">
      <div className="qn" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <div className="plus">
          <span>{isAnswerVisible ? "-" : "+"}</span>
        </div>
      </div>
      {isAnswerVisible && (
        <div className="ans">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <div className="faq">
      <h1>FAQs</h1>
      <div className="faqline"></div>
      <div className="content">
        <div className="line"></div>
        <Item
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <div className="line"></div>
        <Item
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <div className="line"></div>
        <Item
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <div className="line"></div>
        <Item
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <div className="line"></div>
        <Item
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
