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
import { checkout } from "@store/actions/cartActions";
import { RuleState } from "@store/types/rulesTypes";
import { MainScreenProp } from "@stacks/index";
import { useNavigation } from "@react-navigation/native";
import { clearFilters, requestRecentGames } from "@store/actions/recentGamesActions";
import { updateCurrentGameId } from "@store/actions/rulesActions";
import { useState } from "react";
import { ActivityIndicator } from 'react-native';

const CartScreen: React.FC = () => {
  const cart = useSelector((states: RootState) => states.cart as CartState);
  const rules = useSelector((states: RootState) => states.rules as RuleState);
  const mainNavigation = useNavigation<MainScreenProp>()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  
  const checkoutHandler = async () => {
    setLoading(true)
    const isSuccess = await checkout(dispatch, cart, rules!.lotteryRules.min_cart_value)

    if (isSuccess) {
      await requestRecentGames(dispatch, [])
      await updateCurrentGameId(dispatch, rules!.lotteryRules, rules!.lotteryRules.types[0].id)
      await clearFilters(dispatch)
      setLoading(false)
      mainNavigation.navigate('HomeScreen')
      return
    }

    setLoading(false)
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

        <ButtonContainer onPress={checkoutHandler} disabled={loading}>
          {loading ? <ActivityIndicator size="small" color={colors.primary} /> :
          <>
            <ButtonContent>Save</ButtonContent>
            <AntDesign
              name="arrowright"
              style={{ marginLeft: 5 }}
              size={30}
              color={colors.button}
            />
          </>}
        </ButtonContainer>
      </StyledView>
    </Container>
  );
};

export default CartScreen;
