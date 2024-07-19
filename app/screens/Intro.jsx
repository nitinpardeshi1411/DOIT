import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
// import { getNurses } from '../api/api';
import getNurses from '../api/api';
import THEME from '../theme/theme';

export default function Intro({navigation}) {

  // useEffect(() => {
  //   getNurses();
  // }, [])

  return (
    <View style={styles.container}>
      <Avatar.Image size={150} source={require('../assets/logo.png')} />
      <Text style={styles.title}>DOIT</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.login]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.subtitle}>Our mission is to provide a user-friendly, intuitive platform that streamlines care, fosters connection & promotes independence.{'\n'}</Text>
        <Text style={[styles.subtitle, styles.fontWeight700]}>With DOIT, users can:</Text>
        <Text style={styles.subtitle}>- Track schedules and receive reminders.</Text>
        <Text style={styles.subtitle}>- Monitor daily activities and appointments</Text>
        <Text style={styles.subtitle}>- Connect with healthcare professionals and support networks</Text>
        <Text style={styles.subtitle}>- Maintain doctor prescriptions.</Text>
        <Text style={styles.subtitle}>- Emergency SOS{'\n'}</Text>
        <Text style={[styles.subtitle, styles.fontWeight700]}>Join Our Community</Text>
        <Text style={styles.subtitle}>DoIt is more than just an application - it's a community dedicated to supporting individuals affected by dementia. Sign up today and discover a comprehensive care solution that puts your needs first.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    marginTop: 30
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  fontWeight700: {
    fontWeight: 700
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    backgroundColor: THEME.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: THEME.primaryColor,
    width: 130
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  login: {
    backgroundColor: THEME.secondaryColor,
    borderColor: THEME.secondaryColor
  }
});
