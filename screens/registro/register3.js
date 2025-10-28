import { View, Text, TouchableOpacity, Alert } from "react-native";
import Headers from "../../components/header";
import styles from "../../styles/login_style";
import Input from "../../components/inputs";
import React, { useState} from "react";


export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleFinish = () => {
    if (!username.trim() || !password.trim() || !confirm.trim()) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
      return;
    }

    if (password !== confirm) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    Alert.alert("Cuenta creada", "Tu cuenta ha sido registrada exitosamente.", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <Headers titulo="Registrar Usuario" />

        <Input
          title="Nombre de Usuario"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          title="Ingrese la Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Input
          title="Verifique la Contraseña"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.boton_ingresar} onPress={handleFinish}>
          <Text style={styles.texto_boton}>Finalizar</Text>
        </TouchableOpacity>

        <View style={styles.nuevo_usuario}>
          <Text>¿Ya tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.boton_registrarse}> Ingresa aqui!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
