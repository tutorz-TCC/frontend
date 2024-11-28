import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SearchStackParamList } from "../app-flow/SearchStack";
import { RouteProp } from "@react-navigation/native";
import courseStyles from "../styles/courseStyles";

type tipoModulo = {
  _id: string;
  nome: string;
  duracao_estimada: number;
  descricao: string;
};

type tipoCurso = {
  _id: string;
  nome_curso: string;
  avaliacao_geral: number;
  descricao: string;
  preco: number;
  materia: string;
  modulos: Array<tipoModulo>;
};

type CourseNavType = RouteProp<SearchStackParamList, "Course">;

type Props = {
  route: CourseNavType;
};

const Course: React.FC<Props> = ({ route }) => {
  const { nome_curso, descricao, modulos, avaliacao_geral } = route.params;
  const [selectedModules, setSelectedModules] = useState<boolean>(false);
  const dropDown = require("../assets/source-images/utils/chevron-down.png");
  const togleUp = require("../assets/source-images/utils/chevron-up.png");
  const carrinho = require("../assets/source-images/utils/Carrinho.png");
  return (
    <View style={courseStyles.layout}>
      <View
        style={[
          courseStyles.cabecalho,
          {
            borderBottomLeftRadius: selectedModules ? 0 : 10,
            borderBottomRightRadius: selectedModules ? 0 : 10,
          },
        ]}
      >
        <Text style={[courseStyles.texto, { fontSize: 28 }]}>{nome_curso}</Text>
        <Text
          style={[courseStyles.texto, { paddingLeft: 15, paddingRight: 10 }]}
        >
          {descricao}
        </Text>
        <View
          style={[
            courseStyles.scrollItemTitleContainer,
            {
              borderBottomLeftRadius: selectedModules ? 0 : 9,
              borderBottomRightRadius: selectedModules ? 0 : 9,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text style={{ color: "#FFF", fontSize: 18 }}>exibir módulos</Text>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedModules(!selectedModules);
            }}
          >
            <Image source={selectedModules ? togleUp : dropDown} />
          </TouchableOpacity>
        </View>
      </View>
      {selectedModules ? (
        <ScrollView style={courseStyles.scroll}>
          {modulos.map((modulo, index) => (
            <View key={index} style={courseStyles.scrollItem}>
              <View style={courseStyles.scrollItemTitleContainer}>
                <Text style={courseStyles.scrollItemTitle}>
                  {modulo._id}-{modulo.nome}
                </Text>
              </View>
              <View>
                <Text>Video Chamada</Text>
                <Text style={courseStyles.texto}>
                  {modulo.duracao_estimada} minutos
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : null}
      <View style={[courseStyles.buyingView, {position:"absolute", bottom:10, gap: 5}]}>
        <TouchableOpacity
          style={{
		  height:35,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#0B0635",
          }}
        >
          <Text>COMPRAR AGORA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Course;
export type { tipoCurso };
