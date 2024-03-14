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
import { Camera, CameraType, Constants } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { FontAwesome } from "@expo/vector-icons";

//icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    ButtonMedicalRecord,
    ContainerImageExame,
    InputRecordInsertionExame,
    TextBottonRecord,
    TextButtonRecord,
    ViewButtonCamera,
    ViewLine,
} from "./style";
import { useEffect, useRef, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";
import { ButtonCard } from "../../components/Button/style";

export const MedicalRecord = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    //camera frontal etraseira
    const [type, setType] = useState(Camera.Constants.Type.back);
    //ModalCamera
    const [modalVisible, setModalVisible] = useState(false);
    //Captura da imagem
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);
    //flash camera
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    //gravar vídeo
    const [isRecording, setIsRecording] = useState(false);

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

    //função de vídeo camera
    const toggleRecording = async () => {
        if (isRecording) {
            // Se já estiver gravando, pare a gravação
            await cameraRef.current.stopRecording(); // Espera a gravação parar antes de definir isRecording como false
            setIsRecording(false);
        } else {
            // Se não estiver gravando, comece a gravação
            const videoRecord = await cameraRef.current.recordAsync();
            setCapturedVideo(videoRecord.uri); // Salva o vídeo capturado
            setIsRecording(true); // Define isRecording como true para indicar que a gravação está ocorrendo
        }
    };


    //flash da camera
    async function toggleFlash() {
        const newFlashMode =
            flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off;
        setFlashMode(newFlashMode);
    }

    //capturar foto
    const takePicture = async () => {
        try {
            if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                setCapturedImage(photo.uri);
            } else {
                console.log(
                    "Referência da câmera não está definida corretamente."
                );
            }
        } catch (error) {
            console.error("Erro ao capturar a imagem:", error);
        }
    };

    //limpar foto
    function ClearPhoto() {
        setCapturedImage(null);

        setModalVisible(false);
    }

    //salvar foto
    async function SavePhoto() {
        if (capturedImage) {
            await MediaLibrary.createAssetAsync(capturedImage)
                .then(Alert.alert("Foto salva na galeria"))
                .catch((error) => {
                    alert("Erro ao carregar foto");
                });
        }
    }

    const cancelCapture = () => {
        setCapturedImage(null); // Redefine o estado da imagem capturada
        setModalVisible(false); // Fecha o modal
    };

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } =
                await Camera.requestCameraPermissionsAsync();

            const { status: mediaStatus } =
                await MediaLibrary.requestPermissionsAsync();
        })();
    }, []);

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

                    <ViewButtonCamera>
                        <ButtonMedicalRecord
                            onPress={() => setModalVisible(true)}
                        >
                            <MaterialCommunityIcons
                                name="camera-plus-outline"
                                size={28}
                                color="white"
                            />
                            <TextBottonRecord>Enviar</TextBottonRecord>
                        </ButtonMedicalRecord>

                        <ButtonCard onPress={cancelCapture}>
                            <TextButtonRecord>Cancelar</TextButtonRecord>
                        </ButtonCard>
                    </ViewButtonCamera>

                    <View style={{ flex: 1 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: "white",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Camera
                                    style={{ width: "90%", aspectRatio: 3 / 5 }}
                                    type={type}
                                    ref={cameraRef}
                                    ratio={"16:9"}
                                    flashMode={flashMode}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            padding: 20,
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={styles.cameraButtonText}
                                            onPress={toggleCameraType}
                                        >
                                            <Text style={{ color: "white" }}>
                                                Trocar Câmera
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.cameraButtonText}
                                            onPress={toggleFlash}
                                        >
                                            <Text style={{ color: "white" }}>
                                                Flash
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Camera>
                                <View
                                    style={{
                                        marginTop: 10,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <TouchableOpacity
                                        style={styles.btnCaptura}
                                        onPress={() => takePicture()}
                                    >
                                        <FontAwesome
                                            name="camera"
                                            size={23}
                                            color={"#fff"}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={toggleRecording}
                                        style={{
                                            alignSelf: "center",
                                            backgroundColor: "black",
                                            padding: 14,
                                            borderRadius: 10,
                                            
                                        }}
                                    >
                                        <FontAwesome
                                            name={
                                                isRecording
                                                    ? "stop"
                                                    : "video-camera"
                                            } // Altere o nome do ícone para "video-camera"
                                            size={35}
                                            color={
                                                isRecording ? "red" : "white"
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        margin: 10,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={ClearPhoto}
                                        style={styles.btnCancel}
                                    >
                                        <FontAwesome
                                            name="trash"
                                            size={35}
                                            color={"#fff"}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={SavePhoto}
                                        style={styles.btnUpload}
                                    >
                                        <FontAwesome
                                            name="save"
                                            size={35}
                                            color={"#fff"}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <ViewLine></ViewLine>

                    <InputRecordInsertionExame placeholder="Descrição do exame:  " />

                    <LinkRecordInsertion
                        onPress={() => navigation.replace("Main")}
                    >
                        Voltar
                    </LinkRecordInsertion>
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
        aspectRatio: 3 / 5,
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
    txtFlip: {
        color: "white",
        fontSize: 18,
        backgroundColor: "#49b3ba",
        padding: 10,
        borderRadius: 5,
    },
    btnFlash: {},

    viewFlip: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    btnFlip: {
        // position: 'absolute,',
        pading: 10,
        marginTop: 500,
    },

    btnCaptura: {
        margin: 20,
        marginRight: 50,
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#121212",

        alignItems: "center",
        justifyContent: "center",
    },
    btnCancel: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: "#49B3BA",
        alignItems: "center",
        justifyContent: "center",
    },
    btnUpload: {
        marginLeft: 40,
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: "#49B3BA",
        alignItems: "center",
        justifyContent: "center",
    },
});
