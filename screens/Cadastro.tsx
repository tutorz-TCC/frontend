import React, { useEffect } from "react";
import { useState } from "react";
import ToggleTextInput from "../assets/components/ToggleTextInput";
import Background from "../assets/components/Background";
import {
	Keyboard,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ScrollView,
} from "react-native";

import defaultStyles from "../styles/defaultStyles";
import formStyle from "../styles/formStyles";
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
	const navigation = useNavigation();
	const [teclado, setTeclado] = useState<boolean>(false);

	const [nomeSocial, setNomeSocial] = useState("");
	const [CPF, setCPF] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmeSenha, setConfirmeSenha] = useState("");

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
						gap: 10,
						padding: "5%",
						borderRadius: 20,
						position: "absolute",
						bottom: "1%",
					},
				]}
			>
				<View style={{ display: "flex", alignItems: "center" }}>
					{!teclado && (
						<Image source={require("../assets/source-images/invertL.png")} />
					)}
				</View>
				<ScrollView contentContainerStyle={{ gap: 15 }} style={{ height: 300 }}>
					<Text style={defaultStyles.fonte_invertida}>Nome Social</Text>
					<TextInput
						autoComplete="email"
						placeholder="Por favor, insira seu nome completo"
						placeholderTextColor="#777"
						style={formStyle.input}
						onChangeText={setNomeSocial}
						value={nomeSocial}
					/>

					<Text style={defaultStyles.fonte_invertida}>CPF</Text>
					<TextInput
						autoComplete="email"
						placeholder="Por favor, insira seu CPF"
						placeholderTextColor="#777"
						style={formStyle.input}
						onChangeText={setCPF}
						value={CPF}
					/>

					<Text style={defaultStyles.fonte_invertida}>E-mail</Text>
					<TextInput
						autoComplete="email"
						placeholder="Por favor, insira um endereço de e-mail"
						placeholderTextColor="#777"
						style={formStyle.input}
						onChangeText={setEmail}
						value={email}
					/>

					<Text style={defaultStyles.fonte_invertida}>Senha</Text>
					<ToggleTextInput
						autoComplete="password"
						iconSource={olho}
						placeholder="Por favor, digite uma senha"
						onChangeText={setSenha}
						value={senha}
					></ToggleTextInput>

					<Text style={defaultStyles.fonte_invertida}>Confirme a senha</Text>
					<ToggleTextInput
						autoComplete="password"
						iconSource={olho}
						placeholder="Por favor, repita a senha"
						onChangeText={setConfirmeSenha}
						value={confirmeSenha}
					></ToggleTextInput>
				</ScrollView>
				<TouchableOpacity
					style={formStyle.submit_button}
					onPress={() => {
						console.log(nomeSocial);
						console.log(CPF);
						console.log(email);
						console.log(senha);
						console.log(confirmeSenha);
					}}
				>
					<Text style={defaultStyles.fonte_titulo_estilizado}>CADASTRAR</Text>
				</TouchableOpacity>
				{!teclado && (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Login");
						}}
					>
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
							Clique aqui para acessar sua conta
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</Background>
	);
};

export default Cadastro;
