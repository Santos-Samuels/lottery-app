import {
  AppContainer,
  ActionButton,
  Title,
  Text,
  EmpetyMessage,
} from "@components/index";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import {
  Container,
  ButtonContainer,
  ButtonContent,
  StyledView,
  StyledText,
  StyledViewRow
} from "./styled";

const CartScreen: React.FC = () => {
  return (
    <Container>
      <View>
        <Title size="md" uppercase={true}>
          Cart
        </Title>
        <EmpetyMessage message="Cart is still empety" />
      </View>

      <StyledView>
        <StyledViewRow>
          <Title size="md" uppercase={true}>Cart</Title>
          <StyledText>TOTAL: R$ 0,00</StyledText>
        </StyledViewRow>

        <ButtonContainer>
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
