import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components/native";

export const View = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.border};
  border-radius: 14;
  shadow-color: ${colors.shadow};
  shadow-offset: {width: 0, height: 2};
  shadow-radius: 14;
  elevation: 1;
  width: 100%;
  background-color: white;
`