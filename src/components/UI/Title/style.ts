import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

interface IProps {
  size: string;
  uppercase: boolean;
}

export const StyledText = styled.Text<IProps>`
  font-size: ${props => props.size === 'lg' ? '30px' : '23px'};
  font-weight: 700;
  font-style: italic;
  color: ${colors.text};
  ${props => props.uppercase ? 'text-transform: uppercase;' : ''}
`