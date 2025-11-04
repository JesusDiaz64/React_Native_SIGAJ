import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Styles from "../styles/consulta.style";

export default function TablaArchivos({ data = [] }) {
  return (
    <View style={Styles.container_tabla}>
      <View style={Styles.header_tabla}>
        <Text style={[Styles.tabla_header_text, { flex: 1 }]}>ID</Text>
        <Text style={[Styles.tabla_header_text, { flex: 2 }]}>
          Nombre Archivo
        </Text>
        <Text style={[Styles.tabla_header_text, { flex: 2 }]}>
          Nombre Usuario
        </Text>
        <Text style={[Styles.tabla_header_text, { flex: 1 }]}>Acciones</Text>
      </View>

      <ScrollView style={Styles.body_tabla}>
        {data.map((item, index) => (
          <View key={index} style={Styles.fila_tabla}>
            <Text style={[Styles.text_tabla, { flex: 1 }]}>{item.id}</Text>
            <Text style={[Styles.text_tabla, { flex: 2 }]}>{item.nombre}</Text>
            <Text style={[Styles.text_tabla, { flex: 2 }]}>{item.usuario}</Text>

            <View style={[Styles.acciones_tabla, { flex: 1 }]}>
              <TouchableOpacity
                onPress={() => console.log("Compartir", item.id)}
              >
                <MaterialIcons name="share" size={22} color="#27646B" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Descargar", item.id)}
              >
                <MaterialIcons name="file-download" size={22} color="#27646B" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Abrir", item.id)}>
                <MaterialIcons name="open-in-new" size={22} color="#27646B" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
