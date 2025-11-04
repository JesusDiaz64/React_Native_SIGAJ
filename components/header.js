import { Text, View, Image } from "react-native";

import styles from "../styles/login_style";

export default function Headers({ titulo = "" }) {
  return (
    <View>
      <View>
        <Text style={styles.header}>{titulo}</Text>
      </View>

      <View>
        <Image
          source={require("../assets/img/logo.png")}
          alt="Logo Poder Judicial de Baja California"
          style={styles.logo}
        />
      </View>
    </View>
  );
}
