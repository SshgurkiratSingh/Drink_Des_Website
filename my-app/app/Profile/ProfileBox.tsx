"use client";
import React from "react";
import Button from "../components/Button";
import { SafeUser } from "../types";
import Collapse from "../components/Collapse";

interface ProfileBoxProps {
  currentUser: SafeUser;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ currentUser }) => {
  const userImage = currentUser.image || "/images/placeholder.png";

  return (
    <>
      {!currentUser.age ||
      !currentUser.Height ||
      !currentUser.weight ||
      !currentUser.gender ? (
        <Collapse
          title="Alert"
          content="Please Update Your Profile Detail (Age,Weight,Gender,Height)"
        />
      ) : (
        <></>
      )}
      <div className="flex justify-center items-center m-2">
        <figure className="snip1344">
          <img src={userImage} alt="profile-pic" className="background" />
          <img src={userImage} alt="profile-sample6" className="profile" />
          <figcaption>
            <h3>
              {currentUser.name}
              <span>Balance :Rs.{currentUser.balance}</span>
            </h3>
            <div className="flex flex-row items-center justify-center p-2 m-2">
              <Button onClick={() => {}} s4 label="Update Profile Picture" />
              <Button
                onClick={() => {}}
                s4
                label="Modify age, height, weight, and gender"
              />
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default ProfileBox;
