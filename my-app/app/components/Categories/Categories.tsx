"use client";
import { IoBeerOutline, IoCafeOutline, IoWaterOutline } from "react-icons/io5";
import { LuCupSoda } from "react-icons/lu";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
export const categories = [
  {
    label: "Soda Symphony",
    icon: <LuCupSoda />,
    description: "Discover a world of fizzy delights with a variety of sodas!",
  },
  {
    label: "Beer Bonanza",
    icon: <IoBeerOutline />,
    description:
      "Indulge in a celebration of flavors with a selection of beers!",
  },
  {
    label: "Juice Jubilee",
    icon: <LiaGlassMartiniAltSolid />,
    description: "Enjoy a feast of fruity freshness with a spectrum of juices!",
  },
  {
    label: "Coffee Carnival",
    icon: <IoCafeOutline />,
    description:
      "Experience the diverse universe of coffee - one cup at a time!",
  },
  {
    label: "Water Wonderland",
    icon: <IoWaterOutline />,
    description: "Stay refreshed and hydrated with pure, chilled water!",
  },
];
