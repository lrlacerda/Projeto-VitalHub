import {
  CalendarContainer,
  Container,
  ContainerHeader,
  ContainerIconPatient,
  ContainerImageTextPatient,
  ContainerTextPatient,
} from "../../components/Container/Style";
import {
  ImagePatient,
  ImagePatientConsultations,
} from "../../components/Logo/Style";
import { TextPatient, TextPatient2 } from "../../components/Text/Text";

//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const PatientConsultations = () => {

  return (
    <Container>
      <ContainerHeader>
        <ImagePatientConsultations
          source={require("../../assets/Rectangle.png")}
        />
        <ContainerImageTextPatient>
          <ImagePatient source={require("../../assets/imgLucas.jpg")} />

          <ContainerTextPatient>
            <TextPatient>Bem vindo</TextPatient>
            <TextPatient2>Lucas Lacerda</TextPatient2>
          </ContainerTextPatient>

          <ContainerIconPatient>
            <MaterialCommunityIcons name="bell" size={30} color="#FFFFFF" />
          </ContainerIconPatient>
        </ContainerImageTextPatient>
      </ContainerHeader>
      <CalendarContainer>
        
      </CalendarContainer>
    </Container>
  );
};
