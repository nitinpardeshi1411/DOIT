import * as React from 'react';
import { View, Button } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 20 }}>
      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Enter username"
        style={{ width: "100%", marginBottom: 20 }}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Enter password"
        style={{ width: "100%" }}
        right={<TextInput.Affix icon="eye" />}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
