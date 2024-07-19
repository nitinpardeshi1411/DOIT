import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome username!</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>navigation.navigate('DailySchedule')}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.buttonText}>Daily Schedule</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchNurse')}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.buttonText}>Search Nurse</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.buttonText}>Document Archive</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
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
    marginTop: 20,
  },
  sosButton: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
  sosText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly'
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
    fontSize: 20,
    textAlign: 'center'
  },
  card: {
    margin: 20
  },
  cardContent: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
