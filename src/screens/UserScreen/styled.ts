import { colors } from "@shared/globalStyles/colors";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  border-width: 1;
  border-color: ${colors.border};
  border-radius: 14;
  shadow-color: ${colors.shadow};
  shadow-radius: 14;
  shadow-opacity: 1;
  background-color: white;
  margin-vertical: 30px;
`

export const ContainerHeader = styled.View`
  background-color: ${colors.primary};
  padding: 10px;
  width: 100%;
  border-top-left-radius: 14;
  border-top-right-radius: 14;
`

export const StyledViewRow = styled.View<{padding?: number}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${props => props.padding ? `padding: ${props.padding}px;` : ''}
`

export const StyledText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-style: italic;
  margin-horizontal: 7px;
  font-weight: 700;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const StyledButton = styled.View<{color: string}>`
  background-color: ${props => props.color};
  padding-horizontal: 8px;
  padding-vertical: 5px;
  border-radius: 5px;
  margin-left: 5px;
`

export const EditButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ButtonText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-style: italic;
  font-weight: 700;
`