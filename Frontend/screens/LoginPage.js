import axios from 'axios';
import React, { useState } from 'react';
import { View, Text,TextInput, Button, StyleSheet, ImageBackground, Image, Alert,TouchableOpacity } from 'react-native';


const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [myip,setIp]=useState("192.168.43.8");

  async function login(e) {
    e.preventDefault();
    await axios
      .post(`http://${myip}:8050/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        alert("login Success");
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
      });
  }


  return (
    <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <TextInput
          style={styles.input1}
          placeholder="Username"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.registerText}>Dont have an account? Sign Up</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 50,
    marginTop: 50,
  },
  input1: {
    color: 'white',
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 100,
  },
  input: {
    color: 'white',
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
  },
});




export default LoginPage;
