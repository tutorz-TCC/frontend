import React from "react";
import { useState } from "react";
import {
  Image,
  TextInput,
  View,
  TextInputProps,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import formStyle from "../../styles/formStyles";

interface ToggleTextInputProps extends TextInputProps {
  iconSource: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
  placeholder?: string;
}

const ToggleTextInput: React.FC<ToggleTextInputProps> = ({
  iconSource,
  placeholder,
}) => {
  const [seguranca, setSeguranca] = useState(true);
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextInput
        placeholder={placeholder}
        secureTextEntry={seguranca}
        style={[
          formStyle.input,
          {
            flex: 9,

            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          },
        ]}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setSeguranca(!seguranca)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#FFFFFF",

            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Image
            source={seguranca ? iconSource.active : iconSource.inactive}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleTextInput;
