import React, { useState } from "react";

import { Text, View, TouchableOpacity } from "react-native";

import Headers from "../components/header";

import styles from "../styles/login_style";

import Input from "../components/inputs";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <Headers titulo="Inicio de Sesión" />

        <Input title="Nombre de Usuario" />

        <Input title="Contraseña" />
        <View style={styles.contenedor_contrasena}>
          <Text style={styles.texto_olvido}>¿Olvidaste tu contraseña?</Text>
        </View>

        <TouchableOpacity style={styles.boton_ingresar}>
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
