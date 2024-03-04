import {
  Container,
  ContainerInputs,
  ContainerRecordInsertion,
} from "../../components/Container/Style";
import { ImageRecordInsertion } from "../../components/Logo/Style";
import {
  TextRecordInsertion,
  TextRecordPaciente,
} from "../../components/Text/Text";
import * as ImagePicker from 'expo-image-picker';
import { TitleRecordInsertion } from "../../components/Title/Style";
import {
  InputRecordInsertion,
  InputRecordInsertion2,
} from "../../components/Input/Input";
import { LinkRecordInsertion } from "../../components/Links/Links";

//icon
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonMedicalRecord, TextBottonRecord } from "./style";
import { useState } from "react";

export const MedicalRecord = () => {

    const [imageUri, setImageUri] = useState(null);

    // Função para lidar com a captura da imagem
  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Você precisa conceder permissão para acessar a câmera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <Container>
      <ContainerRecordInsertion>
        <ImageRecordInsertion source={require("../../assets/imgLucas.jpg")} />

        <TitleRecordInsertion>Dr. Lucas Lacerda</TitleRecordInsertion>

        <TextRecordPaciente>Cliníco geral - CRM-15286</TextRecordPaciente>

        <ContainerInputs>
          <TextRecordInsertion>Descrição da consulta</TextRecordInsertion>

          <InputRecordInsertion />

          <TextRecordInsertion>Diagnóstico do paciente</TextRecordInsertion>

          <InputRecordInsertion2 />
          <TextRecordInsertion>Prescrição médica</TextRecordInsertion>

          <InputRecordInsertion />
          <TextRecordInsertion>Exames médicos</TextRecordInsertion>

          <InputRecordInsertion />

          <ButtonMedicalRecord onPress={handleTakePhoto}>
          <MaterialCommunityIcons name="camera-plus-outline" size={28} color="white" />
          <TextBottonRecord>Enviar</TextBottonRecord>
          </ButtonMedicalRecord>

          <LinkRecordInsertion>Voltar</LinkRecordInsertion>
        </ContainerInputs>
      </ContainerRecordInsertion>
    </Container>
  );
};
