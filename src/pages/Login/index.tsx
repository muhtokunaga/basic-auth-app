import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from '../../components/ControlledInput';
import { useNavigation } from '@react-navigation/native'

type FormData = {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup.string().email("E-email inválido").required("Informe o e-mail"),
	password: yup.string().required("Informe a senha")
});

export function Login() {
	const navigation = useNavigation();

	function openFormCadastro(){
		navigation.navigate('SignUp');
	}

	const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(schema)
	});

	async function handleUserLogin(data: FormData) {
		navigation.navigate('Home');
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Image style={styles.containerLogo}
					source={require('../../assets/icon.png')}
				/>
			</View>


			<View>
				<ControlledInput
					name="email"
					control={control}
					icon="mail"
					placeholder="E-mail"
					error={errors.email}
				/>
				<ControlledInput
					name="password"
					control={control}
					icon="lock"
					placeholder="Senha"
					secureTextEntry
					error={errors.password}
				/>

				{/* Componente */}
				<Button
					title="Acessar"
					onPress={handleSubmit(handleUserLogin)}
				/>
			</View>

			<View style={styles.containerCadastro}>
				<Text>Não possui uma conta?</Text>
				<TouchableOpacity onPress={openFormCadastro}>
					<Text style={styles.textCadastro}>Faça seu cadastro agora!</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerLogo: {
		height: 150,
		width: 150
	},
	containerCadastro:{
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textCadastro: {
		fontSize: 16,
		fontStyle: 'italic',
		textDecorationLine: 'underline',
		color: '#808080'
	},
	containerTextoInformacao: {
		position: 'absolute',
		marginTop: 10,
		marginBottom: 50,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textoInformacao: {
		fontSize: 12,
		fontStyle: 'italic',
	},
});
