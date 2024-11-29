import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import formStyle from "../styles/formStyles";
import searchStyles from "../styles/searchStyles";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { tipoCurso } from "./Course";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchStackParamList } from "../app-flow/SearchStack";

type SearchType = NativeStackNavigationProp<SearchStackParamList, "Search">;

type Props = {
  navigation: SearchType;
};

const Search: React.FC<Props> = ({ navigation }) => {
  const [cursos, setCursos] = useState<Array<tipoCurso> | any>([]);
  const [carregando, setCarregando] = useState(true);
  const [pesquisa, setPesquisa] = useState("");

  const buscarCursos = async (): Promise<Array<tipoCurso>> => {
    return await fetch("http://127.0.0.1:3333/cursos", {
      method: "GET",
      headers: { "Content-Type": "application/json", pesquisa: pesquisa },
    })
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        } else {
          throw new Error("falha na requisição");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const gerenciadorCursos = async () => {
    const response = await buscarCursos();
    setCursos(response);
    setCarregando(false);
  };

  const recuperaMateria = async () => {
    const materia = await AsyncStorage.getItem("materia");
    if (typeof materia === "string") {
      setPesquisa(materia);
    }
  };

  const navegaCurso = (curso: tipoCurso) => {
    navigation.navigate("Course", curso);
  };

  useEffect(() => {
    const telaSelecionada = navigation.addListener("focus", () => {
      recuperaMateria();
      gerenciadorCursos();
    });
    return telaSelecionada;
  }, []);

  useEffect(() => {
    gerenciadorCursos();
  }, [pesquisa]);

  return (
    <View style={searchStyles.layout}>
      <View>
        <TextInput
          style={[
            formStyle.input,
            { borderStyle: "solid", borderWidth: 1, borderColor: "#000" },
          ]}
          placeholder=" pesquise um curso, professor ou matéria"
          onChangeText={setPesquisa}
          value={pesquisa}
        />
      </View>
      <ScrollView contentContainerStyle={searchStyles.scroll}>
        {carregando ? (
          <Text>Aguarde</Text>
        ) : (
          cursos.map((curso: tipoCurso, index: number) => {
            const { nome_curso, materia, preco, avaliacao_geral } = curso;
            return (
              <TouchableOpacity
                style={searchStyles.scrollItem}
                key={index}
                onPress={() => {
                  navegaCurso(curso);
                }}
              >
                <View>
                  <Text style={searchStyles.titulo}>{nome_curso}</Text>
                  <Text style={searchStyles.texto}>{materia}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    alignSelf: "flex-end",
                  }}
                >
                  <Text style={searchStyles.titulo}>
                    R$:{`${preco.toFixed(2)} `.replace(".", ",")}
                  </Text>
                  <StarRatingDisplay
                    rating={avaliacao_geral}
                    color="#0B0635"
                    starSize={16}
                    style={{ gap: -10 }}
                  />
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
