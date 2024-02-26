import { ApointmentSelectClinic } from "../../components/ApointmentCard/ApointmentSelectClinic";
import { ButtonRegister, ButtonTitle } from "../../components/Button/style";
import { ContainerSelectDoctor } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { LinkAccount } from "../../components/Links/Links";
import { ListComponent } from "../../components/List/List";
import { TitleSelectDoctor } from "../../components/Title/Style";

export const SelectClinic = () => {
  const Clinic = [
    { id: 1, nome: "Clínica Natureh" },
    { id: 2, nome: "Diamond Pró-Mulher" },
    { id: 3, nome: "Clinica Villa Lobos" },
    { id: 3, nome: "SP Oncologia Clínica" },
  ];

  return (
    <ContainerSelectDoctor>
      <TitleSelectDoctor>Selecionar clínica</TitleSelectDoctor>
      <ListComponent
        data={Clinic}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ApointmentSelectClinic isFirst={index === 0} />
        )} // Verifica se é o primeiro item da lista
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
