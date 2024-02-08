import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import { ForgotPassword } from "./src/screens/ForgotPassword/ForgotPassword";

//instancia do stackNavigator
const Stack = createNativeStackNavigator();

//import das fonts
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

import { Quicksand_500Medium } from "@expo-google-fonts/quicksand";
import { EmailCode } from "./src/screens/EmailCode/EmailCode";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navegação
    //Container
    //StackNavigator
    //StackScreen

    //envolve a estrutura da navegação
    <NavigationContainer>
      {/* //componente de navegação */}
      <Stack.Navigator>
        {/* Tela */}
        <Stack.Screen
          //nome da tela
          name="Navegacao"
          //componente que sera chamado
          component={Navegacao}
          //titulo da tela
          options={{ title: "Navegacao" }}
        />
        <Stack.Screen
          //nome da tela
          name="Login"
          //componente que sera chamado
          component={Login}
          //titulo da tela
          options={{ title: "Login" }}
        />
        <Stack.Screen
          //nome da tela
          name="ForgotPassword"
          //componente que sera chamado
          component={ForgotPassword}
          //titulo da tela
          options={{ Title: "ForgotPassword" }}
        />
        <Stack.Screen
          //nome da tela
          name="EmailCode"
          //componente que sera chamado
          component={EmailCode}
          //titulo da tela
          options={{ Title: "EmailCode" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
