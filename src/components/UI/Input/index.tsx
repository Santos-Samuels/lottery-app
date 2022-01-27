import { TextInputProps, View } from "react-native"
import { StyledTextInput, StyledText, StyledView } from './style'

interface IProps {
  isError: boolean;
  errorMessage: string;
}

const Input: React.FC<IProps & Partial<TextInputProps>> = ({isError, errorMessage, ...rest}) => {
  return (
    <StyledView isError={isError}>
      <StyledTextInput {...rest} />
      { isError ? <StyledText>{ errorMessage }</StyledText> : null }
    </StyledView>
  )
}

export default Input