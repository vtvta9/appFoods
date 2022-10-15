import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import colors from '../../assets/themes/colors'

const Input = (
    {
        placeholder, 
        width, 
        height, 
        borderWidth, 
        bg, 
        color,
        padding,
        borderRadius,
        borderColor,
        marginVertical,
        icon,
        secureTextEntry,
        setIsSecureTextEntry,
        isSecureTextEntry,
        onChangeText,
        value,
        keyboardType
    }
    ) => {
    return (
        <View style={{position: 'relative'}}>
            <TextInput
                style={{backgroundColor: bg, borderColor: borderColor, marginVertical: marginVertical}}
                placeholder={placeholder}
                width={width}
                height={height}
                borderWidth={borderWidth}
                color={color}
                padding={padding}
                borderRadius={borderRadius}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType && keyboardType}
                secureTextEntry={secureTextEntry && isSecureTextEntry ? true : false}
            />
            {icon && 
                <TouchableOpacity 
                    onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
                    style={
                        {
                            position: 'absolute', 
                            top: Math.floor(height/2), 
                            right: 20
                        }
                    }>
                    <Icon
                        type='material-community'
                        name={icon}
                        color={colors.sliver}
                        size={20}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Input