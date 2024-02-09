import {
  ButtonRecordInsertion,
  ButtonTitle,
} from "../../components/Button/style";
import {
  Container,
  ContainerRecordInsertion,
  ContainerText,
  ContainerText2,
} from "../../components/Container/Style";
import { LinkRecordInsertion } from "../../components/Links/Links";
import { ImageRecordInsertion } from "../../components/Logo/Style";
import {
  TextRecordInsertion,
  TextRecordPaciente,
  TextRecordPaciente2,
} from "../../components/Text/Text";
import { TitleRecordInsertion } from "../../components/Title/Style";

export const PatientRecordInsertion = () => {
  return (
    <Container>
      <ImageRecordInsertion source={require("../../assets/imgLucas.jpg")} />

      <TitleRecordInsertion>Lucas Lacerda</TitleRecordInsertion>

      <TextRecordPaciente>36 anos lribeirolacerda@gmail.com</TextRecordPaciente>

      <ContainerRecordInsertion>
        <TextRecordInsertion>Descrição da consulta</TextRecordInsertion>

        <ContainerText>
          <TextRecordPaciente2>
            Lucas relatou histórico de hipertensão arterial e colesterol elevado
            na família. Ele também mencionou estar enfrentando dificuldades para
            controlar seu peso nos últimos meses.
          </TextRecordPaciente2>
        </ContainerText>

        <TextRecordInsertion>Diagnóstico do paciente</TextRecordInsertion>

        <ContainerText2>
          <TextRecordPaciente2>Hipertensão arterial.</TextRecordPaciente2>
        </ContainerText2>

        <TextRecordInsertion>Prescrição médica</TextRecordInsertion>

        <ContainerText>
          <TextRecordPaciente2>
            Plano Alimentar: Com base nas necessidades e objetivos específicos
            de Maria, desenvolvemos um plano alimentar personalizado, focado em:
            Incluir uma variedade de alimentos naturais, como frutas, legumes,
            grãos integrais, proteínas magras e gorduras saudáveis. Controlar o
            tamanho das porções e praticar a moderação nas refeições. Reduzir o
            consumo de alimentos processados, fast food e bebidas açucaradas.
            Estabelecer horários regulares para as refeições e priorizar a
            alimentação consciente.
          </TextRecordPaciente2>
        </ContainerText>

        <ButtonRecordInsertion>
          <ButtonTitle>SALVAR</ButtonTitle>
        </ButtonRecordInsertion>

        <ButtonRecordInsertion>
          <ButtonTitle>EDITAR</ButtonTitle>
        </ButtonRecordInsertion>

        <LinkRecordInsertion>Cancelar</LinkRecordInsertion>
      </ContainerRecordInsertion>
    </Container>
  );
};
