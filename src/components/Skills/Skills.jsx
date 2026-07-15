import "./Skills.css"
import skills from "../../data/skills";
import SkillCard from "./skillCard";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My <span>Tech Stack</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill)=>(
          <SkillCard key={skill.name} skill = {skill}/>
        ))}
      </div>
    </section>
  )
}

export default Skills