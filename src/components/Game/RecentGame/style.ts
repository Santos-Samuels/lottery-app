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
  margin-vertical: 8px;
`

export const StyledText = styled.Text<IProps>`
  color: ${props => props.color ? props.color : colors.text};
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  margin-vertical: 4px;
`