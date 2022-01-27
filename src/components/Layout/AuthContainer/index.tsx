import { StyledView } from "./style"

const AuthContainer: React.FC = (props) => {
  return (
    <StyledView>
      {props.children}
    </StyledView>
  )
}

export default AuthContainer