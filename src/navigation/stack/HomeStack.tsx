import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/home/HomeScreen';
import DetailsScreen from '../../screens/home/DetailsScreen';

const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})