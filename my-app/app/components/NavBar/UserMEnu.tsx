import { useState } from "react";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown dropdown-end">
      <button onClick={toggleOpen} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Avatar
            src={currentUser?.image}
            alt={currentUser?.name || "User avatar"}
          />
        </div>
      </button>
      {isOpen && (
        <>
          {currentUser ? (
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <MenuItem label="Profile" onClick={() => {}} />
              <MenuItem label="Purchase History" onClick={() => {}} />
              <MenuItem label="Favourite" onClick={() => {}} />
              <MenuItem label="Fitness Record" onClick={() => {}} />
              <MenuItem label="Logout" onClick={signOut} />
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <MenuItem label="Login" onClick={loginModal.onOpen} />
              <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default UserMenu;
