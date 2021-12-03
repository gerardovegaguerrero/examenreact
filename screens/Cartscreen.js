import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert,TextInput  } from 'react-native';
import { Card, ListItem, Button,} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/cinecontext';

export default function Cartscreen({navigation}) {
  const { comprar,compra,eliminacion_total,calcular } = useContext(Context);

  return (
    <View style={styles.contorno}>
    
      
      <Text style={{textAlign: 'center',fontWeight: "bold"}}>Titulo{compra.nombre}({compra.idioma})</Text>
      <Text style={{textAlign: 'center',fontWeight: "bold"}}>Horario: {compra.horario}</Text>
       <TextInput
       style={styles.input}
        placeholder="por favor introdusca el numero de boletos"
        keyboardType="numeric"
       onChangeText={(e)=>calcular(e,compra)}
               
      />
      <Text style={{textAlign: 'center',fontWeight: "bold"}}>total: ${compra.total}</Text>
            <View  style={styles.container}>
            <Button 
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               title="Cancelar"
             onPress={()=> navigation.navigate('HomeScreen')}
             
             />
             <Button
             buttonStyle={{ backgroundColor: '#FF0000' }}
               title="Aceptar"
             onPress={() => Alert.alert('gracias por su compra')}
             />
    
     
     </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 24,
    flexDirection: 'row',
  },
   contorno: {
        fontSize: 20,
    fontWeight: "bold"

  },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});