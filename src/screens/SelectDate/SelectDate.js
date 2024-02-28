import { ContainerSelectDate } from "../../components/Container/Style";
import { TitleSelectDoctor } from "../../components/Title/Style";

//import Calendario
import { Calendar, LocaleConfig } from "react-native-calendars";
import RNPickerSelect from "react-native-picker-select";

import { TextSelectDatelabel, ViewCalendar } from "./style";
import { ButtonRegister, ButtonTitle } from "../../components/Button/style";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { LinkAccount } from "../../components/Links/Links";

//import fonts
import {
  useFonts,
  MontserratAlternates_600SemiBold,
} from "@expo-google-fonts/montserrat-alternates";

import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { useState } from "react";
import ComponenteSelecaoDeHorario from "../../components/ComponentePicke/ComponentePicke";

export const SelectDate = () => {

  const [selected, setSelected] = useState('');

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  //fontsLoaded
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  LocaleConfig.locales['pt-br'] = {
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro".split(
        "_"
      ),
    ],
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro".split(
        "_"
      ),
    ],
    monthNamesShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez".split("_")],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb".split("_")],
  };
  
  LocaleConfig.defaultLocale = 'pt-br';

  return (
    <ContainerSelectDate>
      <TitleSelectDoctor>Selecionar data</TitleSelectDoctor>
      <ViewCalendar>
        <Calendar
          onDayPress={(day) => console.log("Dia selecionado:", day)}
          hideArrows={true}
          theme={{
            textSectionTitleColor: "#5F5C6B",
            selectedDayBackgroundColor: "green",
            todayTextColor: "red",
            dayTextColor: "black", 
           

            textDayFontFamily: "Quicksand_600SemiBold", 
            textMonthFontFamily: "MontserratAlternates_600SemiBold", 
            textDayHeaderFontFamily: "Quicksand_600SemiBold",
            monthTitleTextStyle: { fontSize: 50 }, // Defina o tamanho da fonte do mês 
            
            
          }}
          monthFormat={"MMMM yyyy"}
        />
      </ViewCalendar>
      <TextSelectDatelabel>Selecione um horário disponível</TextSelectDatelabel>
      <ComponenteSelecaoDeHorario/>
      <ButtonRegister>
        <ButtonTitle>CONFIRMAR</ButtonTitle>
      </ButtonRegister>

      <ContentAccount>
        <LinkAccount>Cancelar</LinkAccount>
      </ContentAccount>
      
    </ContainerSelectDate>
  );
};