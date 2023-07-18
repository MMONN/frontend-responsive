import { clsx } from "clsx";

export type ComponentImagePropsType = {
  sourceImage?: {
    desktopSiz?: string;
    tableSize?: string;
    mobileSize?: string;
  };
};

const ComponentImageAthletes = ({
  sourceImage,
}: ComponentImagePropsType): JSX.Element => {
  return (
    <>
      <picture
        className={clsx(
          "z-10 mt-0 ml-0 ",
          "h-[281px] w-[200px]",
          "sm:h-[699px] sm:w-[498px] sm:mt-[121px]",
          "md:h-[850px] md:w-[853px] md:ml-[175px] md:mt-[35px]"
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

        <img
          src="/img/athletes_tablet.png"
          className="w-full h-full"
          alt="img-athletes"
        />
      </picture>
    </>
  );
};

export default ComponentImageAthletes;
