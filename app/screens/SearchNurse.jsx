import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function SearchNurse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [nurses, setNurses] = useState([
    { name: 'N1', contact: 'Contact N1' },
    { name: 'N2', contact: 'Contact N2' },
    { name: 'N3', contact: 'Contact N3' },
    { name: 'N4', contact: 'Contact N4' },
  ]);

  const filteredNurses = nurses.filter(nurse => 
    nurse.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter first 3 characters of nurse name"
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
              <Text style={styles.tableRowButtonText}>Contact details</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.tableRowButton} 
            //   onPress={() => alert(`Chat with ${nurse.name}`)}
            >
              <Text style={styles.tableRowButtonText}>Chat</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
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
