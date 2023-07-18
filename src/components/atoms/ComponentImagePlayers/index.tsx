import { clsx } from "clsx";

export type ComponentImagePlayersPropsType = {
  sourceImage?: {
    desktopSiz?: string;
    tableSize?: string;
    mobileSize?: string;
  };
};

const ComponentImagePlayers = ({
  sourceImage,
}: ComponentImagePlayersPropsType): JSX.Element => {
  return (
    <>
      <picture
        className={clsx(
          "w-full z-10 mt-0 ml-0 ",
          "h-[249px] w-[302px]",
          "sm:h-[568px] sm:w-[691px]",
          "md:h-[815px] md:w-[1116px] md:mr-[125px]"
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

export default ComponentImagePlayers;
