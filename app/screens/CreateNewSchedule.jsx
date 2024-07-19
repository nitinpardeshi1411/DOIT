import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput, Button } from 'react-native-paper';
export default function CreateNewSchedule({ navigation }) {

  const [inputDate, setInputDate] = React.useState(undefined)

  return (
    <SafeAreaProvider>
      <View style={{ width: '80%', marginTop: '10%', marginLeft: '2%' }}>
        <DatePickerInput
          locale="en"
          label="Date"
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
          // presentationStyle='formSheet'
        />
      </View>
      <View style={{ marginTop: '20%' }}>
        <TextInput right={<TextInput.Icon icon="eye" />} />
      </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: '#fff',

  },

});
