import { TextInputProps } from "react-native"
import { StyledTextInput } from './style'

interface IProps {
  isError: boolean;
}

const Input: React.FC<IProps & Partial<TextInputProps>> = ({isError, ...rest}) => {
  return <StyledTextInput isError={isError} {...rest} />
}

export default Input