import React, { useState } from "react";

import { Text, View, Alert, TouchableOpacity } from "react-native";

import Headers from "../components/header";

import styles from "../styles/screen_style";

import Input from "../components/inputs";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFinish = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
      return;
    }

    Alert.alert("Ingresando Correctamente");
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <View>
          <Text style={styles.header}>Consulta, Nombre y Apellido</Text>
        </View>

        <Input
          value={username}
          onChangeText={setUsername}
          title="Nombre de Usuario"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          title="Contraseña"
        />
        <View style={styles.contenedor_contrasena}>
          <Text
            style={styles.texto_olvido}
            onPress={() => Alert.alert("Olvidaste tu contrasena.")}
          >
            ¿Olvidaste tu contraseña?
          </Text>
        </View>

        <TouchableOpacity style={styles.boton_ingresar} onPress={handleFinish}>
          <Text style={styles.texto_boton}>Ingresar</Text>
        </TouchableOpacity>

        <View style={styles.nuevo_usuario}>
          <Text>¿Usuario Nuevo?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.boton_registrarse}> Registrate aqui!</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text onPress={() => navigation.navigate("Consulta")}>
            Pulsa Aqui para consulta
          </Text>
        </View>
      </View>
    </View>
  );
}
