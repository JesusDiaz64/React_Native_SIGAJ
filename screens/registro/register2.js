import { View, Text, TouchableOpacity, Alert } from "react-native";
import Headers from "../../components/header";
import styles from "../../styles/login_style";
import Input from "../../components/inputs";
import InputConsulta from "../../components/input_consulta";
import React, { useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [curp, setCurp] = useState("");
  const [rfc, setRfc] = useState("");
  const [num, setNum] = useState("");
  const [dep, setDep] = useState("");

  const handleFinish = () => {
    if (!curp.trim() || !rfc.trim() || !num.trim() || !dep.trim()) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
      return;
    }

    navigation.navigate("Register3");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <Headers titulo="Registrar Usuario" />

        <Input value={curp} onChangeText={setCurp} title="CURP" />
        <Input value={rfc} onChangeText={setRfc} title="RFC" />
        <Input value={num}
          onChangeText={text => setNum(text.replace(/[^0-9]/g, ""))} keyboardType="numeric" title="Numero de Telefono" />
        <Input value={dep} onChangeText={setDep} title="Departamento" />

        <InputConsulta title="Consulta" options={["Consulta"]} />

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