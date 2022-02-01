import styled from "styled-components/native";

interface IProps {
  color: string;
  isActive: boolean;
}

export const StyledView = styled.View<IProps>`
  background-color: ${props => props.isActive ? props.color : '#ADC0C4'};
  border-radius: 50px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 5px;
`

export const StyledText = styled.Text`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 18px;
`