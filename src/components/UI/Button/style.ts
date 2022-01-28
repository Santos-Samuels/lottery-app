import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const StyledButton = styled.Text`
  color: ${colors.primary};
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  margin-vertical: 30px;
  text-align: center;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`