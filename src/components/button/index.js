import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from 'react-native-elements'

const ButtonCustomize = (
    {
        title, 
        color, 
        bg, 
        width, 
        height,
        fontSize,
        borderRadius,
        borderWidth,
        borderColor,
        marginVertical,
        icon,
        onPress,
        iconCategory
        
    }
    ) => {
    return (
        <TouchableOpacity style={
                {
                    marginVertical: marginVertical,
                    borderWidth: borderWidth, 
                    borderColor: borderColor, 
                    borderRadius: borderRadius, 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: bg, 
                    width: width,
                    height: height,
                    position: 'relative',
                }
            }
            onPress={onPress}
        >
            {icon && iconCategory ?
                <View style={{borderRadius: 50,position: 'absolute', top: '10%', backgroundColor: colors.white, padding: 10}}>
                    <Image 
                        style={{height: 40, width: 40}}
                        source={icon}
                    />
                </View>
                :
                <Image 
                    style={{height: 20, width: 20, position: 'absolute', left: '20%'}}
                    source={icon}
                />
            }
            {icon && iconCategory ?
                <Text style={{color: color, fontSize: fontSize, marginTop: '80%'}}>{title}</Text>
                :
                <Text style={{color: color, fontSize: fontSize}}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default ButtonCustomize