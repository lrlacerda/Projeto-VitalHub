import { useState } from "react";
import { ApointmentSelectClinic } from "../../components/ApointmentCard/ApointmentSelectClinic";
import { ButtonRegister, ButtonTitle } from "../../components/Button/style";
import { ContainerSelectDoctor } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { LinkAccount } from "../../components/Links/Links";
import { ListComponent } from "../../components/List/List";
import { TitleSelectDoctor } from "../../components/Title/Style";

export const SelectClinic = () => {
  const Clinics = [
    { id: 1, name: "Clínica Natureh", location: "São Paulo, SP" },
    { id: 2, name: "Diamond Pró-Mulher", location: "São Paulo, SP" },
    { id: 3, name: "Clinica Villa Lobos", location: "São Paulo, SP" },
    { id: 4, name: "SP Oncologia Clínica", location: "São Paulo, SP" },
  ];

  const [selectedClinicId, setSelectedClinicId] = useState(null);
  
  const handleSelectClinic = (clinicId) => {
    setSelectedClinicId(clinicId);
  };

  return (
    <ContainerSelectDoctor>
      <TitleSelectDoctor>Selecionar clínica</TitleSelectDoctor>
      <ListComponent
        data={Clinics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ApointmentSelectClinic
          clinic={item}
          isSelected={item.id === selectedClinicId}
          onPressClinic={() => handleSelectClinic(item.id)}
          />
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
