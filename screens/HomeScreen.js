import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/cinecontext';

export default function HomeScreen({navigation}) {
  const { cartelera,agregar,calcular } = useContext(Context);

  return (
    <View>
      <ScrollView>
        {cartelera.map((a, i) => (
          <Card style={styles.contorno}>
            <Card.Title>{a.nombre}</Card.Title>
            <img src={a.url}/>
            <Text style={{textAlign: 'center',fontWeight: "bold"}}>idioma: {a.idioma} </Text>
            <Text style={{textAlign: 'center',fontWeight: "bold"}}>clasificacion: {a.clasificacion}</Text>
            <Text style={{textAlign: 'center',fontWeight: "bold"}}>duracion: {a.duracion}</Text>
            <View style={styles.container}>
             { a.horarios.map((f)=>
             
             <Button 
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               title={f}
             onPress={()=> {navigation.navigate('Cartscreen');agregar(a,f)}}
             >{f}</Button>)}
             
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 24,
    flexDirection: 'row',
  },
   contorno: {
        fontSize: 20,
    fontWeight: "bold"

  },
});
