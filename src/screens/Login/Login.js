import {
  Button,
  ButtonGoogle,
  ButtonTitle,
  ButtonTitleGoogle,
} from "../../components/Button/style";
import { Container } from "../../components/Container/Style";
import { ContentAccount, TextAccount } from "../../components/ContentAccount/ContentAccount";
import { Input } from "../../components/Input/Input";
import { LinkAccount, LinkMedium } from "../../components/Links/Links";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";

import { AntDesign } from '@expo/vector-icons';

export const Login = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHubLogo.png")} />

      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou E-mail" />

      {/* (secureTextEntry) nao aparece a senha enquanto digita */}
      <Input placeholder="Senha" secureTextEntry />

      <LinkMedium>Esqueceu sua senha?</LinkMedium>

      <Button>
        <ButtonTitle>ENTRAR</ButtonTitle>
      </Button>

      <ButtonGoogle>
      <AntDesign name="google" size={20} color="#496BBA"/>
        <ButtonTitleGoogle>ENTRAR COM GOOGLE</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
            <TextAccount>Não tem conta?</TextAccount>
            <LinkAccount>Crie uma conta agora!</LinkAccount>
        </ContentAccount> 
    </Container>
  );
};
