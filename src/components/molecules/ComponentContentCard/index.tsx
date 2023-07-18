import { clsx } from "clsx";
import ComponentText from "../../atoms/ComponentText";
import ComponentNumberCount, {
  ComponentNumberType,
} from "../../atoms/ComponentNumberCount";

export type ComponentContentCardPropsType = {
  header?: string;
  title?: {
    text: string;
    countNumber: string;
    countNumberType: ComponentNumberType;
  };
  content?: string;
  background?: {
    color: "gray" | "purple" | "darkBlue" | "default";
    type: "dark" | "light" | "default";
  };
  positionContext?: "left" | "right";
};

const ComponentContentCard = ({
  header,
  title,
  content,
  background,
  positionContext,
}: ComponentContentCardPropsType): JSX.Element => {
  return (
    <div
      className={clsx(
        background?.color === "gray" &&
          "bg-[#F5F4F9] shadow-[0px_0px_0px_100vmax_#F5F4F9]",
        background?.color === "purple" &&
          "bg-[#5E3DB3] shadow-[0px_0px_0px_100vmax_#5E3DB3]",
        background?.color === "darkBlue" &&
          "bg-[#090C35] shadow-[0px_0px_0px_100vmax_#090C35]",
        header && "pt-6 pb-14",
        content && "pt-[53px] pb-14",
        "[clip-path:inset(0px_-100vmax)]"
      )}
    >
      {/* {header && <ComponentText text={header} type="head" />} */}
      {title && (
        <div
          className={clsx(
            // header ? 'hidden' :'flex',
            // "flex gap-[10px]",
            header
              ? "mt-[59px] hidden sm:flex gap-[10px]"
              : "mt-0 flex gap-[10px]",
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
      {content && (
        <div
          className={clsx(
            header ? "hidden sm:flex gap-[10px]" : "flex gap-[10px]"
          )}
        >
          <ComponentText
            text={content}
            type="content"
            backgroundType={background?.type}
          />
        </div>
      )}
    </div>
  );
};

export default ComponentContentCard;
