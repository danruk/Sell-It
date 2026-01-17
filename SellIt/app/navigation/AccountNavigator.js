import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountsScreen from '../screens/AccountsScreen';
import MessagesScreen from '../screens/MessagesScreen';

 
const Stack=createNativeStackNavigator();

const AccountNavigator = () => (
<Stack.Navigator >
    <Stack.Screen name='AccountHome' component={AccountsScreen}/>
    <Stack.Screen name='Messages' component={MessagesScreen}/>
</Stack.Navigator>
);
export default AccountNavigator;
