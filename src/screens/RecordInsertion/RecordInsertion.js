import {
    Container,
    ContainerRecordInsertion,
} from "../../components/Container/Style";
import { ImageRecordInsertion } from "../../components/Logo/Style";
import { TitleRecordInsertion } from "../../components/Title/Style";
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
import { LinkRecordInsertion } from "../../components/Links/Links";

export const RecordInsertion = () => {
    return (
        <Container>
            <ImageRecordInsertion
                source={require("../../assets/imgLucas.jpg")}
            />

            <TitleRecordInsertion>Lucas Lacerda</TitleRecordInsertion>

            <TextRecordPaciente>
                36 anos     lribeirolacerda@gmail.com
            </TextRecordPaciente>

            <ContainerRecordInsertion>
                <TextRecordInsertion>Descrição da consulta</TextRecordInsertion>

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

                <LinkRecordInsertion>Cancelar</LinkRecordInsertion>
            </ContainerRecordInsertion>
        </Container>
    );
};
