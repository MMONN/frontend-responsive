import { clsx } from "clsx";
import  {
  ComponentImagePropsType,
} from "../../atoms/ComponentImage";
import ComponentContentCard, {
  ComponentContentCardPropsType,
} from "../../molecules/ComponentContentCard";
import ComponentImageAthletes from "../../atoms/ComponentImageAthletes";
import ComponentText from "../../atoms/ComponentText";
import ComponentCarousel from "../ComponentCarousel";

export type ComponentAthletesPropsType = {
  images?: ComponentImagePropsType;
  context?: ComponentContentCardPropsType[];
  header?: string;
};

const ComponentAthletes = ({
  images,
  context,
  header,
}: ComponentAthletesPropsType): JSX.Element => {
  return (
    <div className={clsx("sm:flex sm:mr-[25px] md:mr-[195px]")}>
      <div className={clsx("block sm:hidden ml-[18px]")}>
        <ComponentText text={header ?? ""} type="head" />
      </div>

      <ComponentImageAthletes sourceImage={images?.sourceImage} />

      <div className="flex flex-col">
        <div className={clsx("hidden sm:block")}>
          <ComponentText text={header ?? ""} type="head" />
        </div>
        <div className="hidden sm:block">
          {context?.map((data, index) => {
            return (
              <ComponentContentCard
                header={data.header}
                title={{
                  text: data.title?.text ?? "",
                  countNumber: data.title?.countNumber ?? "",
                  countNumberType: data.title?.countNumberType ?? "primary",
                }}
                content={data.content}
                positionContext={data.positionContext}
                key={index}
                background={{
                  color: data.background?.color ?? "default",
                  type: data.background?.type ?? "default",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={clsx("block sm:hidden")}>
        <ComponentCarousel
          context={context as ComponentContentCardPropsType[]}
        />
      </div>
    </div>
  );
};

export default ComponentAthletes;
