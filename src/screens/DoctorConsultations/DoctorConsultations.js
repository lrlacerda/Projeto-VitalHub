import {
    Button2,
    Button3,
    Button4,
    ButtonTitle2,
    ButtonTitle3,
} from "../../components/Button/style";
import CalendarList from "../../components/CalendarStrip/CalendarList";
import {
    Container,
    Container2,
    Container3,
    Container4,
    Container5,
    Container6,
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

export const DoctorConsultations = () => {
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
                <Button2>
                    <ButtonTitle2>Agendadas</ButtonTitle2>
                </Button2>
                <Button3>
                    <ButtonTitle3>Realizadas</ButtonTitle3>
                </Button3>
                <Button3>
                    <ButtonTitle3>Canceladas</ButtonTitle3>
                </Button3>
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
            </ContainerRecordInsertion>

            <Container6>
                <Container4>
                    <MaterialCommunityIcons
                        name="notebook"
                        size={24}
                        color="#607EC5"
                    />
                    <TextAgenda>Agenda</TextAgenda>
                </Container4>
                <FontAwesome6 name="hospital" size={24} color="#4E4B59" />
                <Ionicons
                    name="person-circle-outline"
                    size={30}
                    color="#4E4B59"
                />
            </Container6>
        </Container>
    );
};
