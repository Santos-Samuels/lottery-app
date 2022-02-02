import { StyledView, StyledText } from "./style";

interface IProps {
  text: string;
  isFill: boolean;
  actionHandler: () => void
}

const ActionButton: React.FC<IProps> = (props) => {
  return (
    <StyledView isFill={props.isFill} onPress={props.actionHandler}>
      <StyledText isFill={props.isFill}>{props.children ? props.children : ''} {props.text}</StyledText>
    </StyledView>
  );
};

export default ActionButton;
