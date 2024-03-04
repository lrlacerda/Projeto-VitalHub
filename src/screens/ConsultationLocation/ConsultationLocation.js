import { StyleSheet, View } from "react-native";

import MapView, { Marker } from "react-native-maps";
import { Container, ContainerLocation2, ContainerLocation3, ContainerLocationText, ContainerTextLocation, ContainerTextLocation2, TextConsultationLocation, TextConsultationLocation2, TextLocationInput } from "./style";
import { ContainerInputs, ContainerText, ContainerText2 } from "../../components/Container/Style";
import { TextRecordPaciente2 } from "../../components/Text/Text";


export const ConsultationLocation = () => {
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

            <ContainerTextLocation2>
              <TextRecordPaciente2></TextRecordPaciente2>
            </ContainerTextLocation2>
          </ContainerLocation3>
        </ContainerLocation2>
      </ContainerInputs>
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
