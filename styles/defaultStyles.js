//Estilos padrão do projeto 
import { memo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

const defaultStyles = StyleSheet.create({
	//Paleta de cores principais do design
	azul_noturno:{
		backgroundColor:"#0C0635",
		color:"#0C0635"
	},
	azul_celeste:{
		backgroundColor:"#41AFDC",
		color:"#41AFDC"
	},
	azul_marinho:{
		backgroundColor:"#1F2E79",
		color:"#1F2E79"
	},
	azul_real:{
		backgroundColor:"#2F63A2",
		color:"#2F63A2"
	},

	//Configurações referente as fontes utilizadas
	fonte_padrao:{
		color:"#000000",
		fontFamily:"Inter",
		fontSize:20
	},
	fonte_invertida:{
		color:"#FFFFFF",
		fontFamily:"Inter",
		fontSize:20
	},
	fonte_titulo_estilizado:{
		color:"#0C0635",
		fontFamily:"Inter",
		fontSize:20
	},
	destaque:{
		marginTop:20,
		marginBottom:20
	},
})

export default defaultStyles;
