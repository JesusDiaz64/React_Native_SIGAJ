import { View, Text, Image } from "react-native";
import styles from "../styles/screen_style";

export default function Header_User() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image_barra}
        source={require("../assets/img/menu.png")}
      />
      <Text style={styles.title}>Consulta, Nombre y Apellido</Text>
    </View>
  );
}
