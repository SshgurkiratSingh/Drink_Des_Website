"use client";
import React from "react";
import { User } from "@prisma/client";
import Container from "../container";
import Lgog from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMEnu";
import { SafeUser } from "@/app/types";
interface NavBarProps {
  currentUser?: SafeUser | null;
}
const Navbar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <>
      <Container>
        <div className="navbar bg-base-100 w-full">
          {" "}
          <div className="flex-1">
            <a className="btn btn-ghost normal-case ">
              <Lgog />
            </a>
          </div>
          <div className="flex flex-1 justify-between items-center m-2">
            <div className="flex-grow"></div>

            <div className="flex-grow"></div>
            <UserMenu currentUser={currentUser} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
