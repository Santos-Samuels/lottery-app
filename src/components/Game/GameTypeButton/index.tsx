import { updateCurrentGameId } from "@store/actions/rulesActions"
import { RootState } from "@store/index"
import { RuleState } from "@store/types/rulesTypes"
import { useState } from "react"
import { TouchableWithoutFeedback } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { ButtonContent, StyledText } from "./style"

interface IGameTypeButton {
  id: number;
  title: string;
  color: string;
  isToggleable: boolean;
}

const GameTypeButton: React.FC<IGameTypeButton> = (props) => {
  const [isActive, setIsActive] = useState(false)
  const rules = useSelector((states: RootState) => states.rules as RuleState)
  const dispatch = useDispatch()

  if (props.isToggleable) {
    return (
      <TouchableWithoutFeedback onPress={() => updateCurrentGameId(dispatch, rules!.lotteryRules, props.id)}>
        <ButtonContent color={props.color} isActive={rules!.currentGameId === props.id}>
          <StyledText color={props.color} isActive={rules!.currentGameId === props.id}>
            {props.title}
          </StyledText>
        </ButtonContent>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => setIsActive(!isActive)}>
      <ButtonContent color={props.color} isActive={isActive}>
        <StyledText color={props.color} isActive={isActive}>
          {props.title}
        </StyledText>
      </ButtonContent>
    </TouchableWithoutFeedback>
  )
}

export default GameTypeButton