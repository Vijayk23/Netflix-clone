import { users } from "./Addusers";
import { Link } from "react-router-dom";

function Whowatch() {
  const filteredUsers = users.filter(
    (user) => user.profileimg && user.username
  );

  return (
    <>
      <div className="whowatching">
        <h2>Who Watching?</h2>

        <div className="profile">
          {filteredUsers.map((users, index) => (
            <div key={index}>
              <img
                src={users.profileimg}
                alt="Profileimage"
                className="userimg"
              />
              <p className="username">{users.username}</p>
            </div>
          ))}
          <Link to="/Addusers" className="link">
            <section>
              <img
                src="./images/adduser.png"
                alt="adduser"
                className="userimg"
              />
              <p className="username">Add Profile</p>
            </section>
          </Link>
        </div>
        <button>Manage Profile</button>
      </div>
    </>
  );
}
export default Whowatch;
