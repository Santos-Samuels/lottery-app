import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledView = styled.View`
  border-bottom-width: 5px;
  border-radius: 5px;
  border-color: ${colors.primary};
  padding-horizontal: 6;
  margin-bottom: 15px;
`

export const StyledText = styled.Text`
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  color: ${colors.text};
`