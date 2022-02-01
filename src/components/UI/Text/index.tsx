import { StyledText } from './style'

interface IProps {
  bold?: boolean;
}

const Text: React.FC<IProps> = (props) => {
  return <StyledText bold={props.bold ? props.bold : false}>{ props.children }</StyledText>
}

export default Text