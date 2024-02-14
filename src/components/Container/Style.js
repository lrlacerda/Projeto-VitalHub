import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fafafa;
`;

export const ContainerInputs = styled.View`
    width: 90%;
    align-self: center;
    margin-top: 65px;
    margin-bottom: 30px;
`

export const ContainerIcon = styled.TouchableOpacity`
    flex-direction: row;
    width: 90%;
    margin-top: 20px;
    margin-bottom: -40px;
`;

export const ContainerIconPatient = styled.View`
    margin-left: 120px;
    margin-top: 90px;
`;

export const ContainerEmailCode = styled.View`
    width: 90%;
    flex-direction: row;
    margin-top: 272px;
    justify-content: space-evenly;
    padding: 10px;
`;

export const ContainerRecordInsertion = styled.ScrollView`
    width: 100%;
`;

export const ContainerText = styled.ScrollView`
    width: 100%;
    height: 130px;
    background-color: #e6e6e6;
    margin-top: 20px;
    border-radius: 5px;
`;
export const ContainerText2 = styled(ContainerText)`
    height: 70px;
`;

export const ContainerText3 = styled.View`
    position: absolute;
    margin-top: 270px;
    width: 330px;
    height: 110px;
    background-color: #ffffff;
    border-radius: 5px;
    align-self: center;
`;

export const ContainerHeader = styled.View`
    position: relative;
    width: 100%;
    height: 160px;
    flex-direction: row;
`;
export const ContainerImageTextPatient = styled.View`
    position: absolute;
    flex-direction: row;
`;

export const ContainerTextPatient = styled.View`
    margin-top: 90px;
    margin-left: 10px;
`;

export const CalendarContainer = styled.View``;
