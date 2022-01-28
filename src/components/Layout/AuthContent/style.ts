import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: ${colors.border};
  border-radius: 14;
  shadow-color: ${colors.shadow};
  shadow-radius: 14;
  shadow-opacity: 1;
  width: 100%;
  background-color: white;
  margin-vertical: 30px;
`