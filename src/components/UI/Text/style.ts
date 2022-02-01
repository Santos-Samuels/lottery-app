import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

interface IProps {
  bold: boolean;
}

export const StyledText = styled.Text<IProps>`
  ${props => props.bold ? 'font-weight: 700;' : ''}
  font-style: italic;
  color: ${colors.secondaryText};
`