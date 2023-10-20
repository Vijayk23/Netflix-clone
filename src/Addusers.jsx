import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    profileimg: "./images/user1.png",
  },
  {
    id: 2,
    profileimg: "./images/user2.png",
  },
  {
    id: 3,
    profileimg: "./images/user3.png",
  },
  {
    id: 4,
    profileimg: "./images/user4.png",
  },
  {
    id: 5,
    profileimg: "./images/user5.png",
  },
];

export function Addusers() {
  const [newUsername, setNewUsername] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleContinue = () => {
    const newUser = {
      id: users.length + 1,
      profileimg: users[imageIndex].profileimg,
      username: newUsername,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setImageIndex((prevIndex) => (prevIndex + 1) % users.length);
    setNewUsername("");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="addusers">
        <h3>Add Profile</h3>
        <p>Add a profile for another person watching Netflix. </p>
        <hr></hr>
        <div className="img-input">
          <div className="nextcolor">
            <img src={users[imageIndex].profileimg} alt="profileimage" />
            <button
              onClick={() =>
                setImageIndex((prevIndex) => (prevIndex + 1) % users.length)
              }
            >
              Change color
            </button>
          </div>
          <input
            type="text"
            placeholder="Name"
            value={newUsername}
            onChange={handleUsernameChange}
          />
        </div>
        <hr></hr>
        <div className="adduserbutton">
          <button
            className="continue"
            onClick={() => {
              handleContinue();
              navigate(-1);
            }}
          >
            Continue
          </button>

          <button className="cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Addusers;
