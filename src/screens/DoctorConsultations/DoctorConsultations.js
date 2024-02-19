import { useState } from "react";
import {
    ButtonTabsStyle,
    ButtonTabsStyle2,
    TextButton,
    TextButton2,
} from "../../components/Button/style";
import CalendarList from "../../components/CalendarStrip/CalendarList";
import {
    Container,
    Container2,
    Container3,
    Container4,
    Container5,
    Container6,
    Container7,
    ContainerHeader,
    ContainerIconPatient,
    ContainerIconPatient2,
    ContainerImageTextPatient,
    ContainerRecordInsertion,
    ContainerTextPatient,
    ContainerTextPatient2,
} from "../../components/Container/Style";
import { LinkRecordInsertion2 } from "../../components/Links/Links";
import { ImageDoctor, ImagePatient } from "../../components/Logo/Style";
import {
    TextAgenda,
    TextHora,
    TextPatient,
    TextPatient2,
    TextPatient3,
} from "../../components/Text/Text";

//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Consultas = [
    { id: 1, nome: "Lucas Lacerda", situação: "Pendente" },
    { id: 2, nome: "Uiara Ambrosio", situação: "Cancelado" },
    { id: 3, nome: "Silvia Ribeiro", situação: "Realizado" },
    { id: 4, nome: "Tadeu LACERDA", situação: "Pendente" },
];

export const DoctorConsultations = () => {
    const [statusLista, setStatusLista] = useState("pendente");

    return (
        <Container>
            <ContainerHeader>
                <ContainerImageTextPatient>
                    <ImagePatient
                        source={require("../../assets/imgLucas.jpg")}
                    />

                    <ContainerTextPatient>
                        <TextPatient>Bem vindo</TextPatient>
                        <TextPatient2>Dr. Lucas Lacerda</TextPatient2>
                    </ContainerTextPatient>

                    <ContainerIconPatient2>
                        <MaterialCommunityIcons
                            name="bell"
                            size={30}
                            color="#FFFFFF"
                        />
                    </ContainerIconPatient2>
                </ContainerImageTextPatient>
            </ContainerHeader>

            <CalendarList />

            <Container2>
                <ButtonTabsStyle
                    textButton={"Pendente"}
                    clickButton={statusLista === "Pendente"}
                    onPress={() => {
                        setStatusLista("Pendente");
                    }}
                >
                    <TextButton>Agendadas</TextButton>
                </ButtonTabsStyle>

                <ButtonTabsStyle
                    textButton={"Realizadas"}
                    clickButton={statusLista === "Realizado"}
                    onPress={() => {
                        setStatusLista("Realizado");
                    }}
                >
                    <TextButton>Realizadas</TextButton>
                </ButtonTabsStyle>

                <ButtonTabsStyle
                    textButton={"Canceladas"}
                    clickButton={statusLista === "Cancelado"}
                    onPress={() => {
                        setStatusLista("Cancelado");
                    }}
                >
                    <TextButton>Canceladas</TextButton>
                </ButtonTabsStyle>
            </Container2>
            <ContainerRecordInsertion>
                <Container3>
                    <ImageDoctor
                        source={require("../../assets/imagemPaciente.png")}
                    />

                    <ContainerTextPatient2>
                        <TextPatient3>Richard Kosta</TextPatient3>
                        <TextPatient>28 anos . Cardiologia</TextPatient>
                        <Container5>
                            <Container4>
                                <MaterialCommunityIcons
                                    name="clock"
                                    size={18}
                                    color="#49B3BA"
                                />
                                <TextHora>14:00</TextHora>
                            </Container4>
                            <LinkRecordInsertion2>
                                Cancelar
                            </LinkRecordInsertion2>
                        </Container5>
                    </ContainerTextPatient2>
                </Container3>
                <Container3>
                    <ImageDoctor
                        source={require("../../assets/imagemPaciente2.png")}
                    />

                    <ContainerTextPatient2>
                        <TextPatient3>Niccole Sarga</TextPatient3>
                        <TextPatient>22 anos . Rotina</TextPatient>
                        <Container5>
                            <Container4>
                                <MaterialCommunityIcons
                                    name="clock"
                                    size={18}
                                    color="#49B3BA"
                                />
                                <TextHora>15:00</TextHora>
                            </Container4>
                            <LinkRecordInsertion2>
                                Cancelar
                            </LinkRecordInsertion2>
                        </Container5>
                    </ContainerTextPatient2>
                </Container3>
                <Container3>
                    <ImageDoctor
                        source={require("../../assets/imagemPaciente3.png")}
                    />

                    <ContainerTextPatient2>
                        <TextPatient3>Robbert Charlie</TextPatient3>
                        <TextPatient>45 anos . Rotina</TextPatient>
                        <Container5>
                            <Container4>
                                <MaterialCommunityIcons
                                    name="clock"
                                    size={18}
                                    color="#49B3BA"
                                />
                                <TextHora>16:30</TextHora>
                            </Container4>
                            <LinkRecordInsertion2>
                                Cancelar
                            </LinkRecordInsertion2>
                        </Container5>
                    </ContainerTextPatient2>
                </Container3>
            </ContainerRecordInsertion>

            <Container6>
                <ButtonTabsStyle2
                    textButton={"Agenda"}
                    clickButton={statusLista === "Agenda"}
                    onPress={() => {
                        setStatusLista("Agenda");
                    }}
                >
                    <MaterialCommunityIcons
                        name="notebook"
                        size={24}
                        color="#4E4B59"
                    />
                    <TextButton2>Agenda</TextButton2>
                </ButtonTabsStyle2>

                <ButtonTabsStyle2
                    textButton={"Clinicas"}
                    clickButton={statusLista === "Clinicas"}
                    onPress={() => {
                        setStatusLista("Clinicas");
                    }}
                >
                    <FontAwesome6 name="hospital" size={24} color="#4E4B59" />
                    <TextButton2>Clínicas</TextButton2>
                </ButtonTabsStyle2>
                <ButtonTabsStyle2
                    textButton={"Perfil"}
                    clickButton={statusLista === "Perfil"}
                    onPress={() => {
                        setStatusLista("Perfil");
                    }}
                >
                    <Ionicons
                        name="person-circle-outline"
                        size={30}
                        color="#4E4B59"
                    />
                    <TextButton2>Perfil</TextButton2>
                </ButtonTabsStyle2>
            </Container6>
        </Container>
    );
};
