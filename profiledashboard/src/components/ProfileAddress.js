import React from "react";
import "./profileAddress.css";

const ProfileAddress = () => {
  return (
    <div>
      {" "}
      <div className="address">
        <p className="add">Address:</p>
        <div>
          <div className="addressBottom">
            <label>Street :</label>
            <span>Value</span>
          </div>

          <br />
          <div className="addressBottom">
            <label>Suit :</label>
            <span>Value</span>
          </div>

          <br />
          <div className="addressBottom">
            <label>City :</label>
            <span>Value</span>
          </div>

          <br />
          <div className="addressBottom">
            <label>Zipcode :</label>
            <span>Value</span>
          </div>

          <br />
          <iframe
            src="https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple"
            title="./"
          ></iframe>
          <div className="location">
            <label>Lat :</label>
            <span style={{    marginRight: "10px"}}>Value</span>
            <label>Long :</label>
            <span>Value</span>
          </div>
        </div>
      </div>

      <div>Chat </div>
    </div>
  );
};

export default ProfileAddress;
