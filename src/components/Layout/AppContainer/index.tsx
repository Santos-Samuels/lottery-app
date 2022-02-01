import { StyledView } from "./style"

const GameTypeButton: React.FC = (props) => {
  return (
    <StyledView>
      {props.children}
    </StyledView>
  )
}

export default GameTypeButton