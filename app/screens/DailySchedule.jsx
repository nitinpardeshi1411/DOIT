import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Button, Checkbox, FAB, IconButton } from 'react-native-paper';

export default function DailySchedule({ navigation }) {


    const [checked, setChecked] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState('19');
    const [selected, setSelected] = React.useState('Fri');
    const [end, setEnd] = React.useState('th');
    

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20 }}>
                <FAB
                    label='19'
                    style={styles.fab}
                    onPress={() =>[setSelectedDay('19'), setSelected('Fri'), setEnd('th')]}
                />
                <FAB
                    label='20'
                    style={styles.fab}
                    onPress={() => [setSelectedDay('20'), setSelected('Sat'), setEnd('th')]}
                />
                <FAB
                    label='21'
                    style={styles.fab}
                    onPress={() =>[setSelectedDay('21'),setSelected('Sun'), setEnd('st')]}
                />
                <FAB
                    label='22'
                    style={styles.fab}
                    onPress={() =>[setSelectedDay('22'), setSelected('Mon'), setEnd('nd')]}
                />
                <FAB
                    label='23'
                    style={styles.fab}
                    onPress={() =>[setSelectedDay('23'), setSelected('Tue'), setEnd('rd')]}
                />
            </View>
            <List.Section title={selectedDay+end+" Jul 2024, "+ selected}>
                <List.Accordion
                    title="6:00 AM"
                    left={props => <List.Icon {...props} icon="calendar-multiple" />}>
                    <List.Item title="Take Medicine1" description="1 Pill" left={props => <IconButton  onPress={() => navigation.navigate('CreateNewSchedule')} icon="clipboard-edit-outline"/>}
                        right={props => <Text><Checkbox /></Text>} />

                    <List.Item title="Go for a walk" description="30 mins"  left={props => <IconButton  onPress={() => navigation.navigate('CreateNewSchedule')} icon="clipboard-edit-outline"/>}
                        right={props => <Text><Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {
                            setChecked(!checked);
                        }} /></Text>} />
                </List.Accordion>

                <List.Accordion
                    title="7:00 AM"
                    left={props => <List.Icon {...props} icon="calendar-multiple" />}>
                    <List.Item title="Breakfast" description="Oats and Milk"  left={props => <IconButton  onPress={() => navigation.navigate('CreateNewSchedule')} icon="clipboard-edit-outline"/>}
                        right={props => <Text><Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {
                            setChecked(!checked);
                        }} /></Text>} />
                    <List.Item title="Medicine 2" description="1 Pill"  left={props => <IconButton  onPress={() => navigation.navigate('CreateNewSchedule')} icon="clipboard-edit-outline"/>}
                        right={props => <Text><Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {
                            setChecked(!checked);
                        }} /></Text>}
                    />
                </List.Accordion>
                <List.Accordion
                    title="8:00 PM"
                    left={props => <List.Icon {...props} icon="calendar-multiple" />}>
                    <List.Item title="First item"  left={props =><IconButton  onPress={() => navigation.navigate('CreateNewSchedule')} icon="clipboard-edit-outline"/>}
                        right={props => <Text><Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {
                            setChecked(!checked);
                        }} /></Text>} />
                    <List.Item title="Second item" left={props => <IconButton  onPress={() => navigation.navigate('CreateNewSchedule')} icon="clipboard-edit-outline"/>} right={props => <Text><Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {
                        setChecked(!checked);
                    }} /></Text>} />
                </List.Accordion>
            </List.Section>
            <Button style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 40 }} icon="plus" mode="elevated" onPress={() => navigation.navigate('CreateNewSchedule')}>
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
