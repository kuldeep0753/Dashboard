import React from "react";
import "./profile.css";
import ProfileAddress from "./ProfileAddress";
import ProfileBar from "./ProfileBar";
import ProfileDetails from "./ProfileDetails";
const Profile = () => {
  return (
      <div className="container">
        <div className="dashList" style={{ flexGrow: 4 }}>
          <ul>
            <li>Profile</li>
            <hr />
            <li>Post</li>
            <hr />
            <li>Gallery</li>
            <hr />
            <li>Todo</li>
          </ul>
        </div>
        
        <div style={{ flexGrow: 3 }}> 
          <ProfileBar/>
          <div className="alignment">
          <ProfileDetails/>
          <hr className="vertical"/>
        <ProfileAddress style={{ flexGrow: 25 }}/>
          </div>
        
          
          
         
        </div>
      
      </div>
  );
};

export default Profile;
