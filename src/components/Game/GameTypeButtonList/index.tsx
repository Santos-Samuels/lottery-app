import { RootState } from "@store/index"
import { RuleState } from "@store/types/rulesTypes"
import { useSelector } from "react-redux"
import GameTypeButton from "../GameTypeButton"
import { ButtonsContainer } from "./style"

const GameTypeButtonList: React.FC<{isToggleable: boolean}> = (props) => {
  const rules = useSelector((states: RootState) => states.rules as RuleState)

  return (
    <ButtonsContainer>
      { rules!.lotteryRules.types.map(rule => <GameTypeButton key={rule.id} id={rule.id} title={rule.type} color={rule.color} isToggleable={props.isToggleable} />) }
    </ButtonsContainer>
  )
}

export default GameTypeButtonList