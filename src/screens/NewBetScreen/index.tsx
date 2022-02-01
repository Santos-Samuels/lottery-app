import {
  AppContainer,
  GameTypeButtonList,
  Title,
  Text,
  BallList
} from "@components/index";
import { RootState } from "@store/index";
import { RuleState } from "@store/types/rulesTypes";
import { useSelector } from "react-redux";
import { StyledView, StyledText, Content } from "./styled";

const NewBetScreen: React.FC = () => {
  const rules = useSelector((states: RootState) => states.rules as RuleState);

  return (
    <AppContainer>
      <StyledView>
        <Title size="md" uppercase={true}>
          New bet
        </Title>
        <StyledText>for {rules!.currentGameRule.type}</StyledText>
      </StyledView>

      <Text bold={true}>Choose a game</Text>
      <Content>
        <GameTypeButtonList isToggleable={true} />
      </Content>

      <Content>
        <Text bold={true}>Fill your bet</Text>
        <Text>{rules!.currentGameRule.description}</Text>
      </Content>

      <BallList />
    </AppContainer>
  );
};

export default NewBetScreen;
