import { StyleSheet } from "react-native";

const courseStyles = StyleSheet.create({
	layout: {
		height: "100%",
		width: "100%",
		padding:"1%",

		display: "flex",
		alignItems: "center",
	},
	cabecalho: {
		width:"100%",

		borderColor:"#0B0635",
		borderStyle:"solid",
		borderWidth:1,
		borderRadius:10
	},
	texto:{
		color: "#0B0635",
		fontSize:20,
		textAlign:"justify",
		padding:2
	},
	scroll:{
		width:"100%",
		flex:0,
		maxHeight:250,

		borderColor:"#0B0635",
		borderStyle:"solid",
		borderWidth:1,
	},
	scrollItem:{
		height:120,
	},
	scrollItemTitle:{
		color:"#FFF",
		padding:5
	},
	scrollItemTitleContainer:{
		backgroundColor:"#0B0635",
		height:42,
		display:"flex",
		justifyContent:"center",
		padding:"1%", 
	},
	buyingView:{
		width:"100%",
		padding:"1%",
		
		borderColor:"#0B0635",
		borderStyle:"solid",
		borderWidth:1
	},
});

export default courseStyles;
