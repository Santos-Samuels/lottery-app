import { IGameRole } from "@shared/interfaces"
import { clearNumbers } from "@store/actions/betActions"
import { requestRecentGames, updateFilters } from "@store/actions/recentGamesActions"
import { updateCurrentGameId } from "@store/actions/rulesActions"
import { RootState } from "@store/index"
import { RecentGamesState } from "@store/types/recentGamesType"
import { RuleState } from "@store/types/rulesTypes"
import { useState } from "react"
import { TouchableWithoutFeedback } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { ButtonContent, StyledText } from "./style"

interface IGameTypeButton {
  rule: IGameRole
  isToggleable: boolean;
}

const GameTypeButton: React.FC<IGameTypeButton> = (props) => {
  const [isActive, setIsActive] = useState(false)
  const rules = useSelector((states: RootState) => states.rules as RuleState)
  const recentGamesState = useSelector((states: RootState) => states.recentGames as RecentGamesState)
  const dispatch = useDispatch()
  
  const updateFilterHandler = () => {
    setIsActive(!isActive)
    updateFilters(dispatch, recentGamesState.filters, props.rule.type)
  }
  
  const updateCurrentGameHandler = () => {
    updateCurrentGameId(dispatch, rules!.lotteryRules, props.rule.id)
    clearNumbers(dispatch)
  }

  if (props.isToggleable) {
    return (
      <TouchableWithoutFeedback onPress={updateCurrentGameHandler}>
        <ButtonContent color={props.rule.color} isActive={rules!.currentGameId === props.rule.id}>
          <StyledText color={props.rule.color} isActive={rules!.currentGameId === props.rule.id}>
            {props.rule.type}
          </StyledText>
        </ButtonContent>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={updateFilterHandler}>
      <ButtonContent color={props.rule.color} isActive={isActive}>
        <StyledText color={props.rule.color} isActive={isActive}>
          {props.rule.type}
        </StyledText>
      </ButtonContent>
    </TouchableWithoutFeedback>
  )
}

export default GameTypeButton