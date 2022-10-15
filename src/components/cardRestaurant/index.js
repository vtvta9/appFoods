import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { colors } from 'react-native-elements'
import {Icon} from 'react-native-elements'
import {widthScreen} from '../../constance/index'

const CardRestaurant = ({
    image,
    rating,
    local,
    address,
    name,
    reviews,
    width
}) => {
    return (
        <View style={
            {
                borderRadius: 10, 
                margin: 10, 
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                width: widthScreen*width,
            }
        }>
            <ImageBackground 
                source={image}
                resizeMode='cover'
                style={{height: 120, width: '100%', position: 'relative'}}
            >
                <View style={{right: '10%', position: 'absolute', alignItems: 'center'}}>
                    <Text style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>{rating}</Text>
                    <Text style={{color: colors.white, fontSize: 16}}>{reviews} reviews</Text>
                </View>
            </ImageBackground>
            <Text style={{paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: colors.black}}>{name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', marginLeft: 20}}>
                    <Icon
                        type='material-community'
                        name='map-marker'
                        color={colors.sliver}
                        size={20}
                    />
                    <Text>{local}</Text>
                </View>
                <Text style={{marginLeft: 20, paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: colors.sliver}}>{address}</Text>
            </View>
        </View>
    )
}

export default CardRestaurant