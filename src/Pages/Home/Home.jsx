import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


import Image from "../../assets/Profile.jpg";
import HTMLLogo from "../../assets/HTML5.png";
import CSSLogo from "../../assets/CSS.png";
import JavaScriptLogo from "../../assets/JavaScript.png";
import ReactLogo from "../../assets/React.png";
import BootstrapLogo from "../../assets/Bootstrap.png";
import PythonLogo from "../../assets/Python.png";
import LinuxLogo from "../../assets/linux.png"
import GitLogo from "../../assets/git.png"
import UbuntuLogo from "../../assets/ubuntu.png"
import ExcelLogo from "../../assets/Excel.png"
import SqlLogo from "../../assets/SQL.png"
import PowerBiLogo from "../../assets/PowerBI.png"

// techstack Pictures
const techStack = [
  { id: 1, name: "HTML", logoSrc: HTMLLogo, rating: 4 },
  { id: 2, name: "CSS", logoSrc: CSSLogo, rating: 4 },
  { id: 3, name: "JavaScript", logoSrc: JavaScriptLogo, rating: 3 },
  { id: 4, name: "React", logoSrc: ReactLogo, rating: 3 },
  { id: 5, name: "Bootstrap", logoSrc: BootstrapLogo, rating: 2 },
  { id: 6, name: "Python", logoSrc: PythonLogo, rating: 2 },
];
// DevOps tools Pictures
const devTools = [
  {id: 1, name: "Linux", logoSrc: LinuxLogo, rating: 2},
  {id: 2, name: "Git", logoSrc: GitLogo, rating: 3},
  {id: 3, name: "Ubuntu", logoSrc: UbuntuLogo, rating: 3},
]
// Data Analyst Pictures skills
const dataAns = [
  {id: 1, name: "Excel", logoSrc: ExcelLogo, rating: 3},
  {id: 2, name: "SQL", logoSrc: SqlLogo, rating: 3},
  {id: 3, name: "PowerBI", logoSrc: PowerBiLogo, rating: 2},
  {id: 4, name: "Python", logoSrc: PythonLogo, rating: 2 },
]


const renderStar = (rating) => {
  const star = [];
  for (let i = 0; i < 5; i++) {
    star.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        size="1x"
        color={i < rating ? "gold" : "lightgray"}
      />
    );
  }
  return star;
};
function Home() {
  // Web dev. section
  const renderTechStack = () => {
    return techStack.map((tech) => (
      <div className="logo-container" key={tech.id}>
        <div className="imgPHolder">
          <img
            src={tech.logoSrc}
            alt={tech.name}
            width={"50px"}
            height={"45px"}
          />
          <h3>{tech.name}</h3>
        </div>
        <div className="star-rating">{renderStar(tech.rating)}</div>
      </div>
    ));
  };
  // DevOps section
  const renderDevTools = () => {
    return devTools.map((dev) => (
      <div className="logo-container" key={dev.id}>
        <div className="imgPHolder">
          <img 
            src={dev.logoSrc}
            alt={dev.name}
            width={"50px"}
            height={"45px"}
          />
          <h3>{dev.name}</h3>
        </div>
        <div className="star-rating">{renderStar(dev.rating)}</div>
      </div>
    ))
  };
  // for Data Analyst section
  const renderDataAns = () => {
    return dataAns.map((dataA) => (
      <div className="logo-container" key={dataA.id}>
        <div className="imgPHolder">
          <img 
            src={dataA.logoSrc}
            alt={dataA.name}
            width={"50px"}
            height={"45px"}
          />
          <h3>{dataA.name}</h3>
        </div>
        <div className="star-rating">{renderStar(dataA.rating)}</div>
      </div>
    )) 
  } 
  return (
    <>
      <div className="image-h1-container">
        <div className="image">
          <img src={Image} alt="Pantry" width={"200px"} />
        </div>
        <div className="profile">
          <h1>Hello, I'm Sairah Gado</h1>
          <p>
           "As a budding enthusiast in the realms of
            web development, DevOps, and data analysis, I am driven by a passion
            for mastering these diverse domains. While I may be new to the
            field, my dedication fuels my journey to acquire the skills
            necessary for success in web development, DevOps practices, and data
            analysis. Excited to embark on this comprehensive path, I am
            committed to contributing meaningfully to the world of technology
            through innovative solutions and data-driven insights."
          </p>
        </div>
      </div>
      {/* Skills Overview section for Web Dev.*/}
      <div className="skillsOverview"><h1>Skills Overview</h1></div>
      <div className="skills">
        <h3>-Web dev.-</h3>
        <div className="logos">{renderTechStack()}</div>
      </div>
      {/* Skills Overview section for DevOps Tools.*/}
      <div className="skills">
        <h3>-DevOps-</h3>
        <div className="logos">{renderDevTools()}</div>
      </div>
      {/* Skills Overview section for Data Analyst.*/}
      <div className="skills">
        <h3>-Data Analyst-</h3>
        <div className="logos">{renderDataAns()}</div>
      </div>
    </>
  );
}
export default Home;