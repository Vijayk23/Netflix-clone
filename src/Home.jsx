import Home1 from "./Home1";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="header">
        <div className="home-header">
          <Link to="login">
            <img className="logo" src="./images/OTT.png" alt="OTT-logo" />{" "}
          </Link>

          <div className="home-header-btn">
            <button className="language">English</button>
            <Link to="login">
              <button className="signin">Sign In</button>{" "}
            </Link>
          </div>
        </div>
        <section className="header-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </section>
        <section className="login">
          <div className="input-group">
            <input type="text" className="input" />
            <label className="placeholder">Email address *</label>
          </div>
          <Link to="login">
            {" "}
            <button className="getstarted">Get Started ›</button>
          </Link>
        </section>
      </header>

      <hr></hr>
      <div className="home2">
        <div className="home2-content">
          <h2>Enjoy on your TV</h2>
          <p>
            Watch on smart TVs, PlayStation, Chromecast, Xbox, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="tv-container">
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              src="./images/video-tv.m4v"
              className="video1"
            ></video>
          </div>
          <img src="./images/tv.png" alt="TV Model" className="tv-image" />
        </div>
      </div>
      <hr></hr>
      <Home1 />
    </>
  );
}

export default Home;
