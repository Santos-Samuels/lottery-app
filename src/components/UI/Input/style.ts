import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput`
  padding: 25px;
  font-weight: 600;
  font-style: italic;
  width: 100%;
  color: ${colors.text};
`

export const StyledText = styled.Text`
  font-size: 12px;
  margin-right: 25px;
  font-style: italic;
  color: ${colors.error};
  white-space: nowrap;
`

export const StyledView = styled.View<{isError: boolean}>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  border-style: solid;
  border-bottom-color: ${props => props.isError ? colors.error : colors.border};
  border-bottom-width: ${props => props.isError ? 2 : 1};
`