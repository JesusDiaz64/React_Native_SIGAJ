import { View, TextInput } from "react-native";
import Styles from "../styles/consulta.style";

export default function Input_descripcion({ title = "" }) {
  return (
    <View style={Styles.container_descripcion}>
      <TextInput
        style={Styles.container_textDescripcion}
        multiline
        numberOfLines={10}
        placeholder={title}
      ></TextInput>
    </View>
  );
}