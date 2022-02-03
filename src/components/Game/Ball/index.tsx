import { RootState } from "@store/index";
import { RuleState } from "@store/types/rulesTypes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledView, StyledText } from "./style";
import { TouchableWithoutFeedback } from "react-native"
import { BetState } from "@store/types/betTypes";
import { updateNumbers } from "@store/actions/betActions";

interface IProps {
  number: number;
}

const Ball: React.FC<IProps> = (props) => {
  const rules = useSelector((states: RootState) => states.rules as RuleState);
  const bet = useSelector((states: RootState) => states.bet as BetState);
  const dispatch = useDispatch()

  const updateNumberHandler = () => {
    updateNumbers(dispatch, bet, props.number)
  }


  return (
    <TouchableWithoutFeedback onPress={updateNumberHandler}>
      <StyledView
        color={rules!.currentGameRule.color}
        isActive={bet.includes(props.number)}
      >
        <StyledText>{props.number.toString().padStart(2, '0')}</StyledText>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default Ball;
