import { Container3, ContainerTextPatient2 } from "../Container/Style";
import { ImageDoctor } from "../Logo/Style";
import { TextPatient, TextPatient3 } from "../Text/Text";

export const ApointmentSelectDoctor = ({
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
      <ImageDoctor source={require("../../assets/imagemDoctor1.png")} />
      <ContainerTextPatient2>
        <TextPatient3>Dr. Dra Alessandra</TextPatient3>
        <TextPatient>Demartologa, Esteticista</TextPatient>
      </ContainerTextPatient2>
    </Container3>
  );
};
