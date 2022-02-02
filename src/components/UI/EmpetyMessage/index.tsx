import { StyledView, StyledText } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";

const EmpetyMessage: React.FC<{message: string}> = (props) => {
  return (
    <StyledView>
      <Ionicons name="alert-circle" size={30} color={colors.text} />
      <StyledText>
        {props.message}
      </StyledText>
    </StyledView>
  );
};

export default EmpetyMessage;
