import { StyledButton, StyledTouchableOpacity } from './style'
import { ActivityIndicator } from 'react-native';

interface IProps {
  onPress: () => void;
  isLoading?: boolean
}

const Button: React.FC<IProps> = (props) => {
  return (
    <StyledTouchableOpacity onPress={props.onPress} disabled={props.isLoading ? props.isLoading : false}>
      {props.isLoading ? <ActivityIndicator size="small" color="#FFFFFF" /> : <StyledButton>{ props.children }</StyledButton>}
    </StyledTouchableOpacity>
  )
}

export default Button