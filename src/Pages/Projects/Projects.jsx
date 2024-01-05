import React from "react";
import CalcuImage from "../../assets/Calculator.png";
import RandomQImage from "../../assets/Random-Quotes.png";
import PokemonImage from "../../assets/Pokemon.png";
import TodoImage from "../../assets/Todo.png";
import ScorerImage from "../../assets/Keeps-scorer.png";

function Projects() {
  return (
    <>
      <section className="project-section">
        <div className="project-container">
          <div className="by-div-container"> 
          <div className="project">
            <img src={CalcuImage} alt="Calculator" width={"200px"} />
          </div>
          <div className="project-para">
            <h1>- Calculator -</h1>
            <p>
              "I have created a basic calculator employing HTML, CSS, and
              JavaScript technologies. This project demonstrates my proficiency
              in web development and showcases my ability to integrate front-end
              technologies seamlessly. The calculator offers a straightforward
              yet effective solution for performing arithmetic operations with
              an intuitive user interface. It serves as a testament to my skills
              in crafting functional and user-friendly applications using a
              combination of markup, styling, and scripting languages."
            </p>
            <a
              href="https://sairah-gado.github.io/Simple-calculator/"
              target="_blank"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
          </div>
          {/* Random Quotesss */}
          <div className="by-div-container">
          <div className="project">
            <img src={RandomQImage} alt="Random Quotes" width={"200px"} />
          </div>
          <div className="project-para">
            <h1>- Random Quotes -</h1>
            <p>
              "I have crafted a simple yet impactful random quotes generator
              centered around the theme of dreams. Developed using HTML, CSS,
              and JavaScript, this project reflects my passion for creating
              meaningful content and my proficiency in front-end technologies.
              By dynamically generating random quotes related to dreams, the
              application aims to inspire and provoke thoughtful reflections.
              This project not only showcases my technical skills but also
              underscores my dedication to delivering projects with a purpose
              and positive impact."
            </p>
            <a
              href="https://sairah-gado.github.io/Random-Quotes/"
              target="_blank"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        {/* Fetch pokemon */}
        <div className="by-div-container">
          <div className="project">
            <img src={PokemonImage} alt="Pokemon" width={"200px"} />
          </div>
          <div className="project-para">
            <h1>- Pokemon Fetch API -</h1>
            <p>
              "I designed and implemented a user-friendly Pokemon application by
              leveraging the Fetch API. This project, crafted with HTML, CSS,
              and JavaScript, showcases my proficiency in web development.
              Through intuitive design and seamless functionality, users can
              explore a diverse array of Pokemon, accessing real-time data
              effortlessly. This endeavor not only highlights my technical
              skills but also reflects my passion for creating engaging and
              interactive web experiences."
            </p>
            <a
              href="https://sairah-gado.github.io/fetch-API-pokemon/"
              target="_blank"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        {/* Todo */}
        <div className="by-div-container">
          <div className="project">
            <img src={TodoImage} alt="Pokemon" width={"200px"} />
          </div>
          <div className="project-para">
            <h1>- To do -</h1>
            <p>
              "I have created a basic To-Do application using HTML, CSS, and
              JavaScript. This project demonstrates my proficiency in web
              development, showcasing my skills in front-end technologies.
              Through the harmonious integration of HTML for structure, CSS for
              styling, and JavaScript for dynamic functionality, I have designed
              a user-friendly and visually appealing To-Do application."
            </p>
            <a href="https://sairah-gado.github.io/To-do/" target="_blank">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        {/* score keeper */}
        <div className="by-div-container">
          <div className="project">
            <img src={ScorerImage} alt="Scorer" width={"200px"} />
          </div>
          <div className="project-para">
            <h1>- Keep Scorer -</h1>
            <p>
              "The Scorekeeper allows users to effortlessly track scores,
              providing a seamless and enjoyable experience. I invite you to
              explore this project and witness the harmonious blend of design
              and functionality in action."
            </p>
            <a href="https://sairah-gado.github.io/Scorer/" target="_blank">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        {/* project-con end  */}
        </div>  
      </section>

      
    </>
  );
}

export default Projects;