import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

interface IProps {
  color?: string;
}

export const StyledView = styled.View<IProps>`
  border-left-width: 5px;
  border-color: ${props => props.color};
  border-radius: 3px;
  padding-left: 10px;
  padding-vertical: 8px;
  margin-vertical: 8px;
`

export const StyledText = styled.Text<IProps>`
  color: ${props => props.color ? props.color : colors.text};
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  margin-right: 7px;
  margin-bottom: 3px;
`

export const StyledViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TrashButton = styled.TouchableOpacity`
  margin-right: 8px;
`