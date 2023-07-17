import React from "react";
import { clsx } from "clsx";
import ComponentText from "../../atoms/ComponentText";
import ComponentNumberCount, {
  ComponentNumberType,
} from "../../atoms/ComponentNumberCount";
import cart_img from "../../../img/footballer 1.png";

export type ComponentContentCardPropsType = {
  header?: string;
  title?: {
    text: string;
    countNumber: string;
    countNumberType: ComponentNumberType;
  };
  content?: string;
  bg?: "gray" | "purple";
  positionContext?: 'left' | 'right'
};

const ComponentContentCard = ({
  header,
  title,
  content,
  bg,
  positionContext,

}: ComponentContentCardPropsType): JSX.Element => {
  return (
    // <div className="flex">
    // <img src={cart_img} className={clsx("top-9 left-[175px]")} />
    <div
      className={clsx(
        "flex-col w-full grid grid-cols-3",
        positionContext === 'right' ? 'pr-[95px]' : 'pl-[175px]',
        bg === "gray" && "bg-[#F5F4F9]",
        bg === "purple" && "bg-[#5E3DB3]",
        header && 'pt-6 pb-14',
        content && 'pt-[53px] pb-14',
     
      )}
    >
    {positionContext === 'right' &&   <div className="col-span-2"></div>}
    
      <div className="col-span-1">
        {header && <ComponentText text={header} type="head" />}
        {title && (
          <div
            className={clsx(
              "flex gap-[10px]",
              header ? "mt-[59px]" : "mt-0",
              "mb-[21px]"
            )}
          >
            <ComponentNumberCount
              number={title.countNumber}
              type={title.countNumberType}
            />
            <ComponentText text={title.text} type="title" />
          </div>
        )}
        {content && <ComponentText text={content} type="content" bg={bg === 'purple' ? 'dark': 'light'}/>}
      </div>
      {positionContext === 'left' &&   <div className="col-span-2"></div>}
    </div>
    // </div>
  );
};

export default ComponentContentCard;
