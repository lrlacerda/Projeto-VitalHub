import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonTitle } from "../Button/style";
import { ContentAccount } from "../ContentAccount/ContentAccount";
import { LinkAccount } from "../Links/Links";
import { ButtonModal, ModalContent, ModalText, PatientModal } from "./style";

const CancelationModal = ({ visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        {/* Content */}
        <ModalContent>
          <Title>Cancelar Consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <ButtonModal onPress={() => setShowModalCancel(false)}>
            <ButtonTitle>CONFIRMAR</ButtonTitle>
          </ButtonModal>

          <ContentAccount>
            <LinkAccount>Cancelar</LinkAccount>
          </ContentAccount>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export default CancelationModal;
