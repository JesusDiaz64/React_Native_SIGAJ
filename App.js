import LoginScreen from "./screens/login";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/registro/register";
import Register2Screen from "./screens/registro/register2";
import Register3Screen from "./screens/registro/register3";
import ScreenConsulta from "./screens/consulta";
import Mensajeria from "./screens/menu_desplegable/mensajeria";
import ListaMensajes from "./screens/lista_mensajes/mensajes";

const stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />

        <stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown:false}}
        />

        <stack.Screen
          name="Register2"
          component={Register2Screen}
          options={{ headerShown:false}}
        />

        <stack.Screen
          name="Register3"
          component={Register3Screen}
          options={{ headerShown:false}}
        />
        <stack.Screen
          name="Consulta"
          component={ScreenConsulta}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Mensajeria"
          component={Mensajeria}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ListaMensajes"
          component={ListaMensajes}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

