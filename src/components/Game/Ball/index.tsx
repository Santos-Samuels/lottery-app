import { RootState } from "@store/index";
import { RuleState } from "@store/types/rulesTypes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StyledView, StyledText } from "./style";
import { TouchableWithoutFeedback } from "react-native"

interface IProps {
  number: number;
}

const Ball: React.FC<IProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const rules = useSelector((states: RootState) => states.rules as RuleState);

  return (
    <TouchableWithoutFeedback onPress={() => setIsActive(!isActive)}>
      <StyledView
        color={rules!.currentGameRule.color}
        isActive={isActive}
      >
        <StyledText>{props.number}</StyledText>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default Ball;
