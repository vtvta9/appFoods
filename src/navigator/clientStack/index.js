import React, { useLayoutEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../../screens/search'
import SearchResult from '../../screens/searchResult'
import RestaurantHomeScreen from '../../screens/restaurantHome'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import PreferenceScreen from '../../screens/preference'

const ClientNavigator = ({navigation, route}) => {
    const AuthStack = createStackNavigator();
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === 'RestaurantHome'){
            navigation.setOptions({tabBarVisible: false});
        }
        else{
            navigation.setOptions({tabBarVisible: true});
        }
    }, [route, navigation])
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}} initialRouteName='Search'>
            <AuthStack.Screen name='Search' component={SearchScreen}/>
            <AuthStack.Screen name='SearchResult' component={SearchResult}/>
            <AuthStack.Screen name='RestaurantHome' component={RestaurantHomeScreen}/>
            <AuthStack.Screen name='Preference' component={PreferenceScreen}/>
        </AuthStack.Navigator>
    )
}

export default ClientNavigator