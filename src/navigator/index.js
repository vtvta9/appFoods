import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import colors from '../assets/themes/colors'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './authNavigator'
import ClientTab from './clientTab'
import { GlobalContext } from '../context/Provider'

const AppContainer = () => {
    const {signedIn: {userToken}, dispatchSignedIn} = useContext(GlobalContext);
    return (
        <NavigationContainer>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.orange}
            />
            {userToken === 'singed-in' ? <ClientTab/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppContainer