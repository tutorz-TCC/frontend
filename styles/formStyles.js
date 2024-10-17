//Estilos orientados aos formulários do projeto
import { StyleSheet } from "react-native";

const formStyle = StyleSheet.create({
	input: {
		height: 50,
		borderRadius: 10,
		backgroundColor: "#FFFFFF",
		borderColor: "#FFFFFF",
	},
	submit_button: {
		height: 60,
		borderRadius: 15,
		backgroundColor: "#FFFFFF",
		borderColor: "#FFFFFF",

		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
});

export default formStyle;
