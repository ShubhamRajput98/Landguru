import React, { useState } from "react";
import Pluse from "../../assets/Combined shape 15714.png";
import Close from "../../assets/Combined shape 15712.png";

export const Questin = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center pb-5">
          <p
            style={{
              fontSize: "20px",
              color: "#EF9E48",
              textTransform: "uppercase",
            }}
          >
            Frequent Question
          </p>
          <h3 style={{ fontSize: "33px" }}>Do you have any question</h3>
        </div>

        <div className="question">
          <QuestionsCard heading={"How to contact with riders emergency ?"} />
          <QuestionsCard
            heading={
              "App installation failed, how to update system information?"
            }
          />
          <QuestionsCard
            heading={"Website reponse taking time, how to improve?"}
          />
          <QuestionsCard heading={"New update fixed all bug and issues"} />
        </div>
      </div>
    </div>
  );
};

const QuestionsCard = ({ heading }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="question-card px-2 py-3"
      style={{ borderBottom: "1px solid #E5ECF4" }}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="d-flex gap-2 cursor-pointer"
      >
        <img
          src={toggle ? Close : Pluse}
          style={{ height: "20px", width: "20px", marginTop: "5px" }}
          alt=""
        />
        <div>
          <h4 className="m-0">{heading}</h4>

          {toggle && (
            <p
              className="p-3 ps-0"
              style={{ lineHeight: "32px", color: "#343D48" }}
            >
              An FAQ is a list of frequently asked questions (FAQs) and answers
              on a particular topic (also known as Questions and Answers [Q&A]
              or Frequently Asked Questions). The format is often used in
              articles, websites, email lists, and online forums where common
              questions tend to recur, for example through posts or queries by
              new users related to common knowledge gaps. The purpose of an FAQ
              is generally provide information.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
