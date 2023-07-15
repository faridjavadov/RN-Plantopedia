import React, { useState } from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList, Switch } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../redux/store/store";
import { handleAlarm } from "../../redux/slicers/alarmSlicer";
import Ionicons from 'react-native-vector-icons/Ionicons'


const AlarmScreen = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: StateType) => state.AlarmSlice)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        let strdate = date.toString()
        dispatch(handleAlarm(strdate))
        hideDatePicker();
    };

    const renderItem = ({ item }: any) => {
        const date = new Date(item);
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return (
            <View style={{ alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.5, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 40, color: '#002140' }}>{time}</Text>
                <Switch />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <TouchableOpacity><Text style={{ alignSelf: 'flex-start', color: '#002140', fontSize: 16 }}>Edit</Text></TouchableOpacity>

                </View>
                <View>
                    <Text style={{ alignSelf: 'center', color: '#002140', fontSize: 16 }}>Alarm</Text>

                </View>
                <View>
                    <TouchableOpacity onPress={showDatePicker}><Ionicons name="add-outline" size={30} color={'#002140'} style={{ alignSelf: 'flex-end' }} /></TouchableOpacity>

                </View>

            </View>

            <View style={{height:'82%'}}> 
                <FlatList
                    data={data}
                    ItemSeparatorComponent={() => { return (<View style={{ height: 10 }} />) }}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                />
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};
export default AlarmScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DEEAD8',
        paddingVertical: '5%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

})