import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Textbasic } from "../../components/Text/Text";
import { LinkMedium } from "../../components/Links/Links";

import { Feather } from '@expo/vector-icons';

export const EmailCode = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHubLogo.png")} />

      <Title>Verifique seu e-mail</Title>

      <Textbasic>Digite o código de 4 dígitos enviado para</Textbasic>
      <LinkMedium>username@email.com</LinkMedium>

      <Input placeholder="Usuário ou E-mail" />

      <ButtonForgotPassword>
        <ButtonTitle>ENTRAR</ButtonTitle>
      </ButtonForgotPassword>

      <LinkMedium>Reenviar Código</LinkMedium>
    </Container>
  );
};
