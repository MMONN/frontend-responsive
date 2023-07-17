import React from "react";
import { clsx } from "clsx";

export type ComponentTextType = {
  text: string;
  type: "head" | "title" | "content";
  bg?: "dark" | "light";
};

const ComponentText = ({ text, type, bg }: ComponentTextType): JSX.Element => {
  switch (type) {
    case "head":
      return (
        <span className="text-[50px] md:text-[90px] font-normal text-[#E7E7E7]">
          {text}
        </span>
      );
    case "title":
      return (
        <span className="text-[28px] md:text-4xl font-normal text-[#C2C2C2]">
          {text}
        </span>
      );
    case "content":
      return (
        <span
          className={clsx(
            "text-[15px] md:text-lg lg:text-xl font-normal",
            bg === "dark" ? "text-white" : "text-black"
          )}
        >
          {text}
        </span>
      );
    default:
      return (
        <span className="text-[90px] font-normal text-[#E7E7E7]">{text}</span>
      );
  }
};

export default ComponentText;
