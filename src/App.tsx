import "./App.css";
import ComponentImage from "./components/atoms/ComponentImage";
import ComponentNumberCount from "./components/atoms/ComponentNumberCount";
import ComponentText from "./components/atoms/ComponentText";
import ComponentContentCard from "./components/molecules/ComponentContentCard";
import cart_img from "./img/footballer 1.png";
import bask from "./img/Group 3.png";
import { clsx } from "clsx";

function App() {
  return (
    <div className="relative">
      {/* <div className=" absolute flex-col z-10">
        <img src={cart_img} className={clsx("top-9 left-[175px]")} />
        <img src={bask} className={clsx("right-[25px]")} />
      </div> */}
       {/* <ComponentImage sourceImage={{ desktopSiz: cart_img }} /> */}
       
       <div className="">
        <img src={cart_img} className={clsx("pt-9 pl-[175px] absolute")} />

        <div className="flex-col">
          <ComponentContentCard
            header="ATHLETS"
            title={{
              text: "CONNECTION",
              countNumber: "01",
              countNumberType: "primary",
            }}
            content="Connect with coaches directly, you can ping coaches to view profile."
            positionContext="right"
          />

          <ComponentContentCard
            title={{
              text: "COLLABORATION",
              countNumber: "02",
              countNumberType: "primary",
            }}
            content="Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
            bg="gray"
            positionContext="right"
          />
          <ComponentContentCard
            title={{
              text: "GROWTH",
              countNumber: "03",
              countNumberType: "Secondary",
            }}
            content="Resources and tools for you to get better as a student Athelte. 
        Access to training classes, tutor sessions, etc "
            bg="purple"
            positionContext="right"
          />
        </div>
      </div>
     

      <div className="">
        <img src={bask} className={clsx("right-[25px] absolute")} />

        <div className="flex-col">
          <ComponentContentCard
            header="ATHLETS"
            title={{
              text: "CONNECTION",
              countNumber: "01",
              countNumberType: "primary",
            }}
            content="Connect with coaches directly, you can ping coaches to view profile."
          />

          <ComponentContentCard
            title={{
              text: "COLLABORATION",
              countNumber: "02",
              countNumberType: "primary",
            }}
            content="Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
            bg="gray"
          />
          <ComponentContentCard
            title={{
              text: "GROWTH",
              countNumber: "03",
              countNumberType: "Secondary",
            }}
            content="Resources and tools for you to get better as a student Athelte. 
        Access to training classes, tutor sessions, etc "
            bg="purple"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
