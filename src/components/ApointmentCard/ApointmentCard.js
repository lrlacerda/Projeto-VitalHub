import styled from "styled-components";
import {
  Container3,
  Container4,
  Container5,
  ContainerTextPatient2,
} from "../Container/Style";
import { ImageDoctor } from "../Logo/Style";
import {
  TextButtonCard,
  TextHora,
  TextPatient,
  TextPatient3,
} from "../Text/Text";

//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonCard } from "../Button/style";

export const ApointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    <Container3>
      <ImageDoctor source={require("../../assets/imagemPaciente.png")} />

      <ContainerTextPatient2>
        <TextPatient3>Richard Kosta</TextPatient3>
        <TextPatient>28 anos . Cardiologia</TextPatient>
        <Container5>
          <Container4 situacao={situacao}>
            <MaterialCommunityIcons name="clock" size={18} color="#49B3BA" />
            <TextHora situacao={situacao} color={"#49B3BA"}>
              14:00
            </TextHora>
          </Container4>
          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <TextButtonCard situacao={situacao}>Cancelar</TextButtonCard>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={onPressAppointment}>
              <TextButtonCard situacao={situacao}>Ver Prontuário</TextButtonCard>
            </ButtonCard>
          )}
        </Container5>
      </ContainerTextPatient2>
    </Container3>
  );
};
