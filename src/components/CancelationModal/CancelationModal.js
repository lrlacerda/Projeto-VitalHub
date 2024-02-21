import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonRegister, ButtonTitle } from "../Button/style";
import { ContentAccount } from "../ContentAccount/ContentAccount";
import { LinkAccount } from "../Links/Links";
import { Textbasic } from "../Text/Text";


const CancelationModal = ({
    visible, 
    setShowModalCancel, 
    ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
        
      <Title>Cancelar Consulta</Title>

      <Textbasic>
        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
        horário, deseja mesmo cancelar essa consulta?
      </Textbasic>

      <ButtonRegister onPress={() => setShowModalCancel(false)}>
        <ButtonTitle>Cancelar</ButtonTitle>
      </ButtonRegister>

      <ContentAccount>
        <LinkAccount>Cancelar</LinkAccount>
      </ContentAccount>
    </Modal>
  );
};

export default CancelationModal;
