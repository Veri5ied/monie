import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faWallet,
  faCreditCard,
  faUserAlt,
  faCog,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Jonas from "../../assets/avatars/face5.png";
import Tom from "../../assets/avatars/face1.png";
import Chris from "../../assets/avatars/face2.png";
import Meghan from "../../assets/avatars/face3.png";
import Evans from "../../assets/avatars/face4.png";

function Dashboard() {
  return (
    <div className="bg-gray-100 p-8 content">
      <div className="flex justify-end mb-12 head__sec m-1">
        <FontAwesomeIcon icon={faCog} className="text-gray-400 mr-3 text-xl" />
        <FontAwesomeIcon icon={faTimes} className="text-gray-400 text-xl" />
      </div>
      <div className="profile">
        <img src={Jonas} alt="Jonas" className="mx-auto" />
        <div className="p__name text-center mt-3">
          <h2 className="text">Jonas Kanwald</h2>
        </div>
      </div>
      <div className="acc__details flex justify-evenly mt-3">
        <div className="top__up text-center">
          <FontAwesomeIcon icon={faWallet} className="text-blue-700 myshadow" />
          <p className="text">Top Up</p>
        </div>
        <div className="pay text-center">
          <FontAwesomeIcon
            icon={faCreditCard}
            className="text-blue-700 myshadow"
          />
          <p className="text">Pay</p>
        </div>
        <div className="send text-center">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-blue-700 myshadow"
          />
          <p className="text">Send</p>
        </div>
        <div className="profile__sec text-center">
          <FontAwesomeIcon
            icon={faUserAlt}
            className="text-blue-700 myshadow"
          />
          <p className="text">Profile</p>
        </div>
      </div>
      <div className="transaction__sec mt-4">
        <h2 className="text-xl">Recent Transactions</h2>
        <p className="mt-3 text-gray-400">TODAY</p>
      </div>
      <div className="details flex justify-between mt-3">
        <div className="report flex">
          <img src={Tom} alt="Tom Holland" />
          <div className="d__texts mt-4 ml-6">
            <h2 className="text-gray-600">Tom Holland</h2>
            <p className="text-gray-400">Payment received</p>
          </div>
        </div>
        <div className="cash flex mt-4">
          <h3 className="text-blue-700">$250</h3>
        </div>
      </div>
      <div className="details flex justify-between mt-3">
        <div className="report flex">
          <img src={Chris} alt="Chris Jericho" />
          <div className="d__texts mt-4 ml-6">
            <h2 className="text-gray-600">Chris Jericho</h2>
            <p className="text-gray-400">Payment sent</p>
          </div>
        </div>
        <div className="cash flex mt-4">
          <h3 className="text-red-700">$250</h3>
        </div>
      </div>
      <div className="details flex justify-between mt-3">
        <div className="report flex">
          <img src={Meghan} alt="Meghan Stallion" />
          <div className="d__texts mt-4 ml-6">
            <h2 className="text-gray-600">Meghan Stallion</h2>
            <p className="text-gray-400">Payment received</p>
          </div>
        </div>
        <div className="cash flex mt-4">
          <h3 className="text-blue-700">$250</h3>
        </div>
      </div>
      <div className="transaction__sec mt-4">
        <p className="mt-3 text-gray-400">YESTERDAY</p>
      </div>
      <div className="details flex justify-between mt-3">
        <div className="report flex">
          <img src={Evans} alt="Chris Evans" />
          <div className="d__texts mt-4 ml-6">
            <h2 className="text-gray-600">Chris Evans</h2>
            <p className="text-gray-400">Payment received</p>
          </div>
        </div>
        <div className="cash flex mt-4">
          <h3 className="text-blue-700">$250</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
