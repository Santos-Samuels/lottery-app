import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput<{isError: boolean}>`
  padding: 25px;
  font-weight: 600;
  font-style: italic;
  border-style: solid;
  border-bottom-color: ${props => props.isError ? colors.error : colors.border};
  border-bottom-width: 1;
  width: 100%;
`