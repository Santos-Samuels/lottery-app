import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { EmpetyMessage, Text } from "@components/index";
import CartItem from "../CartItem";
import { StyledView } from "./style";
import { CartState } from "@store/types/cartTypes";

const CartList: React.FC = () => {
  const cart = useSelector((states: RootState) => states.cart as CartState);

  if (cart.items.length === 0)
    return <EmpetyMessage message="The cart is still empety" />;

  return (
    <StyledView style={{ maxHeight: 490 }}>
      <Text>Total items: {cart.items.length}</Text>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => <CartItem item={itemData.item} />}
      />
    </StyledView>
  );
};

export default CartList;
