import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  margin-top: 50px;
`

export const StyledText = styled.Text`
  font-weight: 700;
  font-style: italic;
  color: ${colors.text};
  font-size: 20px;
  margin-left: 5px;
`