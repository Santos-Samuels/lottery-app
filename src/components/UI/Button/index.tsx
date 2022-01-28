import { StyledButton, StyledTouchableOpacity } from './style'

interface IProps {
  onPress: () => void;
  isLoading: boolean
}

const Button: React.FC<IProps> = (props) => {
  return (
    <StyledTouchableOpacity onPress={props.onPress} disabled={props.isLoading}>
      <StyledButton>{ props.children }</StyledButton>
    </StyledTouchableOpacity>
  )
}

export default Button