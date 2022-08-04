import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

//"contrato" que o botão deve ter
interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}