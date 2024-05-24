import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Evento } from '../components/evento';

const EventoDetalle = ({ Evento, onBack }: { Evento: Evento, onBack: () => void }) => {

  const [image, setImage] = useState<string[]>([]);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.canceled) {
      setImage([...image, result.assets[0].uri.toString()]);
    }
  }

  const pickPicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      setImage([...image, result.assets[0].uri.toString()]);
    }
  }

  return (
    <ScrollView style={{ marginTop: 100 }}>
      <Text style={{ fontSize: 50, marginBottom: 10, alignSelf: 'center' }}>{Evento.nombre}</Text>
      <Text style={{ fontSize: 25, marginBottom: 20, alignSelf: 'center', textAlign: 'center' }}>{Evento.descripcion}</Text>
      <View>
        <Button title='Seleccionar de Galeria' onPress={selectImage}></Button>
        <Button title='Capturar Fotografia' onPress={pickPicture}></Button>
        <Button title='Regresar' onPress={onBack}></Button>
      </View>
      <FlatList
        data={image}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    margin: 10,
    borderWidth: 15,
    borderColor: '#000',
    alignSelf:'center',
  }
})

export default EventoDetalle;