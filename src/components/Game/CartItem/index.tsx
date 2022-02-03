import { StyledView, StyledText, StyledViewRow, TrashButton } from "./style";
import { IBet } from "@shared/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { RuleState } from "@store/types/rulesTypes";
import { formatMoney, formatStringArray } from "@shared/utils";
import { Text } from "@components/index";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import { removeFromCart } from "@store/actions/cartActions";
import { CartState } from "@store/types/cartTypes";

interface IProps {
  item: IBet;
}

const CartItem: React.FC<IProps> = (props) => {
  const rules = useSelector((states: RootState) => states.rules as RuleState);
  const cart = useSelector((states: RootState) => states.cart as CartState);
  const gameRule = rules!.lotteryRules.types.find(rule => rule.id === props.item.game_id);
  const formatedNumbers = formatStringArray(props.item.choosen_numbers);
  const formatedPrice = formatMoney(props.item.price);
  const dispatch = useDispatch();

  return (
    <StyledViewRow>
      <TrashButton onPress={() => removeFromCart(dispatch, cart, props.item.id)}>
        <FontAwesome name="trash-o" size={25} color={colors.text} />
      </TrashButton>

      <StyledView color={gameRule!.color}>
        <StyledText>{formatedNumbers}</StyledText>

        <StyledViewRow>
          <StyledText color={gameRule!.color}>{gameRule!.type}</StyledText>
          <Text>{formatedPrice}</Text>
        </StyledViewRow>
      </StyledView>
    </StyledViewRow>
  );
};

export default CartItem;
