import { useState } from "react";
import {
  Button2,
  Button3,
  Button4,
  ButtonTabsStyle,
  ButtonTitle2,
  ButtonTitle3,
  TextButton,
} from "../../components/Button/style";
import CalendarList from "../../components/CalendarStrip/CalendarList";
import {
  Container,
  Container2,
  Container3,
  Container4,
  Container5,
  ContainerHeader,
  ContainerIconPatient,
  ContainerImageTextPatient,
  ContainerTextPatient,
  ContainerTextPatient2,
} from "../../components/Container/Style";
import { LinkRecordInsertion2 } from "../../components/Links/Links";
import { ImageDoctor, ImagePatient } from "../../components/Logo/Style";
import {
  TextHora,
  TextPatient,
  TextPatient2,
  TextPatient3,
} from "../../components/Text/Text";

//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

export const PatientConsultations = () => {

  const [statusLista, setStatusLista] = useState("pendente");

  return (
      <Container>
          <ContainerHeader>
              <ContainerImageTextPatient>
                  <ImagePatient
                      source={require("../../assets/imagemPaciente.png")}
                  />

                  <ContainerTextPatient>
                      <TextPatient>Bem vindo</TextPatient>
                      <TextPatient2>Richard Kosta</TextPatient2>
                  </ContainerTextPatient>

                  <ContainerIconPatient>
                      <MaterialCommunityIcons
                          name="bell"
                          size={30}
                          color="#FFFFFF"
                      />
                  </ContainerIconPatient>
              </ContainerImageTextPatient>
          </ContainerHeader>

          <CalendarList />

          <Container2>
              <ButtonTabsStyle
                  textButton={"Pendente"}
                  clickButton={statusLista === "Pendente"}
                  onPress={() => {
                      setStatusLista("Pendente");
                  }}
              >
                  <TextButton>Agendadas</TextButton>
              </ButtonTabsStyle>

              <ButtonTabsStyle
                  textButton={"Realizadas"}
                  clickButton={statusLista === "Realizado"}
                  onPress={() => {
                      setStatusLista("Realizado");
                  }}
              >
                  <TextButton>Realizadas</TextButton>
              </ButtonTabsStyle>

              <ButtonTabsStyle
                  textButton={"Canceladas"}
                  clickButton={statusLista === "Cancelado"}
                  onPress={() => {
                      setStatusLista("Cancelado");
                  }}
              >
                  <TextButton>Canceladas</TextButton>
              </ButtonTabsStyle>
          </Container2>

          <Container3>
              <ImageDoctor source={require("../../assets/imgLucas.jpg")} />
              <ContainerTextPatient2>
                  <TextPatient3>Lucas Lacerda</TextPatient3>
                  <TextPatient>38 anos . Cardiologista</TextPatient>
                  <Container5>
                      <Container4>
                          <MaterialCommunityIcons
                              name="clock"
                              size={18}
                              color="#49B3BA"
                          />
                          <TextHora>14:00</TextHora>
                      </Container4>
                      <LinkRecordInsertion2>Cancelar</LinkRecordInsertion2>
                  </Container5>
              </ContainerTextPatient2>
          </Container3>
          <Button4>
              <FontAwesome5 name="stethoscope" size={32} color="#FBFBFB" />
          </Button4>
      </Container>
  );
};
