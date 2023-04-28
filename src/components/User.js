import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";

import "./User.css";

const fileNames = [profile1, profile2, profile3];

function randomImage() {
  return fileNames[Math.floor(Math.random() * fileNames.length)];
}

function User() {
  return (
    <nav>
      <input
        className="profile-text"
        type="text"
        defaultValue={"고태경 1학년 7반 3번"}
      />
      <img className="profile-img" alt="user profile" src={randomImage()}></img>
    </nav>
  );
}

export default User;
