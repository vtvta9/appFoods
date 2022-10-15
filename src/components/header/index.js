import { View, Text } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import colors from '../../assets/themes/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = () => {
    return (
        <View style={{alignItems: 'center', backgroundColor: colors.orange, flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
            <TouchableOpacity>
                <Icon
                    type='material-community'
                    name='menu'
                    color={colors.white}
                    size={30}
                />
            </TouchableOpacity>
            <Text style={{color: colors.white, fontSize: 20}}>ExpressFood</Text>
            <TouchableOpacity style={{position: 'relative'}}>
                <Icon
                    type='material-community'
                    name='cart'
                    color={colors.white}
                    size={30}
                />
                <View style={{bottom: 0, right: 0, position: 'absolute', borderRadius: 100, width: 15, height: 15,backgroundColor: colors.red,  alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: colors.white, fontSize: 12}}>0</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default Header