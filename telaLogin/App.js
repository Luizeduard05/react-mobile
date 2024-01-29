import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

const logo = require('./assets/logo.png')



export default function App() {
  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo}></Image>

      <Text style={styles.labelInput}>Email</Text>
      <TextInput placeholder='Digite seu email' style={styles.input} ></TextInput>

      <Text style={styles.labelInput} TextInput>Senha</Text>
      <TextInput placeholder='Digite sua senha' style={styles.input}></TextInput>

      <Button title='Entrar' color='midnightblue' onPress={() => Alert.alert('Seja bem vindo!!!')}></Button>


      <StatusBar style='inverted'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
    padding: 15
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    margin: 10
  },
  labelInput: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  logo: {
    width: 150,
    height: 125,
    margin: 30
  },


});
