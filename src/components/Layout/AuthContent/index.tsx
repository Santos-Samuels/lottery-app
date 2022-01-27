import { StyledView } from "./style"

const AuthContent: React.FC = (props) => {
  return (
    <StyledView>
      {props.children}
    </StyledView>
  )
}

export default AuthContent