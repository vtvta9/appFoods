import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { widthScreen } from '../../constance'
import { colors } from 'react-native-elements'

const MenuCard = ({
    name,
    introduce,
    price,
    onPress
}) => {
    return (
        <>
            <Pressable 
                onPress={onPress}
                style={{padding: 10, justifyContent: 'space-between', flexDirection: 'row', width: widthScreen, alignItems: 'center'}}
            >
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>{name}</Text>
                    <Text>{introduce}</Text>
                    <Text style={{fontWeight: 'bold'}}>Price: {price}</Text>
                </View>
                <View style={{width: '30%'}}>
                    <Image
                        source={require('../../assets/images/food.png')}
                        style={{height: 100, width: '100%'}}
                    />
                </View>
            </Pressable>
            <Pressable 
                onPress={onPress}
                style={{padding: 10, justifyContent: 'space-between', flexDirection: 'row', width: widthScreen, alignItems: 'center'}}
            >
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>{name}</Text>
                    <Text>{introduce}</Text>
                    <Text style={{fontWeight: 'bold'}}>Price: {price}</Text>
                </View>
                <View style={{width: '30%'}}>
                    <Image
                        source={require('../../assets/images/food.png')}
                        style={{height: 100, width: '100%'}}
                    />
                </View>
            </Pressable>
            <Pressable 
                onPress={onPress}
                style={{padding: 10, justifyContent: 'space-between', flexDirection: 'row', width: widthScreen, alignItems: 'center'}}
            >
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>{name}</Text>
                    <Text>{introduce}</Text>
                    <Text style={{fontWeight: 'bold'}}>Price: {price}</Text>
                </View>
                <View style={{width: '30%'}}>
                    <Image
                        source={require('../../assets/images/food.png')}
                        style={{height: 100, width: '100%'}}
                    />
                </View>
            </Pressable>
            <Pressable 
                onPress={onPress}
                style={{padding: 10, justifyContent: 'space-between', flexDirection: 'row', width: widthScreen, alignItems: 'center'}}
            >
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>{name}</Text>
                    <Text>{introduce}</Text>
                    <Text style={{fontWeight: 'bold'}}>Price: {price}</Text>
                </View>
                <View style={{width: '30%'}}>
                    <Image
                        source={require('../../assets/images/food.png')}
                        style={{height: 100, width: '100%'}}
                    />
                </View>
            </Pressable>
        </>
        
        
    )
}

export default MenuCard