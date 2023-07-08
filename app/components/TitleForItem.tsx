"use client";
import { Item } from "@prisma/client";
import HeartButton from "./HeartButton";
import { SafeUser } from "../types";

interface TitleForListProps {
  title?: String;
  listingId?: String;
  currentUser?: SafeUser;
}

const TitleForList: React.FC<TitleForListProps> = ({
  title,
  listingId,
  currentUser,
}) => {
  return (
    <div>
      <div className="text-5xl font-bold text-gray-50 titleForList flex flex-row">
        {title}
        <span className="ml-auto items-center align-middle">
          <HeartButton listingId={listingId} currentUser={currentUser} />
        </span>
      </div>
    </div>
  );
};
export default TitleForList;
