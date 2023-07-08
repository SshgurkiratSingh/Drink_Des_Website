"use client";
import React from "react";
import Button from "../components/Button";
import { SafeUser } from "../types";
import Collapse from "../components/Collapse";
import useProfilePicModal from "../hooks/useProfilePicModal";
import ProfilePicModal from "../components/modals/ProfilePicModal";
import useUpdateBody from "../hooks/useBodyModal";
import BodyUpdateModal from "../components/modals/UpdateBodyDetail";
import BodyInfo from "./bodyInfo";
import { MdAccountBalanceWallet } from "react-icons/md";
import Image from "next/image";
interface ProfileBoxProps {
  currentUser: SafeUser;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ currentUser }) => {
  const userImage = currentUser.image || "/images/placeholder.png";
  const profilePicModal = useProfilePicModal();
  const updateBodyModal = useUpdateBody();
  return (
    <>
      {!currentUser.DateOfBirth ||
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
        <ProfilePicModal />
        <BodyUpdateModal />
        <figure className="snip1344">
          <Image src={userImage} alt="profile-pic" className="background" />
          <Image src={userImage} alt="profile-sample6" className="profile" />
          <figcaption>
            <h3>
              {currentUser.name}
              <span>Balance :Rs.{currentUser.balance}</span>
            </h3>
            {currentUser.DateOfBirth &&
            currentUser.Height &&
            currentUser.weight &&
            currentUser.gender ? (
              <BodyInfo
                gender={currentUser.gender}
                weight={currentUser.weight}
                height={currentUser.Height}
                dob={currentUser.DateOfBirth}
              />
            ) : (
              <></>
            )}
            <div className="flex flex-row items-center justify-center p-2 m-2">
              <Button
                onClick={() => {
                  profilePicModal.onOpen();
                }}
                s4
                label="Update Profile Picture"
              />
              <Button
                onClick={() => {
                  updateBodyModal.onOpen();
                }}
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
