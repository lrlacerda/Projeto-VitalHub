import { Container } from "../../components/Container/Style"
import { ImageRecordInsertion } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"


export const RecordInsertion = () => {
    return (
        <Container>
        <ImageRecordInsertion source={require("../../assets/imgLucas.jpg")} />

        <Title>Lucas Lacerda</Title>


        </Container>
    )
}