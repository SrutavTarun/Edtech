import { useState } from "react";
import "./styles/faq.css";

function Item({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <>
      <div className="item">
        <div className="qn" onClick={toggleAnswer}>
          <h3>{question}</h3>
          <div className="plus">
            <span>{isAnswerVisible ? "-" : "+"}</span>
          </div>
        </div>
      </div>
      {isAnswerVisible && (
        <>
          <div className="ans">
            <h3>{answer}</h3>
          </div>
        </>
      )}
    </>
  );
}

export default function Faq() {
  return (
    <div className="faq">
      <h2>FAQs</h2>
      <div className="faqline"></div>
      <div className="content">
        <div className="line"></div>
        <Item
          question="How do I become an educator on your platform?"
          answer="To become an educator, simply sign up for an account and choose the 'Creator' role
          during registration. Once your account is created, you can start creating and publishing your
          courses."
        />
        <div className="line"></div>
        <Item
          question="Can anyone join as a student, or is there an admission process?"
          answer="Anyone can join as a student; there's no admission process. Our platform is open to
          learners of all ages and backgrounds."
        />
        <div className="line"></div>
        <Item
          question="Are there any costs associated with being a student or creator?"
          answer="Joining as a student is free, and you can access a variety of free and paid courses.
          Creators can create and publish courses for free and earn revenue from paid courses, with
          our platform taking a percentage of the sales"
        />
        <div className="line"></div>
        <Item
          question="What types of courses are available on your platform?"
          answer="Our platform offers a wide range of courses, including academic subjects, skill
          development, professional development, and personal enrichment courses. You can find
          courses on topics such as maths, science, coding, art, business, and much more."
        />
        <div className="line"></div>
        <Item
          question="How do I communicate with instructors or other students in the course?"
          answer="You can interact with instructors and fellow students through discussion forums,
          messaging systems, and live chat if the course provides these features. We encourage
          active engagement and discussion within the course community."
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
