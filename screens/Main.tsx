import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import mainStyles from "../styles/mainStyles";
import MainNavigation from "../app-flow/MainNavigation";
import EncryptedStorage from "react-native-encrypted-storage";
import { useAuth } from "../app-flow/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


type Materia = { nome: string; imagem: ImageSourcePropType };
type Materias = Array<Materia>;

const Main = () => {
	const navigation = useNavigation();
  const { authToken, autorizarToken } = useAuth();
  const [token, setToken] = useState<string | null>("");

  const resgatarToken = async () => {
    return await EncryptedStorage.getItem("token");
  };

  const setarToken = async () => {
    const solicitacaoToken = await resgatarToken();
    setToken(solicitacaoToken);
  };

  const selecionarMateria = async(materia:string) => {
	  await AsyncStorage.setItem("materia", materia)
	  navigation.navigate("Search")
  };

  useEffect(() => {
    setarToken();
  }, []);

  const materias: Materias = [
    { nome: "artes", imagem: require("../assets/source-images/artes.png") },
    {
      nome: "ciencias",
      imagem: require("../assets/source-images/ciencias.png"),
    },
    {
      nome: "geografia",
      imagem: require("../assets/source-images/geografia.png"),
    },
    { nome: "ingles", imagem: require("../assets/source-images/ingles.png") },
    {
      nome: "portugues",
      imagem: require("../assets/source-images/portugues.png"),
    },
    {
      nome: "matematica",
      imagem: require("../assets/source-images/matematica.png"),
    },
    {
      nome: "historia",
      imagem: require("../assets/source-images/historia.png"),
    },
  ];
  return (
    <ScrollView style={mainStyles.layout}>
      <View>
        <Image source={require("../assets/source-images/classroom.png")} />
      </View>
      <View style={[mainStyles.materias]}>
        {materias.map((url, index) => (
          <TouchableOpacity style={mainStyles.materia} key={index}
	  onPress={() => selecionarMateria(url.nome)}
	  >
            <Text style={mainStyles.materia_nome}>{url.nome}</Text>
            <Image
              source={url.imagem}
              style={mainStyles.materia_img}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
        <View style={mainStyles.materia}>
          <Text style={mainStyles.materia_nome}>Ver Mais</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
