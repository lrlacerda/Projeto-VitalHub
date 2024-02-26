import { useState } from "react";
import { ApointmentSelectDoctor } from "../../components/ApointmentCard/ApointmentSelectDoctor";
import { ButtonRegister, ButtonTitle } from "../../components/Button/style";
import { ContainerSelectDoctor } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { LinkAccount } from "../../components/Links/Links";
import { TitleSelectDoctor } from "../../components/Title/Style";
import { ListComponent } from "../../components/List/List";

export const SelectDoctor = () => {
    
  const [onPressAppointment, setOnPressAppointment] = useState(false)

  const Doctor = [
    { id: 1, nome: "Lucas Lacerda", situacao: "pendente" },
    { id: 2, nome: "Uiara Ambrosio", situacao: "cancelado" },
    { id: 3, nome: "Silvia Ribeiro", situacao: "realizado" },
  ];

  return (
    <ContainerSelectDoctor>
      <TitleSelectDoctor>Selecionar médico</TitleSelectDoctor>
      <ListComponent
        data={Doctor}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ApointmentSelectDoctor  isFirst={index === 0}/>} // Verifica se é o primeiro item da lista
      />
      <ButtonRegister>
        <ButtonTitle>CONTINUAR</ButtonTitle>
      </ButtonRegister>

      <ContentAccount>
        <LinkAccount>Cancelar</LinkAccount>
      </ContentAccount>
    </ContainerSelectDoctor>
  );
};
