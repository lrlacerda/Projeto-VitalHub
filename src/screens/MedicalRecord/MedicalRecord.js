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

import { TitleRecordInsertion } from "../../components/Title/Style";
import {
    InputRecordInsertion,
    InputRecordInsertion2,
} from "../../components/Input/Input";
import { LinkRecordInsertion } from "../../components/Links/Links";

//expo Camera
import { Camera } from "expo-camera";

//icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonMedicalRecord, ContainerImageExame, TextBottonRecord } from "./style";
import { useEffect, useRef, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";

export const MedicalRecord = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    //ModalCamera
    const [modalVisible, setModalVisible] = useState(false);
    //Captura da imagem
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const toggleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    const takePicture = async () => {
        try {
            if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                console.log("Imagem capturada:", photo.uri);
                setCapturedImage(photo.uri);
                setModalVisible(false); // Fecha o modal após a captura da imagem
            } else {
                console.log(
                    "Referência da câmera não está definida corretamente."
                );
            }
        } catch (error) {
            console.error("Erro ao capturar a imagem:", error);
        }
    };

    if (hasPermission === null) {
        // Ainda não foi verificado o estado da permissão
        return <Text>Loading...</Text>;
    } else if (hasPermission === false) {
        // A permissão foi negada
        return <Text>No access to camera</Text>;
    }

    return (
        <Container>
            <ContainerRecordInsertion>
                <ImageRecordInsertion
                    source={require("../../assets/imgLucas.jpg")}
                />

                <TitleRecordInsertion>Dr. Lucas Lacerda</TitleRecordInsertion>

                <TextRecordPaciente>
                    Cliníco geral - CRM-15286
                </TextRecordPaciente>

                <ContainerInputs>
                    <TextRecordInsertion>
                        Descrição da consulta
                    </TextRecordInsertion>

                    <InputRecordInsertion />

                    <TextRecordInsertion>
                        Diagnóstico do paciente
                    </TextRecordInsertion>

                    <InputRecordInsertion2 />
                    <TextRecordInsertion>Prescrição médica</TextRecordInsertion>

                    <InputRecordInsertion />
                    <TextRecordInsertion>Exames médicos</TextRecordInsertion>

                    <ContainerImageExame>
                        {capturedImage && (
                            <Image
                                source={{ uri: capturedImage }}
                                style={styles.capturedImage}
                            />
                        )}
                    </ContainerImageExame>

                    <ButtonMedicalRecord onPress={() => setModalVisible(true)}>
                        <MaterialCommunityIcons
                            name="camera-plus-outline"
                            size={28}
                            color="white"
                        />
                        <TextBottonRecord>Enviar</TextBottonRecord>
                    </ButtonMedicalRecord>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.modalContainer}>
                            <Camera
                                style={styles.camera}
                                type={type}
                                ref={cameraRef}
                            >
                                <View style={styles.cameraButtons}>
                                    <TouchableOpacity
                                        onPress={toggleCameraType}
                                    >
                                        <Text style={styles.cameraButtonText}>
                                            Trocar Câmera
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={takePicture}
                                        // onPress={() => setModalVisible(false)}
                                    >
                                        <Text style={styles.cameraButtonText}>
                                            Capturar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </Camera>
                        </View>
                    </Modal>

                    <LinkRecordInsertion>Voltar</LinkRecordInsertion>
                </ContainerInputs>
            </ContainerRecordInsertion>
        </Container>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    camera: {
        width: "90%",
        aspectRatio: 3 / 4,
    },
    cameraButtons: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cameraButtonText: {
        color: "white",
        fontSize: 18,
        backgroundColor: "#49b3ba",
        padding: 10,
        borderRadius: 5,
    },
    capturedImage: {
        width: "100%", // Largura da imagem
        height: 200, // Altura da imagem
        resizeMode: "cover", // Modo de redimensionamento da imagem
        
    },
});
