"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
const Lgog = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-xl titleBut">DrinkDes-6.2</h1>
      {/* <Image
        className="hidden md:block cursor-pointer rounded-lg"
        src="/images/label2.jpeg"
        alt="ah shit,here we go again"
        width={100}
        height={100}
      /> */}
    </>
  );
};

export default Lgog;
