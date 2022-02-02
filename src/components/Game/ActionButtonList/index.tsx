import ActionButton from "../ActionButton";
import { StyledView } from "./style";
import { FontAwesome5 } from '@expo/vector-icons';

const ActionButtonList: React.FC = (props) => {
  return (
    <StyledView>
      <StyledView>
        <ActionButton text="Complete game" isFill={false} actionHandler={() => {}} />
        <ActionButton text="Clear game" isFill={false} actionHandler={() => {}} />
      </StyledView>

      <ActionButton text="Add to cart" isFill={true} actionHandler={() => {}}>
        <FontAwesome5 name="shopping-cart" size={21} color="#FFFFFF" />{'   '}
      </ActionButton>
    </StyledView>
  );
};

export default ActionButtonList;
