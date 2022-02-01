import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const StyledView = styled.View`
  margin-vertical: 10px;
  flex-direction: row;
  align-items: center;
`

export const StyledText = styled.Text`
  font-style: italic;
  color: ${colors.text};
  margin-right: 5px;
`