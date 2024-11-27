import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  layout: {
    height: "100%",

    display: "flex",
  },
  materias: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",

    gap: "10%",
  },
  materia: {
    width: "48%",
    height: 90,
    padding: 10,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    gap: 10,

    backgroundColor: "#FFF",

    borderColor: "#0B063577",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  materia_img: {
    width: 65,
    height: 65,
  },
  materia_nome: {
    textAlign: "left",
    color: "#0B0635",
  },
});

export default mainStyles;
