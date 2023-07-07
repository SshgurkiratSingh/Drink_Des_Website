"use client";

import React from "react";
import Button from "../components/Button";
import { SafeUser } from "../types";

interface ProfileBoxProps {
  currentUser: SafeUser;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ currentUser }) => {
  const userImage = currentUser.image || "/images/placeholder.png";
  return (
    <div className="flex justify-center items-center m-2">
      <figure className="snip1344">
        <img src={userImage} alt="profile-pic" className="background" />
        <img src={userImage} alt="profile-sample6" className="profile" />
        <figcaption>
          <h3>
            {currentUser.name}
            <span>Balance :Rs.{currentUser.balance}</span>
          </h3>
          <div className="flex flex-row items-center justify-center ">
            <Button onClick={() => {}} s4 label="Update Profile Picture" />
            <Button onClick={() => {}} s4 label="Update Age, Body ,Weight" />
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProfileBox;
