import React from "react";
import "./RSidebar.css";
import Jonas from "../../assets/avatars/face5.png";

function RSidebar() {
  return (
    <div className="bg-gray-100 p-8 content">
      <div className="profile mx-auto">
        <img src={Jonas} alt="Jonas" className="mx-auto" />
        <div className="p__name text-center mt-3">
          <h2 className="text">Jonas Kanwald</h2>
        </div>
      </div>
      <div className="acc__details flex justify-evenly mt-3">
        <div className="top__up">
          <p className="text-center">Top Up</p>
        </div>
        <div className="pay">
          <p className="text-center">Pay</p>
        </div>
        <div className="send">
          <p className="text-center">Send</p>
        </div>
        <div className="profile__sec">
          <p className="text-center">Profile</p>
        </div>
      </div>
    </div>
  );
}

export default RSidebar;
