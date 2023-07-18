import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import ComponentContentCard, {
  ComponentContentCardPropsType,
} from "../../molecules/ComponentContentCard";

export type ComponentCarouselPropsType = {
  context: ComponentContentCardPropsType[];
};

const ComponentCarousel = ({
  context,
}: ComponentCarouselPropsType): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? context?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === context.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className=" w-full h-auto px-4 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          <ComponentContentCard
            header={context[currentIndex].header}
            title={{
              text: context[currentIndex].title?.text ?? "",
              countNumber: context[currentIndex].title?.countNumber ?? "",
              countNumberType: "primary",
            }}
            content={context[currentIndex].content}
            positionContext={context[currentIndex].positionContext}
            background={{
              color: "gray",
              type: "light",
            }}
          />
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {context.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer -mt-7 z-50"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentCarousel;
