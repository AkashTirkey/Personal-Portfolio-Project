const SkillCard = ({ skill })=>{
    const Icon = skill.icon;

    return(
        <div className = "skill-card">
            <div className="skill-icon">
                <Icon/>
            </div>

            <div>
                <h3>{skill.name}</h3>
                <p>{skill.subtitle}</p>
            </div>
        </div>
    );
}

export default SkillCard;