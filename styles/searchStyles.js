import { StyleSheet } from "react-native";

const searchStyles = StyleSheet.create({
	layout: {
		height: "100%",
		backgroundColor: "#F4F4F4",
		paddingLeft: "2%",
		paddingRight: "2%",
		paddingTop: "2%",
	},
	scroll: {
		marginTop: 10,
		gap: 10,
		paddingBottom: 20,
	},
	scrollItem: {
		height: 150,
		width: "100%",
		padding: "2%",

		display: "flex",
		flexDirection: "row",
		justifyContent:"space-between",

		borderColor: "#0B0635",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
	},
	texto: {
		fontSize: 16,
		color: "#0B0635",
	},
	titulo: {
		fontSize: 20,
		color: "#0B0635",
	},
});

export default searchStyles;
