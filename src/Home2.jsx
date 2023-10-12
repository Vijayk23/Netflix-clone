import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home2() {
  const Quesans = [
    {
      id: 1,
      question: "What is OTT?",
      answer:
        "OTT is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      question: "How much does OTT cost?",
      answer:
        "Watch OTT on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your OTT account to watch instantly on the web at OTT.com from your personal computer or on any internet-connected device that offers the OTT app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take OTT with you anywhere.",
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer:
        "OTT is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      question: "What can I watch on OTT?",
      answer:
        "OTT has an extensive library of feature films, documentaries, TV shows, anime, award-winning OTT originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      question: "Is OTT good for kids?",
      answer:
        "The OTT Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  return (
    <>
      <div className="home3">
        <h2>Frequently Asked Questions</h2>
        <div className="qacard">
          {Quesans.map((QA) => (
            <Quesan ques={QA} />
          ))}
        </div>
        <p className="home3-sign">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <section className="login">
          <div className="input-group">
            <input type="text" className="input" />
            <label className="placeholder">Email address</label>
          </div>
          <Link to="login">
            <button className="getstarted">Get Started ›</button>{" "}
          </Link>
        </section>
      </div>
      <hr></hr>
      <Footer />
    </>
  );
}
function Quesan({ ques }) {
  const [show, setShow] = useState(false);
  const toggle = {
    display: show ? "block" : "none",
  };
  return (
    <>
      <div>
        <div className="qacard1" onClick={() => setShow(!show)}>
          <p className="qabutton">{ques.question}</p>
          <p className="qasymb"> {show ? "×" : "+"}</p>
        </div>
        <p className="qapara" style={toggle}>
          {" "}
          {ques.answer}
        </p>
      </div>
    </>
  );
}

export default Home2;
