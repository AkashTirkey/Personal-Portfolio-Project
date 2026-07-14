import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm <span>Akash Tirkey</span>
      </h1>

      <p>Frontend Developer passionate about building fast, accessible, and user-friendly web experiences.
      </p>

      <p className="quote">
        "Building experiences, one component at a time."
      </p>

      <button className="btn">View My Work</button>
    </section>
  )
}

export default Hero