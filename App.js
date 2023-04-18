import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  const [pontos, setPontos] = useState([
    { hora: '20:00 seg, 17 jan 2023', key: 1 },
    { hora: '13:00 seg, 17 jan 2023', key: 2 },
    { hora: '12:00 seg, 17 jan 2023', key: 3 },
    { hora: '07:00 seg, 17 jan 2023', key: 4 },
    { hora: '20:00 sex, 14 jan 2023', key: 5 },
    { hora: '13:00 sex, 14 jan 2023', key: 7 },
  ]);

  return (

    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.userIcon}>
          <FontAwesome5 name="user" size={24} color="black" />
        </View>
        <Text style={styles.textBem}>Bem vindo, Fernando</Text>
        <Text style={styles.textData}>18 de abril de 2023</Text>
      </View>

      <ScrollView>
      <View style={styles.relogio}>
        <Text>07:30:01</Text>
      </View>

      <View style={styles.register}>
        <Text style={styles.textRegister}>Registre seu ponto agora!</Text>

        <View style={styles.button}>
          <Button  title="Bater Ponto" color='white' />
        </View>


      </View>
      <Text style={styles.textUltimosPontos}>Últimos pontos:</Text>

      {pontos.map((item) => {
        return (
          <View key={item.key} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.hora}</Text>
          </View>
        );
      })}

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeader: {
    backgroundColor: '#ff7a00',
    paddingTop: 100,
    paddingBottom: '7%',
    paddingStart: '5%',
    borderBottomRightRadius: 90,
  },
  userIcon: {
    alignSelf: 'flex-end',
    marginRight: '10%',
  },
  relogio: {
    alignSelf: 'center',
    width: 90,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  textBem: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textData: {
    color: 'white',
    fontWeight: 'bold',
  },
  register: {
    backgroundColor: '#fff',
    padding: 20,
    margin: '2%',
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  textRegister: {
    alignSelf: 'center',
    color: '#ff7a00',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
  },
  textUltimosPontos: {
    margin: 20,
    marginLeft: '5%',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#ff7a00',
    width: 150,
    borderRadius: 10,
    
  },

  itemContainer: {
    margin: '5%',
    marginBottom: 0,
    borderBottomWidth: 1,
    borderColor: '#fca61f',
    paddingBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: 'gray'
    
  },

  
});
