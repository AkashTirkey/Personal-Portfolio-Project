import "./About.css"
import {
  FaCode,
  FaReact,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa"
const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="about-left">
          <p>I'm <span>Akash Tirkey</span>, a Frontend Developer passionate
            about building responsive and user-friendly web applications
            using React and JavaScript.</p>

             <p>
            Through projects like <span>XFlix</span>, <span>Medify</span>,
            <span> QKart</span> and <span>QTrip</span>, I've strengthened my
            understanding of component-based architecture, REST APIs,
            responsive design, and clean UI development.
          </p>

          <p>
            I enjoy solving problems, continuously learning new technologies,
            and turning ideas into polished web experiences.
          </p>

        <div className="about-btns">
          <button className="primary-btn">
            Contact Me
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>
        </div>
        </div>

        <div className="about-right">
          <div className="card">
            <FaReact className="icon"/>

            <div>
              <h3>Frontend Development</h3>
              <p>Building responsive React Application</p>
            </div>
          </div>

          <div className="card">
            <FaCode className="icon"/>

            <div>
              <h3>Javascript & DSA</h3>
              <p>Strong Foundation in Javascript and problem Solving</p>
            </div>
          </div>

          <div className="card">
            <FaCode className="icon"/>

            <div>
              <h3>
                Modern UI
              </h3>
              <p>Creating clean and user-friendly interfaces</p>
            </div>
          </div>

          <div className="card">
            <FaCode className="icon"/>
            <div>
              <h3>Continous Learning</h3>
              <p>Always exploring modern Frontend Technologies</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About