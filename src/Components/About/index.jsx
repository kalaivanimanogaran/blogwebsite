import React from "react"
import "./style.css"
import profileImage from "../../assets/profile.png"

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-image-box">
        <img src={profileImage} style={{ width: "350px" }} alt="My Profile" />
      </div>

      <div className="about-text-box">
        <h1 style={{ color: "#0078ff" }}>About Me</h1>
        <p>
          Hello! I'm a passionate web developer who loves creating beautiful and
          functional websites. I started my coding journey with HTML and CSS and
          later mastered JavaScript and React.
        </p>
        <p>
          This blog is my way of sharing what I learn every day with fellow
          learners. I write tutorials, share tips, and post project ideas to
          help beginners improve their coding skills.
        </p>
        <p>
          I believe learning is more fun when you practice with real projects
          and challenges. My goal is to help you grow as a developer and enjoy
          the process of creating something amazing.
        </p>
      </div>

      <div className="about-stats-box">
        <div className="stat">
          <h2>3+</h2>
          <p>Years Learning</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h2>1000+</h2>
          <p>Lines of Code</p>
        </div>
      </div>
    </div>
  )
}

export default About
