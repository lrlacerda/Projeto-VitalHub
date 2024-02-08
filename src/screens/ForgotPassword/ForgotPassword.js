import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Textbasic } from "../../components/Text/Text";
import { Button, ButtonForgotPassword, ButtonTitle } from "../../components/Button/style";
import { Input } from "../../components/Input/Input";

import { Feather } from '@expo/vector-icons';

export const ForgotPassword = () => {
  return (
    <Container>
      <Feather name="arrow-left-circle" size={24} color="#49B3BA" />
      <Logo source={require("../../assets/VitalHubLogo.png")} />

      <Title>Recuperar senha</Title>

      <Textbasic>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Textbasic>

      <Input placeholder="Usuário ou E-mail" />

      <ButtonForgotPassword>
        <ButtonTitle>CONTINUAR</ButtonTitle>
      </ButtonForgotPassword>
    </Container>
  );
};
