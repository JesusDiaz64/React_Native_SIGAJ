import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import Styles from "../styles/consulta.style";

import Header from "../components/Header_Users";

import Input from "../components/input_busqueda";

import Options from "../components/options";

import TablaArchivos from "../components/tabla_archivos";

export default function Consulta() {
  const opcionesTiempo = [
    "Más recientes",
    "Más antiguos",
    "Últimas 24 horas",
    "Última semana",
    "Último mes",
  ];

  const archivos = [
    { id: "001", nombre: "Reporte_juicio", usuario: "Juan Perez" },
    { id: "002", nombre: "Fecha_Juicio", usuario: "Pedro Rodriguez" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
    { id: "003", nombre: "Citatorio", usuario: "Roberto Diaz" },
  ];

  const orden = ["Orden alfabeto (a-z)", "Orden alfabeto (z-a)"];

  return (
    <View style={Styles.container}>
      <Header nombre="Jesus David" apellidoP="Diaz Cabrales" aviso="Consulta"/> 
      {/*BORRAR LINEA 45 DE EJEMPLO */}
      <View style={Styles.container_busqueda}>
        <Input title="Buscar por ID, nombre o fecha" />
      </View>
      <View style={Styles.container_options}>
        <Options options={orden} />
      </View>
      <View style={Styles.container_options}>
        <Options options={opcionesTiempo} />
      </View>
      <View style={Styles.container_button_principal}>
        <TouchableOpacity style={Styles.container_button}>
          <Text style={Styles.button}>Consultar</Text>
        </TouchableOpacity>
      </View>
      <TablaArchivos data={archivos} />
    </View>
  );
}
