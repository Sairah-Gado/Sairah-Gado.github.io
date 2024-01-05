import React from "react";
import FirstPhoto from "../../assets/first-profile.jpeg";
import SecondPhoto from "../../assets/sec-profile.jpeg";
import ThirdPhoto from "../../assets/third-profile.jpeg";
import FourthPhoto from "../../assets/fourth-profile.jpeg";
import "./About.css";

function About() {
  return (
    <>
      {/* first container */}
      <div className="containers con">
        <div className="about-image">
          <img
            src={FirstPhoto}
            alt="My Photo"
            width={"300px"}
            height={"400vh"}
          />
        </div>
        <div className="intro-paras">
          <p>
            I am Sairah Gado, a 20-year-old from Lipa City, Batangas, currently
            enrolled at AMA COMPUTER COLLEGE Lipa, majoring in Computer
            Engineering as a third-year college student. You might be wondering
            why I am seeking employment while still studying. The reason is that
            AMA, known for its Online Education (OED), conducts classes online.
            As a result, I am actively looking for a job to independently fund
            my education, alleviating financial stress on my parents, who have
            been under pressure in recent months due to my tuition fees. I am
            concerned about the possibility of discontinuing my college
            education, and securing a job allows me to continue my studies.
            Despite the challenges, I have diligently acquired technical skills
            through self-study, and I am eager to contribute to the tech
            industry.
          </p>
        </div>
      </div>
      {/* second container */}
      <div className="containers">
        <div className="intro-paras">
          <h5>- Bootcamp -</h5>
          <p>
            I enrolled in a bootcamp for four months; unfortunately, I had to
            discontinue it when there were only two sessions left. This decision
            was prompted by an unexpected increase in my school tuition. Unable
            to afford the additional fees for the remaining two sessions, I
            resorted to self-study to continue building my skills independently.
          </p>
        </div>
        <div className="about-image">
          <img
            src={SecondPhoto}
            alt="My Photo"
            width={"300px"}
            height={"400vh"}
          />
        </div>
      </div>
      {/* third container */}
      <div className="containers">
        <div className="about-image">
          <img
            src={ThirdPhoto}
            alt="My Photo"
            width={"300px"}
            height={"400vh"}
          />
        </div>
        <div className="intro-paras">
          <h5>- DevOps -</h5>
          <p>
            I have a keen interest in DevOps Engineering; however, considering
            the urgency of securing a job to fund my education, I've opted to
            prioritize learning Data Analysis initially. The field of DevOps
            involves a multitude of tools that I am eager to explore, but given
            my immediate circumstances, acquiring skills in Data Analysis seems
            more feasible at this moment. This approach allows me to enter the
            job market sooner, ensuring I can contribute to covering my tuition
            expenses. Despite this decision, I remain committed to eventually
            delving into the complexities of DevOps Engineering as I advance in
            my career.
          </p>
        </div>
      </div>
      {/* fourth container */}
      <div className="containers">
        <div className="intro-paras">
          <h5>- Data Analyst -</h5>
          <p>
            I have acquired skills in Data Analysis through dedicated learning.
            My proficiency includes [Excel, SQL, PowerBI, Python], and I am
            confident in my ability to derive meaningful insights from data
            sets. Continuously expanding my knowledge in this field, I am
            actively seeking opportunities where I can apply and enhance my Data
            Analyst expertise.
          </p>
        </div>
        <div className="about-image">
          <img
            src={FourthPhoto}
            alt="My Photo"
            width={"300px"}
            height={"400vh"}
          />
        </div>
      </div>
    </>
  );
}
export default About;