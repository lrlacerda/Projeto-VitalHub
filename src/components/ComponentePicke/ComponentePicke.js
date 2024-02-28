import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { InputPicker } from "./style";

const ComponenteSelecaoDeHorario = () => {
  const [selectedHour, setSelectedHour] = useState(null); // Estado para armazenar a hora selecionada
  const [hourSelected, setHourSelected] = useState(false); // Estado para rastrear se uma hora foi selecionada

  // Gerar uma lista de horários em intervalos de 30 minutos
  const hours = ["Selecionar horário"];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      hours.push(formattedHour);
    }
  }

  return (
    <InputPicker>
      <Picker
        selectedValue={selectedHour}
        onValueChange={(itemValue, itemIndex) => 
            setSelectedHour(itemValue)}
        color="#49b3ba" // Defina a cor do texto selecionado
      >
        {hours.map((hour, index) => (
          <Picker.Item key={index} label={hour} value={hour} 
          style={{ fontFamily: "MontserratAlternates_600SemiBold", color: "#34898F", fontSize: 16, }} // Estilos personalizados
          />
        ))}
      </Picker>
    </InputPicker>
  );
};

export default ComponenteSelecaoDeHorario;
