import { StyledView, StyledScrollView } from "./style"

const GameTypeButton: React.FC<{isScrollable: boolean}> = (props) => {
  if (props.isScrollable) {
    return (
      <StyledScrollView>
        {props.children}
      </StyledScrollView>
    )
  }
  
  return (
    <StyledView>
      {props.children}
    </StyledView>
  )
}

export default GameTypeButton