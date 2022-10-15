import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInWelcomeScreen from '../../screens/welcomeLogin'
import SignInScreen from '../../screens/login'
import ClientTab from '../clientTab'
import RestaurantMapScreen from '../../screens/restaurantMap'
import DrawerNavigator from '../drawerNavigator'
import SignUpScreen from '../../screens/signUp'

const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}} initialRouteName='SignInWelcome'>
            <AuthStack.Screen name='SignInWelcome' component={SignInWelcomeScreen}/>
            <AuthStack.Screen name='SignIn' component={SignInScreen}/>
            <AuthStack.Screen name='SignUp' component={SignUpScreen}/>
            <AuthStack.Screen name='ClientTab' component={ClientTab}/>
            <AuthStack.Screen name='RestaurantMap' component={RestaurantMapScreen}/>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator