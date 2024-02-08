import { Feather } from "@expo/vector-icons";
import { Container, ContainerIcon } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Textbasic } from "../../components/Text/Text";
import { Input } from "../../components/Input/Input";
import { Button, ButtonRegister, ButtonTitle } from "../../components/Button/style";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { LinkAccount } from "../../components/Links/Links";

export const Register = () => {
  return (
    <Container>
      <ContainerIcon>
        <Feather name="x-circle" size={35} color="#49B3BA" />
      </ContainerIcon>
      <Logo source={require("../../assets/VitalHubLogo.png")} />

      <Title>Criar conta</Title>
      <Textbasic>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Textbasic>

      <Input placeholder="Usuário ou E-mail" />

      {/* (secureTextEntry) nao aparece a senha enquanto digita */}
      <Input placeholder="Senha" secureTextEntry />
      <Input placeholder="Confirmar Senha" secureTextEntry />

      <ButtonRegister>
        <ButtonTitle>CADASTRAR</ButtonTitle>
      </ButtonRegister>

      <ContentAccount>
        <LinkAccount>Cancelar</LinkAccount>
      </ContentAccount>

    </Container>
  );
};
