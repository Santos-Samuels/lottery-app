import { StyledText } from './style'

interface IProps {
  size: string;
  uppercase?: boolean;
}

const Title: React.FC<IProps> = (props) => {
  return <StyledText size={props.size} uppercase={props.uppercase ? props.uppercase : false}>{ props.children }</StyledText>
}

export default Title