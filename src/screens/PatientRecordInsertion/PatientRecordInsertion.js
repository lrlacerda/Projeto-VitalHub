import { Container } from "../../components/Container/Style";
import { ImageRecordInsertion } from "../../components/Logo/Style";
import { TextRecordPaciente } from "../../components/Text/Text";
import { TitleRecordInsertion } from "../../components/Title/Style";

export const PatientRecordInsertion = () => {
    return (
        <Container>
            <ImageRecordInsertion
                source={require("../../assets/imgLucas.jpg")}
            />

            <TitleRecordInsertion>Lucas Lacerda</TitleRecordInsertion>

            <TextRecordPaciente>
                36 anos lribeirolacerda@gmail.com
            </TextRecordPaciente>
        </Container>
    );
};
