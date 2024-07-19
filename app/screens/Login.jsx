import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { Text, TextInput, Avatar } from 'react-native-paper';
import THEME from '../theme/theme';

const flags = "gm";
const pattern = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
const regexPattern = new RegExp(pattern, flags);

export default function Login({ navigation }) {
  const [emailVal, setEmailval] = useState('rohit@gmail.com');
  const [passwordVal, setPasswordVal] = useState('');
 
  const validateLoginDetails = () => {
    let validEmail = regexPattern.test(emailVal) ? true : false;
   
    navigation.navigate('Home');
    if (validEmail && passwordVal) {
      return;
    }
 
    // Alert.alert('Invalid Credentials');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 20 }}>
      <Avatar.Image size={150} style={{marginBottom: 20}} source={require('../assets/logo.png')} />
      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Enter username"
        style={{ width: "100%", marginBottom: 20 }}
        value={emailVal}
        onChangeText={(val)=> {
          setEmailval(val);
        }}
      />
      <TextInput
        mode="outlined"
        type="password"
        label="Password"
        placeholder="Enter password"
        style={{ width: "100%" }}
        secureTextEntry={true} 
        value={passwordVal}
        onChangeText={(val)=> {
          setPasswordVal(val);
        }}
        // right={<TextInput.Icon icon="eye" />}
      />
      <TouchableOpacity style={styles.button} onPress={validateLoginDetails}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.secondaryColor,
    padding: 15,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
