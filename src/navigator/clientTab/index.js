import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home'
import MyOrderScreen from '../../screens/myOrder'
import ProfileScreen from '../../screens/myAccount'
import { Icon } from 'react-native-elements'
import colors from '../../assets/themes/colors'
import ClientNavigator from '../clientStack'

const ClientTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
            screenOptions={{headerShown: false, tabBarActiveTintColor: colors.orange}}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, size}) => (
                            <Icon
                                type='material-comunity'
                                name='home'
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
            <Tab.Screen 
                name='Search' 
                component={ClientNavigator}
                options={
                    {
                        tabBarLabel: 'Search',
                        tabBarIcon: ({color, size}) => (
                            <Icon
                                type='material-comunity'
                                name='search'
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
            <Tab.Screen 
                name='MyOrder' 
                component={MyOrderScreen}
                options={
                    {
                        tabBarLabel: 'Order',
                        tabBarIcon: ({color, size}) => (
                            <Icon
                                type='material-community'
                                name='cart'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <Tab.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={
                    {
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({color, size}) => (
                            <Icon
                                type='MaterialIcons'
                                name='supervised-user-circle'
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default ClientTab