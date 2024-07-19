import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import THEME from '../theme/theme';
import Pdf from 'react-native-pdf';
const source = require('../assets/About_Dementia.pdf');

export default function Home({ navigation }) {
  const [showPdf, setShowPdf] = React.useState(false);

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome Rohit!</Text>
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
              <Text style={styles.futureText}>(future)</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf:'flex-end', position:'absolute', bottom: 40, right: 15}}>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => setShowPdf(true)}>
          <Text style={styles.aboutDementia}>About Dementia</Text>
        </TouchableOpacity>
      </View>
    </View>
    {
      showPdf &&
        <View>
          <TouchableOpacity onPress={() => setShowPdf(false)}>
            <Text style={{alignSelf: 'flex-end', fontSize: 18}}>Close</Text>
          </TouchableOpacity>
          <Pdf
            source={source}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height
            }}
          />
        </View>
    }
    </>
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
    color: THEME.secondaryColor
  },
  sosButton: {
    backgroundColor: 'red',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 80/2
  },
  sosText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  futureText: {
    color: 'white',
    fontStyle: 'italic'
  },
  card: {
    margin: 20,
    backgroundColor: THEME.primaryColor
  },
  cardContent: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutDementia: {
    fontSize: 18,
    color: THEME.secondaryColor
  }
});
