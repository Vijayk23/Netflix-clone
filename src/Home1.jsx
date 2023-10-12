import Home2 from "./Home2";

function Home1() {
  return (
    <>
      <div className="home2">
        <div className="imgoncard">
          <img src="./images/mobile-1.jpg" alt="mobile" className="mobileimg" />
          <div className="card">
            <img src="./images/boxshot.png" className="boxshot" />
            <section>
              <p>Stranger Things</p>
              <p className="down">Downloading...</p>
            </section>
            <p className="downsymb">↓</p>
          </div>
        </div>
        <div className="home1-content">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <hr></hr>
      <div className="home2">
        <div className="home1-content">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="tv-container">
          <div className="video-container1">
            <video
              autoPlay
              muted
              loop
              src="./images/video-devices-in.m4v"
              className="video2"
            ></video>
          </div>
          <img
            src="./images/device-pile-in.png"
            alt="TV Model"
            className="tv-image"
          />
        </div>
      </div>
      <hr></hr>
      <div className="home2">
        <img src="./images/child.png" />
        <div className="home1-content">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <hr></hr>
      <Home2 />
    </>
  );
}

export default Home1;
