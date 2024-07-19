import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DatePickerInput, TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput, Button, IconButton, MD3Colors } from 'react-native-paper';
export default function CreateNewSchedule({ navigation }) {

    const [startDate, setStartDate] = React.useState(undefined);
    const [endDate, setEndDate] = React.useState(undefined);
    const [visible, setVisible] = React.useState(false);
    const [time, setTime] = React.useState('');
    const [showComment, setShowComment] = React.useState(false);


    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setVisible(false);
            setTime(hours + ':' + minutes)
        },
        [setVisible]
    );

    return (
        <SafeAreaProvider>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '40%', marginTop: '10%', marginLeft: '2%', flexDirection: 'row' }}>

                    <DatePickerInput
                        locale="en"
                        label="Start date"
                        value={startDate}
                        onChange={(d) => setStartDate(d)}
                        inputMode="end"
                    />
                </View>
                <View style={{ width: '40%', marginTop: '10%', marginLeft: '2%', flexDirection: 'row' }}>

                    <DatePickerInput
                        locale="en"
                        label="End date"
                        value={endDate}
                        onChange={(d) => setEndDate(d)}
                        inputMode="end"
                    />
                </View>
            </View>
            <View style={{ marginTop: '10%', marginLeft: '2%', flexDirection: 'row' }}>
                <TextInput label='Task' style={{ width: '40%' }} right={<TextInput.Icon icon="pencil" />} />
                <TextInput label='Pick Time' value={time} style={{ width: '30%', marginLeft: '2%' }} right={<TextInput.Icon icon="timetable" onPress={() => setVisible(true)} />} />
                <TimePickerModal
                    visible={visible}
                    onDismiss={onDismiss}
                    onConfirm={onConfirm}
                    hours={12}
                    minutes={14}
                    use24HourClock={true}
                />
                <IconButton icon="comment" iconColor={MD3Colors.primary0} onPress={()=>{setShowComment(true)}} />
            </View>
            {showComment && <View>
                <TextInput label='Comment' value={time} style={{ width: '80%', marginLeft: '2%', marginTop: '5%' }} />
            </View>}

            <View>
                <Button style={{ marginTop: '10%', width: '50%' }} icon="plus" mode="elevated" >
                    Add New Task
                </Button>
            </View>

            <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 40, flexDirection: 'row', right: 15 }}>
                <Button style={{ width: '80%' }} mode="elevated" onPress={() =>  navigation.navigate('DailySchedule')}>
                    Save
                </Button>
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
