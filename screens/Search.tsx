import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import formStyle from "../styles/formStyles";
import searchStyles from "../styles/searchStyles";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Search = (props: Props) => {
  const navigation = useNavigation();
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const buscarCursos = async () => {
    return await fetch("http://127.0.0.1:3333/cursos")
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
    console.log(materia);
  };

  useEffect(() => {
    const telaSelecionada = navigation.addListener("focus", () => {
      gerenciadorCursos();
      recuperaMateria();
    });
    return telaSelecionada;
  }, []);
  return (
    <View style={searchStyles.layout}>
      <View>
        <TextInput
          style={[
            formStyle.input,
            { borderStyle: "solid", borderWidth: 1, borderColor: "#000" },
          ]}
          placeholder=" pesquise um curso, professor ou matéria"
        />
      </View>
      <ScrollView contentContainerStyle={searchStyles.scroll}>
        {carregando ? (
          <Text>Aguarde</Text>
        ) : (
          cursos.map((curso, index) => {
            const { nome_curso, materia, preco, avaliacao_geral } = curso;
            return (
              <View style={searchStyles.scrollItem} key={index}>
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
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
