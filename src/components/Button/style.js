import styled, { css } from "styled-components";

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

export const ButtonTabsStyle = styled.TouchableOpacity`
  width: 120px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #496bba;
        `
      : css`
          background-color: transparent;
          border: 2px solid #607ec5;
        `}
`;

export const TextButton = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;

  ${(props) =>
    props.clickButton
      ? css`
          color: #fbfbfb;
        `
      : css`
          color: #607ec5;
        `}
`;
export const ButtonTabsStyle2 = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;

  ${(props) =>
    props.clickButton
      ? css`
          border-top-color: #607ec5;
          border-top-width: 3px;
        `
      : css`
          background-color: transparent;
        `}
`;

export const TextButton2 = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 14px;

  ${(props) =>
    props.clickButton
      ? css`
          color: #607ec5;
        `
      : css`
          color: #4e4b59;
        `}
`;

export const Button3 = styled(Button)`
  width: 120px;
  height: 50px;
  background-color: #fbfbfb;
  border: 2px solid #496bba;
`;

export const Button4 = styled.TouchableOpacity`
  background-color: #49b3ba;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 290px;
  margin-bottom: 15px;
  elevation: 5px;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_700Bold";
  color: #ffffff;
`;

export const ButtonTitle2 = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;
  color: #ffffff;
`;

export const ButtonTitle3 = styled(ButtonTitle2)`
  color: #496bba;
`;

export const ButtonGoogle = styled(Button)`
  background-color: #fafafa;
  border: 1px solid #496bba;
  flex-direction: row;
`;

export const ButtonSecondary = styled(Button)`
  background-color: #fafafa;
  border: 1px solid #496bba;
  flex-direction: row;
`;

export const ButtonTitleGoogle = styled(ButtonTitle)`
  color: #496bba;
  margin-left: 27px;
`;

export const ButtonForgotPassword = styled(Button)``;
export const ButtonNewPassword = styled(Button)`
  margin-top: 30px;
`;
export const ButtonEmailCode = styled(Button)`
  margin-top: -150px;
`;
export const ButtonRegister = styled(Button)`
  margin-top: 30px;
`;
export const ButtonRecordInsertion = styled(Button)`
  width: 100%;
  margin-top: 30px;
`;

export const ButtonCard = styled.TouchableOpacity`
  margin-left: 60px;
  margin-top: 20px;
`;
