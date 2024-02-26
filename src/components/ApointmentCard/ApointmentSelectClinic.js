import {
  Container3,
  Container4,
  ContainerIcon2,
  ContainerSelectClinicIcon,
  ContainerSelectClinicText,
  ContainerTextPatient2,
  ContainerTextPatient3,
} from "../Container/Style";
import { TextHora, TextIcon, TextPatient, TextPatient3 } from "../Text/Text";

//icon
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ApointmentSelectClinic = ({
  isFirst,
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    <Container3
      style={{
        borderColor: isFirst ? "#496BBA" : "transparent",
        borderWidth: 2,
        borderRadius: 5,
      }}
    >
      <ContainerTextPatient2>

        <ContainerTextPatient3>
          <TextPatient3>Clínica Natureh</TextPatient3>
          <TextPatient>São Paulo, SP</TextPatient>
        </ContainerTextPatient3>

        <ContainerSelectClinicIcon>

          <ContainerIcon2>
            <AntDesign name="star" size={24} color="#F9A620" />
            <TextIcon>4,5</TextIcon>
          </ContainerIcon2>

          <Container4>
            <MaterialCommunityIcons name="calendar" size={24} color="#49B3BA" />
            <TextHora>Seg-Sex</TextHora>
          </Container4>

        </ContainerSelectClinicIcon>

      </ContainerTextPatient2>

    </Container3>
  );
};
