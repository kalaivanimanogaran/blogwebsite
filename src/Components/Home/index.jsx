import { useNavigate } from "react-router-dom"
import "./style.css"
import peopleImage from "../../assets/people.png"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className="hero-image">
          <img src={peopleImage} alt="Coding illustration" />
        </div>
        <div className="hero-stats-wrapper">
          <div className="hero-stats">
            <div className="stat1">
              <h2>50+</h2>
              <p>Articles</p>
            </div>
            <div className="stat1">
              <h2>100+</h2>
              <p>Tutorials</p>
            </div>
            <div className="stat1">
              <h2>500+</h2>
              <p>Learners</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container">
        <h1 style={{ color: "#0078ff" }}>Welcome to My Blog</h1>
        <p>
          Hey All I am so glad you're here. This blog is a space where I share
          everything I learn about <strong>web development</strong> from the
          basics of <strong>HTML</strong> and <strong>CSS</strong> to the power
          of <strong>JavaScript</strong> and <strong>React</strong>.
        </p>
        <p>
          If you're someone who's just starting your coding journey or a learner
          trying to improve your front-end skills, you will find this place
          really helpful. I post step by step tutorials, coding challenges, and
          real project ideas to make learning fun and practical.
        </p>
        <p>
          You will also find tips on how to stay motivated, how to fix common
          coding errors, and how to build your confidence as a developer. Every
          article here is written with beginners in mind simple, clear, and easy
          to follow.
        </p>
        <p>
          Explore the <strong>Blogs</strong> section to check out my latest
          posts, and don’t forget to visit the <strong>About</strong> page to
          know more about me and my learning path.
        </p>
        <p>
          Lets grow together as developers! Keep learning, keep building, and
          most importantly enjoy the process.
        </p>

        <button className="blog-btn" onClick={() => navigate("/BlogList")}>
          Go to Blogs
        </button>
      </div>
    </div>
  )
}

export default Home
