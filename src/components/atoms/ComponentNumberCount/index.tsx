import React from "react";
import { clsx } from "clsx";


export type ComponentNumberType =  "primary" | "Secondary";

export type ComponentNumberCountPopsType = {
  number: string;
  type: ComponentNumberType
};

const ComponentNumberCount = ({
  number,
  type,
}: ComponentNumberCountPopsType): JSX.Element => {
  return (
    <div className="flex-col">
      <span className={clsx("text-lg font-normal",type === 'primary' ?"text-black" :'text-[#8F6BE8]')}>
        {number}
      </span>
      <div
        className={clsx(
          type === "primary" ? "bg-[#603EBE]" : "bg-white",
          "w-[19px] h-[5px] rounded-[2.5px]"
        )}
      ></div>
    </div>
  );
};

export default ComponentNumberCount;
