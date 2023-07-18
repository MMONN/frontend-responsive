import { clsx } from "clsx";
import  {
  ComponentImagePropsType,
} from "../../atoms/ComponentImage";
import ComponentContentCard, {
  ComponentContentCardPropsType,
} from "../../molecules/ComponentContentCard";
import ComponentImagePlayers from "../../atoms/ComponentImagePlayers";
import ComponentText from "../../atoms/ComponentText";
import ComponentCarousel from "../ComponentCarousel";

export type ComponentPlayersPropsType = {
  images?: ComponentImagePropsType;
  context?: ComponentContentCardPropsType[];
  header?: string;
};

const ComponentPlayers = ({
  images,
  context,
  header,
}: ComponentPlayersPropsType): JSX.Element => {
  return (
    <div className={clsx("sm:flex sm:ml-[31px] md:ml-[321px]")}>
      <div className={clsx("block sm:hidden")}>
        <div className={clsx("pl-4")}>
          <ComponentText text={header ?? ""} type="head" />
        </div>
        <ComponentImagePlayers sourceImage={images?.sourceImage} />
        <ComponentCarousel
          context={context as ComponentContentCardPropsType[]}
        />
      </div>

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
      <div className={clsx("hidden sm:block z-10")}>
        <ComponentImagePlayers sourceImage={images?.sourceImage} />
      </div>
    </div>
  );
};

export default ComponentPlayers;
