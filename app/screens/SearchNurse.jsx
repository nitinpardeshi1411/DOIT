import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, TextInput, MD3Colors } from 'react-native-paper';

export default function SearchNurse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [nurses, setNurses] = useState([
    { name: 'Nancy', contact: '9812345678', chat: true },
    { name: 'Mike', contact: '9812345679', chat: true },
    { name: 'Angelin', contact: '9812345670', chat: false },
    { name: 'Sara', contact: '9812345671', chat: true },
    { name: 'Tracy', contact: '9312345671', chat: false },
    { name: 'Kate', contact: '9412345671', chat: true },
    { name: 'John', contact: '9512345671', chat: true },
    { name: 'Carl', contact: '9612345671', chat: true },
  ]);

  const filteredNurses = nurses.filter(nurse => 
    nurse.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Enter first 3 characters of nurse name"
        // placeholder="Enter first 3 characters of nurse name"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Name</Text>
        <Text style={styles.tableHeaderText}>Contact details</Text>
        <Text style={styles.tableHeaderText}>Chat</Text>
      </View>
      <ScrollView>
        {filteredNurses.map((nurse, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableRowText}>{nurse.name}</Text>
            <TouchableOpacity 
              style={styles.tableRowButton} 
            //   onPress={() => alert(`Contact details for ${nurse.name}`)}
            >
              <Text style={styles.tableRowButtonText}>{nurse.contact}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.tableRowButton} 
            //   onPress={() => alert(`Chat with ${nurse.name}`)}
            >
              <Text style={styles.tableRowButtonText}>
                {
                  nurse.chat ? 
                    <Icon source="chat" size={25} color={'green'} />  
                  :
                    <Icon source="chat-remove" size={25} color={'gray'} />  
                }
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#FF0000',
  },
  input: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    width: '33%',
    textAlign: 'center',
    fontSize: 16
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableRowText: {
    width: '33%',
    textAlign: 'center',
  },
  tableRowButton: {
    width: '33%',
    alignItems: 'center',
  },
  tableRowButtonText: {
    color: '#007BFF',
  },
});
