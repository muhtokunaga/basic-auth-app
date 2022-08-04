import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View, Text } from 'react-native';
import { Form } from '../../components/Form';
import { Container, Subtitle, Title, ViewVoltar, Voltar } from './styles';
import { useNavigation } from '@react-navigation/native'

export function SignUp() {

	const navigation = useNavigation();

	function openPage() {
		navigation.navigate('Login');
	}
	return (
		<Container>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior="position" enabled>
					<Title>
						Crie sua{'\n'}conta
					</Title>

					<Subtitle>
						Faça seu cadastro de forma rápida e fácil
					</Subtitle>
					<Form />
					<ViewVoltar >
						<Text>Já possui uma conta?</Text>
						<TouchableOpacity onPress={openPage}>
							<Voltar>Faça Login aqui!</Voltar>
						</TouchableOpacity>
					</ViewVoltar>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container >
	);
}