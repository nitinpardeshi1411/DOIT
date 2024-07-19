import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Button, Checkbox, FAB } from 'react-native-paper';

export default function DailySchedule({ navigation }) {


    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{flex:1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop:20 }}>
                <FAB
                    label='19'
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
                <FAB
                    label='20'
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
                <FAB
                    label='21'
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
                <FAB
                    label='22'
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
                <FAB
                    label='23'
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <List.Section title="19th Jul 2024, Fri">
                <List.Accordion
                    title="6:00 AM"
                    left={props => <List.Icon {...props} icon="calendar-multiple" />}>
                    <List.Item title="Take Medicine1" description="1 Pill"
                        right={props => <Text><Checkbox /></Text>} />

                    <List.Item title="Go for a walk" description="30 mins"
                        right={props => <Text><Checkbox /></Text>} />
                </List.Accordion>

                <List.Accordion
                    title="7:00 AM"
                    left={props => <List.Icon {...props} icon="calendar-multiple" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="8:00 PM"
                    left={props => <List.Icon {...props} icon="calendar-multiple" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>
            <Button style={{alignSelf:'flex-end', position:'absolute', bottom:40}} icon="plus" mode="elevated" onPress={() =>  navigation.navigate('CreateNewSchedule')}>
                Create New
            </Button>

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

});
