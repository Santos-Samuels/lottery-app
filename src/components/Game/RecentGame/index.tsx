import { StyledView, StyledText } from "./style";
import { IBet } from "@shared/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { RuleState } from "@store/types/rulesTypes";
import { formatDate, formatMoney, formatStringArray } from "@shared/utils";
import { Text } from "@components/index";

interface IProps {
  recentGame: IBet;
}

const CartItem: React.FC<IProps> = (props) => {
  const rules = useSelector((states: RootState) => states.rules as RuleState);
  const gameRule = rules!.lotteryRules.types.find(rule => rule.id === props.recentGame.game_id)
  const formatedNumbers = formatStringArray(props.recentGame.choosen_numbers)
  const formatedDate = formatDate(new Date(props.recentGame.created_at))
  const formatedPrice = formatMoney(props.recentGame.price)

  return (
    <StyledView color={gameRule!.color} >
      <StyledText>{ formatedNumbers }</StyledText>
      <Text>{ formatedDate } - { formatedPrice }</Text>
      <StyledText color={gameRule!.color}>{ gameRule!.type }</StyledText>
    </StyledView>
  );
};

export default CartItem;
