import { View, TextInput } from "react-native";
import Styles from "../styles/consulta.style";

export default function Input_Busqueda({ title = "" }) {
  return (
    <View style={Styles.container_inputs}>
      <TextInput
        style={Styles.container_textInput}
        placeholder={title}
      ></TextInput>
    </View>
  );
}
