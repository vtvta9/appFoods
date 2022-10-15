import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../../assets/themes/colors'

const RestaurantMenu = ({onPress}) => {
    return (
        <View style={{paddingHorizontal: 10}}>
            <Pressable 
                onPress={onPress}
                style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}
            >
                <Icon
                    type='material-community'
                    name='star'
                    color={colors.yellow}
                    size={20}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10}}>LIMITED OFFER</Text>
            </Pressable>
            <Pressable 
                onPress={onPress}
                style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}
            >
                <Icon
                    type='material-community'
                    name='star'
                    color={colors.yellow}
                    size={20}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10}}>LIMITED OFFER</Text>
            </Pressable>
            <Pressable 
                onPress={onPress}
                style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}
            >
                <Icon
                    type='material-community'
                    name='star'
                    color={colors.yellow}
                    size={20}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10}}>LIMITED OFFER</Text>
            </Pressable>
            <Pressable 
                onPress={onPress}
                style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}
            >
                <Icon
                    type='material-community'
                    name='star'
                    color={colors.yellow}
                    size={20}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10}}>LIMITED OFFER</Text>
            </Pressable>
        </View>
    )
}

export default RestaurantMenu