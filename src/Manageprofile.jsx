import { Link } from "react-router-dom";

function Manageprofile() {
  return (
    <>
      <div className="whowatching">
        <h2>Manage Profiles:</h2>

        <Link to="/Watching">
          <button>Done</button>
        </Link>
      </div>
    </>
  );
}

export default Manageprofile;
