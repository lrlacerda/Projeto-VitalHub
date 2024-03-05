//Import o recurso Botton Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PatientConsultations } from "../PatientConsultations/PatientConsultations";
import { Login } from "../Login/Login";

import {FontAwesome, FontAwesome5} from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
    //Definir rota Inicial
    initialRouteName="PatientConsultations"

    screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: "#FFFFFF", height: 80, paddingTop: 10},
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({focused}) => {
            if (route.name === "PatientConsultations") {
                return (
                    <></>
                )
            }
            else {

            }
        }
    })}
    >
      {/* //Criar a rota Home */}
      <BottomTab.Screen 
      name="Login" 
      component={Login} />

      <BottomTab.Screen
        name="PatientConsultations"
        component={PatientConsultations}
      />
      {/* //Criar rota Perfil */}
     
    </BottomTab.Navigator>
  );
};
