import { useState } from "react";
import './score.scss'

export const Arc = () => {
  const [user, updateUser] = useState(GenerateUser());

  let percentage = (user.score - 300) / 550;
  let angle;
  if (percentage > 0.65) {
    angle = 90 - percentage * 90;
  } else {
    angle = 45 - percentage * 45;
  }
  let d = toRadians(angle);
  let x, y;
  let cos = 100 * Math.cos(d);
  let sin = 100 * Math.sin(d);
  if (percentage > 0.65) {
    x = Math.abs(Math.max(cos, sin));
    y = Math.abs(Math.min(cos, sin));
  } else {
    x = Math.abs(Math.min(cos, sin));
    y = Math.abs(Math.max(cos, sin));
  }
  // this doesnt work properly.. geometry...
  return (
    <div id="arc">
      <div className="line" id="bad"></div>
      <div className="line" id="poor"></div>
      <div className="line" id="fair"></div>
      <div className="line" id="good"></div>
      <div className="line" id="excellent"></div>
      <div className="accent" id="low">
        300
      </div>
      <div className="accent" id="high">
        850
      </div>
      <div id="currentScoreContainer">
        <div id="flex column">
          <span id="currentScore">{user.score}</span>
          <span
            id="dot"
            style={{ transform: `translate(${x}px, -${y}px)` }}
          ></span>
        </div>
        <div>
          <span id="currentScoreDetail">{user.scoreDetail}</span>
        </div>
      </div>
    </div>
  );
};
const GenerateUser = () => {
  const rangeAPI = [
    [300, 559],
    [560, 649],
    [650, 699],
    [700, 749],
    [750, 850],
  ];
  const rangeScore = ["Bad", "Poor", "Fair", "Good", "Excellent"];
  const years = (totalMonths) => Math.floor(totalMonths / 12);
  const months = (totalMonths) => totalMonths % 12;
  let totalMonth = Math.floor(Math.random() * 180);
  let userData = {};
  userData["Credit Card Utilization"] = Math.floor(Math.random() * 100) + "%";
  userData["Derogatory Marks"] = Math.floor(Math.random() * 10);
  userData["Total Accounts"] = Math.floor(Math.random() * 20);
  userData["Payment History"] = Math.floor(Math.random() * 100) + "%";
  userData["Age of Credit History"] = `${years(totalMonth)} yrs ${months(
    totalMonth
  )} mos`; // months 15 yrs max
  userData["Hard Inquiries"] = Math.floor(Math.random() * 10);
  // userData.score = Math.floor(Math.random() * 550 + 300);
  let score = 850;
  Object.keys(userData).forEach((key) => {
    let option = CREDIT_API(key, userData[key]);
    if (option === "avg") {
      score -= 30;
    } else if (option === "bad") {
      score -= 60;
    }
  });
  userData.score = score;
  let scoreDetail = rangeAPI.reduce((indexFound, currentRange, index) => {
    if (
      userData.score >= currentRange[0] &&
      userData.score <= currentRange[1]
    ) {
      return index;
    }
    return indexFound;
  }, null);
  userData.scoreDetail = rangeScore[scoreDetail];
  return userData;
};


function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  const CREDIT_API = (detail, title) => {
    let data;
    if (detail !== "Age of Credit History") {
      data = parseInt(title);
    } else {
      let years = title.split(" ")[0];
      return years < 1 ? "bad" : years < 3 ? "avg" : "good";
    }
    if (detail === "Credit Card Utilization") {
      return data < 25 ? "good" : data > 50 ? "bad" : "avg";
    }
    if (detail === "Total Accounts") {
      return data > 8 ? "good" : data <= 3 ? "bad" : "avg";
    }
    if (detail === "Derogatory Marks") {
      return data < 2 ? "good" : data <= 5 ? "avg" : "bad";
    }
    if (detail === "Payment History") {
      return data > 80 ? "good" : data >= 60 ? "avg" : "bad";
    }
    if (detail === "Hard Inquiries") {
      return data < 2 ? "good" : data <= 5 ? "avg" : "bad";
    }
  };
  