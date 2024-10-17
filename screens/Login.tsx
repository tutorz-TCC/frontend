import React, { useEffect } from "react";
import { useState } from "react";
import ToggleTextInput from "../assets/form-utils/ToggleTextInput";
import {
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";

import defaultStyles from "../styles/defaultStyles";
import formStyle from "../styles/formStyles";

const Login = () => {
  const [teclado, setTeclado] = useState<boolean>(false);
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
    <View
      onTouchStart={Keyboard.dismiss}
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={[
          defaultStyles.forma_oval,
          defaultStyles.azul_noturno,
          {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: "50%",
            height: useWindowDimensions().width / 1.5,
            top: "-10%",
          },
        ]}
      ></View>
      <View
        style={[
          defaultStyles.forma_oval,
          defaultStyles.azul_celeste,
          {
            width: "50%",
            height: useWindowDimensions().width / 2,
            right: 0,
            top: "9%",
          },
        ]}
      ></View>
      <View
        style={[
          defaultStyles.forma_oval,
          defaultStyles.azul_marinho,
          {
            width: "50%",
            height: useWindowDimensions().width / 2,
            left: 0,
            top: "5%",
          },
        ]}
      ></View>
      <View
        style={[
          defaultStyles.forma_oval,
          defaultStyles.azul_real,
          {
            width: "50%",
            height: useWindowDimensions().width / 2,
            right: 0,
            top: "2%",
          },
        ]}
      ></View>
      <View
        style={[
          defaultStyles.azul_noturno,
          {
            width: "90%",
            display: "flex",
            gap: 15,
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
        <Text style={defaultStyles.fonte_invertida}>Login</Text>
        <TextInput
          autoComplete="email"
          placeholder="Por favor, insira seu e-mail"
          placeholderTextColor="#777"
          style={formStyle.input}
        />
        <Text style={defaultStyles.fonte_invertida}>Senha</Text>
        <ToggleTextInput
          autoComplete="password"
          iconSource={olho}
          placeholder="Por favor, insira sua senha"
        ></ToggleTextInput>
        <TouchableOpacity style={formStyle.submit_button}>
          <Text style={defaultStyles.fonte_titulo_estilizado}>Entrar</Text>
        </TouchableOpacity>
        {!teclado && (
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
            Clique aqui para realizar o cadastro
          </Text>
        )}
      </View>
    </View>
  );
};

export default Login;
