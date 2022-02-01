import styled from "styled-components/native";

interface IGameTypeButton {
  color: string;
  isActive: boolean;
}

export const ButtonContent = styled.View<IGameTypeButton>`
  background-color: ${props => props.isActive ? props.color : '#FFFFFF'};
  border-color: ${props => props.color};
  border-style: solid;
  border-width: 3px;
  border-radius: 30px;
  padding-vertical: 7px;
  padding-horizontal: 13px;
  margin-horizontal: 5px;
`

export const StyledText = styled.Text<IGameTypeButton>`
  color: ${props => props.isActive ? '#FFFFFF' : props.color};
  font-weight: 700;
  font-style: italic;
`