import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

interface IProps {
  isFill: boolean;
}

export const StyledView = styled.TouchableOpacity<IProps>`
  background-color: ${props => props.isFill ? colors.button : colors.background};
  border-width: 3px;
  border-color: ${colors.button};
  border-radius: 12px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: ${props => props.isFill ? '97%;' : '47%'};
`

export const StyledText = styled.Text<IProps>`
  color: ${props => props.isFill ? '#FFFFFF' : colors.button};
  font-weight: 700;
  font-size: 18px;
  margin-left: 5px;
`