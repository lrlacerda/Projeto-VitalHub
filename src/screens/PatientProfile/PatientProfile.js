import {
    Container,
    ContainerInputs,
    ContainerRecordInsertion,
    ContainerText3,
} from "../../components/Container/Style";
import { ImageRecordInsertion } from "../../components/Logo/Style";
import { TitleRecordInsertion2 } from "../../components/Title/Style";
import {
    TextRecordInsertion,
    TextRecordPaciente,
} from "../../components/Text/Text";
import {
    InputRecordInsertion,
    InputRecordInsertion2,
} from "../../components/Input/Input";
import {
    ButtonRecordInsertion,
    ButtonTitle,
} from "../../components/Button/style";

export const PatientProfile = () => {
    return (
        <Container>
            <ContainerRecordInsertion>
                <ImageRecordInsertion
                    source={require("../../assets/imagemPaciente.png")}
                />

                <ContainerText3>
                    <TitleRecordInsertion2>Richard Kosta</TitleRecordInsertion2>

                    <TextRecordPaciente>
                        richard.kosta@gmail.com
                    </TextRecordPaciente>
                </ContainerText3>

                <ContainerInputs>
                    <TextRecordInsertion>
                        Descrição da consulta
                    </TextRecordInsertion>

                    <InputRecordInsertion placeholder="Descrição" />

                    <TextRecordInsertion>
                        Diagnóstico do paciente
                    </TextRecordInsertion>

                    <InputRecordInsertion2 placeholder="Diagnóstico" />
                    <TextRecordInsertion>Prescrição médica</TextRecordInsertion>

                    <InputRecordInsertion placeholder="Prescrição medica" />

                    <ButtonRecordInsertion>
                        <ButtonTitle>ENTRAR</ButtonTitle>
                    </ButtonRecordInsertion>
                </ContainerInputs>
            </ContainerRecordInsertion>
        </Container>
    );
};
