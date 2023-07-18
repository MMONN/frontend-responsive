import "./App.css";
import ComponentSports from "./components/templates/ComponentSports";

function App() {
  return (
    <>
      <ComponentSports
        contentAthletes={{
          images: {
            sourceImage: {
              desktopSiz: "/img/athletes_desktop.png",
              tableSize: "/img/athletes_tablet.png",
              mobileSize: "/img/athletes_mobile.png",
            },
            positionImage: "left",
          },
          header: "ATHLETES",
          context: [
            {
              title: {
                text: "CONNECTION",
                countNumber: "01",
                countNumberType: "primary",
              },
              content:
                "Connect with coaches directly, you can ping coaches to view profile.",
              positionContext: "right",
            },
            {
              title: {
                text: "COLLABORATION",
                countNumber: "02",
                countNumberType: "primary",
              },
              content:
                "Work with other student athletes to  increase visability.When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
              background: {
                color: "gray",
                type: "light",
              },
              positionContext: "right",
            },
            {
              title: {
                text: "GROWTH",
                countNumber: "03",
                countNumberType: "Secondary",
              },
              content:
                "Resources and tools for you to get better as a student Athelte. Access to training classNamees, tutor sessions, etc ",
              background: {
                color: "purple",
                type: "dark",
              },
              positionContext: "right",
            },
          ],
        }}
        contentPlayers={{
          header: "PLAYERS",
          images: {
            sourceImage: {
              desktopSiz: "/img/players_desktop.png",
              tableSize: "/img/players_tablet.png",
              mobileSize: "/img/players_mobile.png",
            },
            positionImage: "right",
          },
          context: [
            {
              title: {
                text: "CONNECTION",
                countNumber: "01",
                countNumberType: "primary",
              },
              content:
                "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
            },
            {
              title: {
                text: "COLLABORATION",
                countNumber: "02",
                countNumberType: "primary",
              },
              content:
                "Work with recruiter to increase your chances of finding talented athlete.",
              background: {
                color: "gray",
                type: "light",
              },
            },
            {
              title: {
                text: "GROWTH",
                countNumber: "03",
                countNumberType: "Secondary",
              },
              content: "Save your time, recruit proper athlets for your team.",
              background: {
                color: "darkBlue",
                type: "dark",
              },
            },
          ],
        }}
      />
    </>
  );
}

export default App;
