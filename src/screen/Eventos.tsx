import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Evento, events } from '../components/evento';
import EventoDetalle from './EventoDetalle';


const Eventos = () => {

  const [selectEventos, setSelectEventos] = useState<Evento | null>(null);

  if (selectEventos) {
    return <EventoDetalle Evento={selectEventos} onBack={() => setSelectEventos(null)} />;
  }

  return (
    <View style={{ alignSelf:'center', marginTop: 200 }}>
      <Text style={{fontSize: 40, alignSelf: 'center'}}> Lista de Eventos</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            setSelectEventos(item);
          }}>
            <Text style={styles.nameEvento}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameEvento: {
    fontSize: 25,
    backgroundColor:'plum',
    marginVertical: 12,
    textAlign: 'center'
  }
})

export default Eventos