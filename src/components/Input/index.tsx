import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, IconContainer, InputText } from './styles';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ icon, value, ...rest }: InputProps) {

  return (
    <Container >
      <IconContainer>
        <Feather
          name={icon}
          size={24}
        />
      </IconContainer>

      <InputText
        value={value}
        {...rest}
      />
    </Container>
  );
}