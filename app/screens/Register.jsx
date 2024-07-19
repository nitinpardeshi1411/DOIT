import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import THEME from '../theme/theme';

export default function Register({navigation}) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobNo, setMobNo] = useState('');

  const handleRegister = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>Register</Text> */}
      <TextInput
        mode="outlined"
        label="Full Name"
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Mobile Number"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        // style={[styles.input, styles.textarea]}
        mode="outlined"
        label="Address"
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="DOIT Username"
        placeholder="DOIT Username"
        value={username}
        onChangeText={setUsername}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Confirm Password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Emergency Contact Number"
        placeholder="Emergency Contact Number"
        value={mobNo}
        onChangeText={setMobNo}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 15
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top', // Aligns text to the top for multiline TextInput
  },
  button: {
    backgroundColor: THEME.primaryColor,
    padding: 15,
    marginTop: 20,
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
