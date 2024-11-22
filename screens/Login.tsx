import defaultStyles from "../styles/defaultStyles";
import formStyle from "../styles/formStyles";

import React, { useEffect, useState } from "react";
import ToggleTextInput from "../assets/components/ToggleTextInput";

import {
	Keyboard,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import Background from "../assets/components/Background";
import { useNavigation } from "@react-navigation/native";
import EncryptedStorage from "react-native-encrypted-storage";

const Login = () => {
	const [teclado, setTeclado] = useState<boolean>(false);
	const [usuario, setUsuario] = useState<string>("");
	const [senha, setSenha] = useState<string>("");

	const navigation = useNavigation();

	type autenticacao = {
		usuario: string;
		senha: string;
	};

	const buscarLogin = async ({ usuario, senha }: autenticacao) => {
		return await fetch("http://127.0.0.1:8080/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: usuario,
				password: senha,
			}),
		})
			.then((dados) => {
				if (dados.ok) {
					return dados.json();
				} else {
					throw new Error("Erro na requisição");
				}
			})
			.then((dados) => JSON.stringify(dados.token, null, 2))
			.catch((erro) => console.log(erro));
	};

	const gerenciadorToken = async (credenciais: autenticacao) => {
		try {
			const token = await buscarLogin(credenciais);

			if (typeof token === "string") {
				EncryptedStorage.setItem("token", token);
				const newToken = await EncryptedStorage.getItem("token");
			} else {
				throw new Error("Tipagem do token com resultado inexperado");
			}

			navigation.navigate("Main");
		} catch (erro) {
			console.error(erro);
		}
	};

	const olho = {
		active: require("../assets/source-images/eye.png"),
		inactive: require("../assets/source-images/eye-off.png"),
	};

	useEffect(() => {
		const tecladoVisivel = Keyboard.addListener("keyboardDidShow", () => {
			setTeclado(true);
		});
		const tecladoInvisivel = Keyboard.addListener("keyboardDidHide", () => {
			setTeclado(false);
		});
	}, []);

	return (
		<Background>
			<View
				style={[
					defaultStyles.azul_noturno,
					{
						width: "90%",
						display: "flex",
						gap: 15,
						padding: "5%",
						borderRadius: 20,
					},
				]}
			>
				<View style={{ display: "flex", alignItems: "center" }}>
					{!teclado && (
						<Image source={require("../assets/source-images/invertL.png")} />
					)}
				</View>

				<Text style={defaultStyles.fonte_invertida}>Usuario</Text>
				<TextInput
					autoComplete="email"
					placeholder="Por favor, insira seu e-mail"
					placeholderTextColor="#777"
					style={formStyle.input}
					onChangeText={setUsuario}
					value={usuario}
				/>

				<Text style={defaultStyles.fonte_invertida}>Senha</Text>
				<ToggleTextInput
					autoComplete="password"
					iconSource={olho}
					placeholder="Por favor, insira sua senha"
					onChangeText={setSenha}
					value={senha}
				></ToggleTextInput>

				<TouchableOpacity
					style={formStyle.submit_button}
					onPress={() => {
						gerenciadorToken({ usuario, senha });
					}}
				>
					<Text style={defaultStyles.fonte_titulo_estilizado}>ENTRAR</Text>
				</TouchableOpacity>

				{!teclado && (
					<TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
						<Text
							style={[
								defaultStyles.fonte_invertida,
								defaultStyles.destaque,
								{
									textDecorationLine: "underline",
									fontSize: 14,
									textAlign: "center",
								},
							]}
						>
							Clique aqui para realizar o cadastro
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</Background>
	);
};

export default Login;
