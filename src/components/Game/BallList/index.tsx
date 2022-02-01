import { RootState } from "@store/index"
import { RuleState } from "@store/types/rulesTypes"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Ball from "../Ball"
import { BallsContainer } from "./style"

const BallList: React.FC = () => {
  const rules = useSelector((states: RootState) => states.rules as RuleState)
  const [ballsNumber, setBallsNumber] = useState<number[]>([])

  useEffect(() => {
    let numbers: number[] = []

    for (let i = 1; i <= rules!.currentGameRule.range; i++) {
      numbers.push(i)
  
      if (i === rules!.currentGameRule.range)
        setBallsNumber(numbers)
    }
    
  }, [rules!.currentGameRule])

  return <BallsContainer>{ballsNumber.map((number) => <Ball key={number} number={number} />)}</BallsContainer>
}

export default BallList