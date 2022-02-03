import ActionButton from "../ActionButton";
import { StyledView } from "./style";
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { BetState } from "@store/types/betTypes";
import { RootState } from "@store/index";
import { clearNumbers, completeNumbers } from "@store/actions/betActions";
import { RuleState } from "@store/types/rulesTypes";

const ActionButtonList: React.FC = () => {
  const bet = useSelector((states: RootState) => states.bet as BetState);
  const rules = useSelector((states: RootState) => states.rules as RuleState);
  const dispatch = useDispatch()

  return (
    <StyledView>
      <StyledView>
        <ActionButton text="Complete game" isFill={false} actionHandler={() => completeNumbers(dispatch, bet, rules!.currentGameRule)} />
        <ActionButton text="Clear game" isFill={false} actionHandler={() => clearNumbers(dispatch)} />
      </StyledView>

      <ActionButton text="Add to cart" isFill={true} actionHandler={() => {}}>
        <FontAwesome5 name="shopping-cart" size={21} color="#FFFFFF" />{'   '}
      </ActionButton>
    </StyledView>
  );
};

export default ActionButtonList;
