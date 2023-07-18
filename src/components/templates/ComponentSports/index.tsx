import ComponentAthletes, {
  ComponentAthletesPropsType,
} from "../../organisms/ComponentAthletes";
import ComponentPlayers, {
  ComponentPlayersPropsType,
} from "../../organisms/ComponentPlayers";

export type ComponentSportsPropsType = {
  contentAthletes: ComponentAthletesPropsType;
  contentPlayers: ComponentPlayersPropsType;
};

const ComponentSports = ({
  contentAthletes,
  contentPlayers,
}: ComponentSportsPropsType): JSX.Element => {
  return (
    <>
      <ComponentAthletes
        images={contentAthletes.images}
        header={contentAthletes.header}
        context={contentAthletes.context}
      />
      <ComponentPlayers
        images={contentPlayers.images}
        header={contentPlayers.header}
        context={contentPlayers.context}
      />
    </>
  );
};

export default ComponentSports;
