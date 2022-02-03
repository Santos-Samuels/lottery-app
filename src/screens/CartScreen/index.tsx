import {
  Title,
  CartList
} from "@components/index";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import {
  Container,
  ButtonContainer,
  ButtonContent,
  StyledText,
  StyledView,
  StyledViewRow
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { CartState } from "@store/types/cartTypes";
import { formatMoney } from "@shared/utils";
import { clearCart } from "@store/actions/cartActions";

const CartScreen: React.FC = () => {
  const cart = useSelector((states: RootState) => states.cart as CartState);
  const dispatch = useDispatch()
  
  const checkOut = () => {
    clearCart(dispatch)
  }

  return (
    <Container>
      <View>
        <Title size="md" uppercase={true}>
          Cart
        </Title>
        <CartList />
      </View>

      <StyledView>
        <StyledViewRow>
          <Title size="md" uppercase={true}>Cart</Title>
          <StyledText>TOTAL: {formatMoney(cart.totalAmount)}</StyledText>
        </StyledViewRow>

        <ButtonContainer onPress={checkOut}>
          <ButtonContent>Save</ButtonContent>
          <AntDesign
            name="arrowright"
            style={{ marginLeft: 5 }}
            size={30}
            color={colors.button}
          />
        </ButtonContainer>
      </StyledView>
    </Container>
  );
};

export default CartScreen;
