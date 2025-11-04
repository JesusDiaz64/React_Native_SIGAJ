import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#07394A",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d7e5e5",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  mensajeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nombre: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  subtexto: {
    color: "gray",
    fontSize: 14,
  },
  hora: {
    fontSize: 13,
    color: "gray",
    marginLeft: 5,
  },
  puntoRojo: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },

  avisoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  avisoTexto: {
    fontSize: 15,
    marginLeft: 6,
    color: "#000",
  },
});
