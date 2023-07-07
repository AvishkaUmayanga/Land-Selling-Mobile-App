import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native';

const SignupPage = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myip,setIp]=useState("192.168.43.8");

  const addUser = async () => {
    try {
      const newUser = {
        username,
        email,
        password,
      };

      const response = await axios.post(
        `http://${myip}:8050/user/add`,
        newUser
      );
      console.log(response.data);
      alert("success");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      alert("Empty field");
    }
  };


  return (
    <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton} onPress={addUser}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.LoginText}>Already have an account? Login</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
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
  signupButton: {
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
  LoginText: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
  },
});

export default SignupPage;