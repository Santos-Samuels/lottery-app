import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const StyledText = styled.Text`
  font-size: 23px;
  color: ${colors.text};
  font-style: italic;
`

export const Content = styled.View`
  margin-vertical: 10px;
`