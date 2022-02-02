import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 35px;
  margin-horizontal: 15px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const ButtonContainer = styled.TouchableOpacity`
  border-width: 1.5px;
  border-color: #E2E2E2;
  border-radius: 10px;
  background-color: #F4F4F4;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonContent = styled.Text`
  font-size: 35px;
  font-style: italic;
  font-weight: 700;
  color: ${colors.button};
  margin-left: 7px;
`

export const StyledView = styled.View`
  margin-vertical: 15px;
`

export const StyledViewRow = styled.View`
  flex-direction: row;
  margin-vertical: 15px;
`

export const StyledText = styled.Text`
  font-size: 23px;
  color: ${colors.text};
  font-style: italic;
  margin-left: 10px;
`