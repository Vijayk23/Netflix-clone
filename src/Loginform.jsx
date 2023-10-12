import { Link } from "react-router-dom";

function Loginform() {
  return (
    <>
      <div className="loginform">
        <div className="home-header">
          <img className="logo" src="./images/OTT.png" alt="OTT-logo" />

          <div className="home-header-btn">
            <Link to="/">
              <button className="signin">Back to Home</button>
            </Link>
          </div>
        </div>
        <div className="loginform-card">
          <form>
            <h2>Sign In</h2>
            <div className="logininput">
              <input type="email" required className="email-input" />
              <label className="placeholder-login">
                Email address or Phone Number *
              </label>
              <br></br>
              <input type="password" required className="email-input" />
              <label className="placeholder-password">Password *</label>
            </div>
            <br></br>
            <Link to="Watching">
              <button className="submit-input" type="submit">
                Sign in
              </button>
            </Link>
            <br></br>
            <div className="rem-help">
              <section>
                <input type="checkbox" /> <label>Remember me</label>
              </section>
              <p>Need help?</p>
            </div>
          </form>
          <p className="signup">
            New to OTT? <a href="/">Sign up now.</a>
          </p>
          <p className="pagepro">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="/">Learn more.</a>
          </p>
        </div>
        <div className="login-footer">
          <p>Questions? Call 000-123-000-1234</p>
          <table className="footertable">
            <tr>
              <td>
                <a href="">FAQ</a>
              </td>
              <td>
                <a href="">Help Centre </a>
              </td>
              <td>
                <a href="">Terms of Use </a>
              </td>
              <td>
                <a href="">Privacy</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Cookie Preferences</a>
              </td>
              <td>
                <a href="">Corporate Information </a>
              </td>
            </tr>
          </table>
          <button className="language">English</button>
        </div>
      </div>
    </>
  );
}
export default Loginform;
