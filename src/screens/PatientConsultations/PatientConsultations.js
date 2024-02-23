import { useState } from "react";

import {
  Container,
  Container2,
  Container6,
  Container8,
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
  ButtonTabsStyle2,
  TextButton,
  TextButton2,
} from "../../components/Button/style";
import { ListComponent } from "../../components/List/List";
import CancelationModal from "../../components/CancelationModal/CancelationModal";
import InsertMedicalRecordModal from "../../components/InsertMedicalRecordModal/InsertMedicalRecordModal";
import { ImagePatient } from "../../components/Logo/Style";
import { ApointmentCardDoctor } from "../../components/ApointmentCard/ApointmentCardDoctor";

//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import ScheduleConsultationModal from "../../components/ScheduleConsultationModal/ScheduleConsultationModal";

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
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const [activeIcon, setActiveIcon] = useState("agenda"); // Estado para armazenar o ícone ativo

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

      <Button4 onPress={() => setShowScheduleModal(true)}>
        <FontAwesome5 name="stethoscope" size={32} color="#FBFBFB" />
      </Button4>

      <ScheduleConsultationModal
        visible={showScheduleModal}
        setScheduleConsultation={setShowScheduleModal}
      />

      <Container8>
        <ButtonTabsStyle2
          textButton={"Agenda"}
          clickButton={statusLista === "Agenda"}
          onPress={() => {
            setStatusLista("Agenda");
            setActiveIcon("Agenda");
          }}
        >
          <MaterialCommunityIcons
            name="notebook"
            size={24}
            color={activeIcon === "Agenda" ? "#607ec5" : "#4E4B59"} // Cor condicional
          />

          <TextButton2 clickButton={statusLista === "Agenda"}>
            Agenda
          </TextButton2>
        </ButtonTabsStyle2>

        <ButtonTabsStyle2
          textButton={"Perfil"}
          clickButton={statusLista === "Perfil"}
          onPress={() => {
            setStatusLista("Perfil");
            setActiveIcon("Perfil");
          }}
        >
          <Ionicons
            name="person-circle-outline"
            size={30}
            color={activeIcon === "Perfil" ? "#607ec5" : "#4E4B59"}
          />
          <TextButton2 clickButton={statusLista === "Perfil"}>
            Perfil
          </TextButton2>
        </ButtonTabsStyle2>
      </Container8>
    </Container>
  );
};
