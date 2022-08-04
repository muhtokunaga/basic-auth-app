import React from 'react';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
	email: string;
	name: string;
	password: string;
	password_confirm: string;
}

const schema = yup.object({
	email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
	name: yup.string().required("Informe o seu nome"),
	password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
	password_confirm: yup.string().oneOf([yup.ref('password'), null], 'A senha de confirmação não confere.')
});

export function Form() {
	const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(schema)
	});

	function handleUserRegister(data: FormData) {

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};
		fetch('http://192.168.15.38:3000/users', requestOptions)
			.then(response => response.json()
			.then(console.log));
	}

	return (
		<Container>
			<ControlledInput
				name="email"
				control={control}
				icon="mail"
				placeholder="E-mail"
				error={errors.email}
			/>
			<ControlledInput
				name="name"
				control={control}
				icon="info"
				placeholder="Nome Completo"
				error={errors.name}
			/>
			<ControlledInput
				name="password"
				control={control}
				icon="lock"
				placeholder="Senha"
				secureTextEntry
				error={errors.password}
			/>
			<ControlledInput
				name="password_confirm"
				control={control}
				icon="lock"
				placeholder="Confirme a senha"
				secureTextEntry
				error={errors.password_confirm}
			/>

			<Button
				title="Cadastrar"
				onPress={handleSubmit(handleUserRegister)}
			/>
		</Container>
	)
}