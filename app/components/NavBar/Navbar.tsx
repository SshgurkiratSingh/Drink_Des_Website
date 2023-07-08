"use client";
import React, { use } from "react";
import { User } from "@prisma/client";
import Container from "../container";
import Lgog from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMEnu";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import Categories from "../Categories/Categories";
import Collapse from "../Collapse";
interface NavBarProps {
  currentUser?: SafeUser | null;
}
const Navbar: React.FC<NavBarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <>
      <Container>
        <div className="navbar bg-base-100 w-full">
          {" "}
          <div className="flex-1">
            <div className="btn btn-ghost normal-case ">
              <Lgog />
            </div>
          </div>
          <div className="flex flex-1 justify-between items-center m-2">
            <div className="flex-grow"></div>

            <div className="flex-grow"></div>
            <UserMenu currentUser={currentUser} />
          </div>
        </div>
      </Container>
      {currentUser && !currentUser.image ? (
        <div className="alert shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">New message!</h3>
            <div className="text-xs">You donot have a profile image</div>
          </div>
          <button className="btn s3" onClick={() => router.push("/Profile")}>
            Set profile image
          </button>
        </div>
      ) : (
        <></>
      )}
      <Categories />
    </>
  );
};

export default Navbar;
