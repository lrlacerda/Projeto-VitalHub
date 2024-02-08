import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  background-color: #496bba;
  justify-content: center;
  align-items: center;
  border-color: #496bba;
  border-radius: 5px;
  margin-top: 15px;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_700Bold";
  color: #ffffff;
`;
export const ButtonGoogle = styled(Button)`
  background-color: #fafafa;
  border: 1px solid #496bba;
  flex-direction: row;
`;

export const ButtonTitleGoogle = styled(ButtonTitle)`
  color: #496bba;
  margin-left: 27px;
`;

export const ButtonForgotPassword = styled(Button)`
  margin-top: -150px;
`
export const ButtonNewPassword = styled(Button)`
  margin-top: 30px;
`
export const ButtonRegister = styled(Button)`
  margin-top: 30px;
`