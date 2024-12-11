import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoReact } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";

function Homepage() {
  return (
    <>
      {/* Hero section code starts here */}

      <section className="hero full-screen">
        <span className="hello">Hello!</span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {" "}
          <h1 className="name">
            I'm <span className="name-span">Nagendra</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          {" "}
          <h2 className="role">Frontend Developer | Problem Solver</h2>
        </motion.div>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="know-more-btn-a"
        >
          <button className="know-more-btn">Know more</button>
        </Link>
        <div className="social-icons">
          <span className="github">
            <a
              className="github-link"
              target="_blank"
              href="https://github.com/nagendrax02"
            >
              <FaGithub color={"white"} size={20} />

              <span>Github</span>
            </a>{" "}
          </span>
          <span className="linkedin">
            <a
              className="github-link"
              target="_blank"
              href="https://www.linkedin.com/in/nagendrax02/"
            >
              <RxLinkedinLogo size={20} />
              <span>Linkedin</span>
            </a>{" "}
          </span>
        </div>
      </section>

      {/* About section code starts here */}

      <section id="about">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          {" "}
          <h1 className="about-heading">About me</h1>
        </motion.div>
        <p className="about-p">
          I am a frontend developer with over 3 years of experience building
          responsive and user-centric applications. Throughout my career, I have
          successfully delivered 10+ impactful projects, combining technical
          expertise with attention to detail. Currently, I work with a leading
          multinational corporation in Bangalore, leveraging modern technologies
          to create seamless digital experiences. Driven by a passion for
          innovation and continuous learning, I thrive on solving challenges and
          delivering high-quality solutions.
        </p>
        <div className="my-details">
          <ul className="unordered-list">
            <li className="my-details-name">
              <span className="name-label-span">Name:</span>
              <span className="name-span">Nagendra</span>
            </li>
            <li className="my-details-name">
              <span className="name-label-span">Address:</span>
              <span className="name-span">Bomanhalli, Bengaluru, India</span>
            </li>
            <li className="my-details-name">
              <span className="name-label-span">email:</span>
              <span className="name-span">nagendrax02@gmail.com</span>
            </li>
            <li className="my-details-name">
              <span className="name-label-span">Phone:</span>
              <span className="name-span">+91-7676633059</span>
            </li>
          </ul>
        </div>
        <div className="resume-explore-skills">
          <a>
            <button className="explore-my-skills-btn">Resume</button>
          </a>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="explore-btn-link"
          >
            <button className="explore-my-skills-btn">Explore My Work</button>
          </Link>
        </div>

        <div className="social-icons">
          <span className="github">
            <a
              className="github-link"
              target="_blank"
              href="https://github.com/nagendrax02"
            >
              <FaGithub color={"white"} size={20} />

              <span>Github</span>
            </a>{" "}
          </span>
          <span className="linkedin">
            <a
              className="github-link"
              target="_blank"
              href="https://www.linkedin.com/in/nagendrax02/"
            >
              <RxLinkedinLogo size={20} />
              <span>Linkedin</span>
            </a>{" "}
          </span>
        </div>
      </section>

      {/* about section code ends here */}

      {/* resume section starts here */}
      <section id="projects">
        <h1 className="projects-heading">Designed and developed by me</h1>
        <p className="project-description">
          Here’s a glimpse into some of the work I’ve created
        </p>

        <div className="projects-main-container">
          <div className="project-card">
            <div className="left-section">
              <img
                style={{ width: "100%" }}
                src="https://chiranjeev-thapliyal.vercel.app/static/media/wealthOS-banner.08c909d4.png"
              />
              <div className="tech-stack-div">
                <span className="tech-stack-span">
                  <IoLogoReact color="cyan" size={30} />
                  <h4>Swift UI Icon</h4>
                </span>
                <span className="tech-stack-span">
                  <IoLogoReact color="cyan" size={30} />
                  <h4>Swift UI Icon</h4>
                </span>
                <span className="tech-stack-span">
                  <IoLogoReact color="cyan" size={30} />
                  <h4>Swift UI Icon</h4>
                </span>
                <span className="tech-stack-span">
                  <IoLogoReact color="cyan" size={30} />
                  <h4>Swift UI Icon</h4>
                </span>
              </div>
            </div>
            <div className="right-section">
              <h2>Project name</h2>
              <div className="arrow-list">
                {/* <div className="project-point-container"> */}{" "}
                <span className="project-point-container">
                  <MdOutlineKeyboardArrowRight color="white" size={50} />{" "}
                  <div style={{ marginTop: "12px" }}>
                    {" "}
                    Created backend (Vapor-based) RESTful APIs entirely in Swift
                    to handle backend logic, ensuring robust data
                  </div>
                </span>
                <span className="project-point-container">
                  <MdOutlineKeyboardArrowRight color="white" size={50} />{" "}
                  <div style={{ marginTop: "12px" }}>
                    {" "}
                    Created backend (Vapor-based) RESTful APIs entirely in Swift
                    to handle backend logic, ensuring robust data
                  </div>
                </span>
                <span className="project-point-container">
                  <MdOutlineKeyboardArrowRight color="white" size={50} />{" "}
                  <div style={{ marginTop: "12px" }}>
                    {" "}
                    Created backend (Vapor-based) RESTful APIs entirely in Swift
                    to handle backend logic, ensuring robust data
                  </div>
                </span>
              </div>
              <div className="project-card-btn">
                <button className="btn">App</button>
                <button className="btn">Github</button>
              </div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <span className="github">
            <a
              className="github-link"
              target="_blank"
              href="https://github.com/nagendrax02"
            >
              <FaGithub color={"white"} size={20} />

              <span>Github</span>
            </a>{" "}
          </span>
          <span className="linkedin">
            <a
              className="github-link"
              target="_blank"
              href="https://www.linkedin.com/in/nagendrax02/"
            >
              <RxLinkedinLogo size={20} />
              <span>Linkedin</span>
            </a>{" "}
          </span>
        </div>
      </section>
      {/* resume section ends here */}

      {/* Skills section starts here */}
      <section id="skills">
        <h1 className="skills-heading">Technologies I Use</h1>
        <div className="skills-main-container">
        <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>Javascript</span>
          </span>
          <span className="skill-item-container">
          <div className="icon">   <IoLogoReact color="cyan"  size={50}/></div>
            <span>React</span>
          </span>
          <span className="skill-item-container">
          <div className="icon">   <FaHtml5 color="orange"  size={50}/> </div>
            <span>HTML</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>Redux</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>Node JS</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>Devops</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>MATERIAL UI</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>GIT</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>POSTMAN</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>C++</span>
          </span>

          <span className="skill-item-container">
           <div className="icon"> <FaHtml5 color="orange"  size={50}/> </div>
            <span>Mongo DB</span>
          </span>
         
        </div>
      </section>
    </>
  );
}

export default Homepage;
