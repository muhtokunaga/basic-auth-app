import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  borderColor: 'black';
  borderStyle: solid;
  borderWidth: 1px;
  borderRadius:7px;
`;

export const IconContainer = styled.View<Props>`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  borderRadius:7px;

`;


export const InputText = styled(TextInput) <Props>`
	width: 300px;
	margin-left: 20px;
`;