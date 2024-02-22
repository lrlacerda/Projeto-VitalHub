import { useState } from "react";

import {
  Container,
  Container2,
  ContainerHeader,
  ContainerIconPatient2,
  ContainerImageTextPatient,
  ContainerTextPatient,
} from "../../components/Container/Style";
import { TextPatient, TextPatient2 } from "../../components/Text/Text";
import CalendarList from "../../components/CalendarStrip/CalendarList";
import {
  Button4,
  ButtonTabsStyle,
  TextButton,
} from "../../components/Button/style";
import { ListComponent } from "../../components/List/List";
import CancelationModal from "../../components/CancelationModal/CancelationModal";
import InsertMedicalRecordModal from "../../components/InsertMedicalRecordModal/InsertMedicalRecordModal";
import { ImagePatient } from "../../components/Logo/Style";
import { ApointmentCardDoctor } from "../../components/ApointmentCard/ApointmentCardDoctor";

//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Consultas = [
  { id: 1, nome: "Lucas Lacerda", situacao: "pendente" },
  { id: 2, nome: "Uiara Ambrosio", situacao: "cancelado" },
  { id: 3, nome: "Silvia Ribeiro", situacao: "realizado" },
  { id: 4, nome: "Tadeu LACERDA", situacao: "pendente" },
];

export const PatientConsultations = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  //states para os Modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

  return (
    <Container>
      <ContainerHeader>
        <ContainerImageTextPatient>
          <ImagePatient source={require("../../assets/imagemPaciente.png")} />

          <ContainerTextPatient>
            <TextPatient>Bem vindo</TextPatient>
            <TextPatient2>Richard Kosta</TextPatient2>
          </ContainerTextPatient>

          <ContainerIconPatient2>
            <MaterialCommunityIcons name="bell" size={30} color="#FFFFFF" />
          </ContainerIconPatient2>
        </ContainerImageTextPatient>
      </ContainerHeader>

      <CalendarList />

      <Container2>
        <ButtonTabsStyle
          textButton={"pendente"}
          clickButton={statusLista === "pendente"}
          onPress={() => {
            setStatusLista("pendente");
          }}
        >
          <TextButton clickButton={statusLista === "pendente"}>
            Agendadas
          </TextButton>
        </ButtonTabsStyle>

        <ButtonTabsStyle
          textButton={"realizado"}
          clickButton={statusLista === "realizado"}
          onPress={() => {
            setStatusLista("realizado");
          }}
        >
          <TextButton clickButton={statusLista === "realizado"}>
            Realizadas
          </TextButton>
        </ButtonTabsStyle>

        <ButtonTabsStyle
          textButton={"cancelado"}
          clickButton={statusLista === "cancelado"}
          onPress={() => {
            setStatusLista("cancelado");
          }}
        >
          <TextButton clickButton={statusLista === "cancelado"}>
            Canceladas
          </TextButton>
        </ButtonTabsStyle>
      </Container2>

      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <ApointmentCardDoctor
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointment={() => setShowModalAppointment(true)}
            />
          )
        }
      />

      <CancelationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      <InsertMedicalRecordModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />

      <Button4>
        <FontAwesome5 name="stethoscope" size={32} color="#FBFBFB" />
      </Button4>
    </Container>
  );
};
