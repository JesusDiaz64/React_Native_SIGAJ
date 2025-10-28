import { View, Text, TouchableOpacity, Alert } from "react-native";
import Headers from "../../components/header";
import styles from "../../styles/login_style";
import Input from "../../components/inputs";
import React, { useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [email, setEmail] = useState("");

  const handleFinish = () => {
    if (!username.trim() || !paterno.trim() || !materno.trim() || !email.trim()) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
      return;
    }
    navigation.navigate("Register2");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <Headers titulo="Registrar Usuario" />

        <Input
          value={username}
          onChangeText={setUsername}
          title="Nombre Completo"
        />
        <Input
          value={paterno}
          onChangeText={setPaterno}
          title="Apellido Paterno"
        />
        <Input
          value={materno}
          onChangeText={setMaterno}
          title="Apellido Materno"
        />
        <Input
          value={email}
          onChangeText={setEmail}
          title="Correo Electronico (oficial)"
        />

        <TouchableOpacity
          style={styles.boton_ingresar}
          onPress={handleFinish}
        >
          <Text style={styles.texto_boton}>Siguiente</Text>
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
