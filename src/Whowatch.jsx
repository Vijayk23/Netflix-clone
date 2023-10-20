import { users } from "./Addusers";
import { Link } from "react-router-dom";
import { useState } from "react";

function Whowatch() {
  const [isEditing, setIsEditing] = useState(false);

  const filteredUsers = users.filter(
    (user) => user.profileimg && user.username
  );

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="whowatching">
        <h2>{isEditing ? "Manage Profiles:" : "Who Watching?"}</h2>
        <div className="profile">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className={`user-container ${isEditing ? "editing" : ""}`}
            >
              <img
                src={user.profileimg}
                alt="Profileimage"
                className="userimg"
              />
              <p className="username">{user.username}</p>
              {isEditing && (
                <Link to="/Manageprofile">
                  <p className="edit-button">✏️</p>
                </Link>
              )}
            </div>
          ))}
          {filteredUsers.length < 5 && (
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
          )}
        </div>
        <button onClick={toggleEditing}>
          {filteredUsers.length === 0
            ? null
            : isEditing
            ? "Done"
            : "Manage Profile"}
        </button>
      </div>
    </>
  );
}

export default Whowatch;
