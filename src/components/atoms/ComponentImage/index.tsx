import { clsx } from "clsx";

export type ComponentImagePropsType = {
  sourceImage?: {
    desktopSiz?: string;
    tableSize?: string;
    mobileSize?: string;
  };
  positionImage: "left" | "right";
};

const ComponentImage = ({
  sourceImage,
  positionImage,
}: ComponentImagePropsType): JSX.Element => {
  return (
    <>
      <picture
        className={clsx(
          "w-full z-10",
          positionImage === "left" && "mt-0 ml-0",
          "md:h-[950px] md:ml-[175px] md:mt-[35px]",

          positionImage === "right" && "mt-0 mr-0",
          "sm:h-[568px]",
          "md:h-[815px] md:mr-[125px] md:w-[991px]"
        )}
      >
        {sourceImage?.mobileSize && (
          <source
            media={`(max-width: 320px)`}
            srcSet={`${sourceImage?.mobileSize}`}
            width={678}
          />
        )}
        {sourceImage?.tableSize && (
          <source
            media={`(max-width: 768px)`}
            srcSet={`${sourceImage?.tableSize}`}
            width={498}
          />
        )}
        {sourceImage?.desktopSiz && (
          <source
            media={`(min-width: 767px)`}
            srcSet={sourceImage?.desktopSiz}
            width={678}
          />
        )}

        <img src="https://twitter.com/KARTOON__kt" className="w-full h-full" />
      </picture>
    </>
  );
};

export default ComponentImage;
