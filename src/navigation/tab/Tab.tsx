import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoriteScreen from '../../screens/favorite/FavoriteScreen';
import HomeStack from '../stack/HomeStack';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import SettingsScreen from '../../screens/settings/SettingsScreen';
import AlarmScreen from '../../screens/alarm/AlarmScreen';

const TabNavigation = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        height: '8%',
        position: 'absolute',
        borderTopWidth: 0,
        shadowOffset: {
          width: 40,
          height: 40
        },
      }
    }}>
      <TabNavigation.Screen name='HomeStack' component={HomeStack} options={{
        tabBarIcon: ({ focused }) => {
          return (<View>
            <Feather name='home' size={30} color={focused ? '#002140' : '#435B71'} />
          </View>)
        }
      }} />

      <TabNavigation.Screen name='FavoriteScreen' component={FavoriteScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (<View>
            <MaterialIcons name='favorite-outline' size={30} color={focused ? '#002140' : '#435B71'} />
          </View>)
        }
      }} />
      <TabNavigation.Screen name='AlarmScreen' component={AlarmScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (<View>
            <Ionicons name='ios-alarm-outline' size={30} color={focused ? '#002140' : '#435B71'} />
          </View>)
        }
      }} />
      <TabNavigation.Screen name='SettingsScreen' component={SettingsScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (<View>
            <Ionicons name='ios-settings-outline' size={30} color={focused ? '#002140' : '#435B71'} />
          </View>)
        }
      }} />

    </TabNavigation.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({})