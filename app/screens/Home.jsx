import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DOIT</Text>
      <Text style={styles.welcome}>Welcome username!</Text>
      <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daily Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchNurse')}>
          <Text style={styles.buttonText}>Search Nurse</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Document Archive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.disabledButton}>
          <Text style={styles.buttonText}>Future enhancements</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: '#fff',

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: 'red',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  sosText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#888',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
