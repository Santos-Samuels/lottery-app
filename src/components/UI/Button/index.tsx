import { TouchableOpacity } from "react-native"
import { StyledButton } from './style'

interface IProps {
  onPress: () => void;
}

const Button: React.FC<IProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <StyledButton>{ props.children }</StyledButton>
    </TouchableOpacity>
  )
}

export default Button