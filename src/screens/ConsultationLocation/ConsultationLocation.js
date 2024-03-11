import { StyleSheet, View } from "react-native";

import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync, // solicita o acesso a localização
  getCurrentPositionAsync, // recebe a localização atual
} from "expo-location";
import { useEffect, useState } from "react";

import {
  Container,
  ContainerLocation2,
  ContainerLocation3,
  ContainerLocationText,
  ContainerTextLocation,
  ContainerTextLocation2,
  TextConsultationLocation,
  TextConsultationLocation2,
  TextLocationInput,
} from "./style";
import { ContainerInputs } from "../../components/Container/Style";
import { TextRecordPaciente2 } from "../../components/Text/Text";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { LinkAccount } from "../../components/Links/Links";

export const ConsultationLocation = ({ navigation }) => {
  const [initialPosition, setinitialPosition] = useState(null);

  async function CapiturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const captureLocation = await getCurrentPositionAsync();

      setinitialPosition(captureLocation);
    }
  }

  useEffect(() => {
    CapiturarLocalizacao();
  }, []);

  //Chamar a função PatientConsultations
  async function PatientConsultations() {
    navigation.replace("PatientConsultations");
  }

  return (
    <Container>
      <View style={styles.container}>
        <MapView
          style={{ width: "100%", height: 330 }}
          initialRegion={{
            latitude: -23.669567,
            longitude: -46.531028,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -23.669567, // Latitude do Senai de São Caetano do Sul
              longitude: -46.531028, // Longitude do Senai de São Caetano do Sul
            }}
            title="Hospital e maternidade Brasil"
            description=" R. Pôrto Alegre, 480 - Vila Assunção, Santo André - SP, 09030-610"
          />
        </MapView>
      </View>
      <ContainerLocationText>
        <TextConsultationLocation>Clínica Natureh</TextConsultationLocation>
        <TextConsultationLocation2>São Paulo, SP</TextConsultationLocation2>
      </ContainerLocationText>
      <ContainerInputs>
        <TextLocationInput>Endereço</TextLocationInput>

        <ContainerTextLocation>
          <TextRecordPaciente2></TextRecordPaciente2>
        </ContainerTextLocation>
        <ContainerLocation2>
          <ContainerLocation3>
            <TextLocationInput>Número</TextLocationInput>

            <ContainerTextLocation2>
              <TextRecordPaciente2></TextRecordPaciente2>
            </ContainerTextLocation2>
          </ContainerLocation3>

          <ContainerLocation3>
            <TextLocationInput>Bairro</TextLocationInput>

            <ContainerTextLocation2
              onPress={() => NavigationPreloadManager.replace("Main")}
            >
              <TextRecordPaciente2>Voltar</TextRecordPaciente2>
            </ContainerTextLocation2>
          </ContainerLocation3>
        </ContainerLocation2>
      </ContainerInputs>
      <ContentAccount>
        <LinkAccount onPress={() => PatientConsultations()}>Voltar</LinkAccount>
      </ContentAccount>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
