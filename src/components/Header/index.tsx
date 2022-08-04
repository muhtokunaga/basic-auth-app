import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, IconContainer, Texto } from './style';
import { TouchableOpacity } from 'react-native';

export function Header() {
	return (
		<Container>
			<TouchableOpacity>
				<IconContainer>
					<Feather
						name='arrow-left'
						size={24}
					/>
				</IconContainer>

			</TouchableOpacity>
			<Texto>Olá, usuário</Texto>

			<TouchableOpacity>
				<IconContainer>
					<Feather
						name="log-out"
						size={24}
					/>
				</IconContainer>

			</TouchableOpacity>
		</Container >
	);
}