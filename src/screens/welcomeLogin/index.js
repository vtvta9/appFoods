import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../../assets/themes/colors'
import ButtonCustomize from '../../components/button'
import Swiper from 'react-native-swiper'

const SignInWelcomeScreen = ({navigation}) => {
    return (
        <View style={
            {
                padding: 10, 
                justifyContent: 'space-between', 
                height: '100%', 
                width: '100%'
            }
        }>
            <Text style={
                {
                    fontSize: 20,
                    textAlign: 'center',
                    color: colors.orange
                }
            }>DISCOVER RESTAURANTS IN YOUR AREA</Text>
            <View style={{width: '100%', height: '60%',}}>
                <Swiper autoplay={true}>
                    <View style={
                        {
                            borderRadius: 10, 
                            borderColor: colors.sliver,
                            width: '100%', 
                            height: '100%', 
                            borderWidth: 1, 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }
                    }>
                        <Image
                            source={require('../../assets/images/food.png')}
                            style={{height: '90%',
                            width: '90%'}}
                        />
                    </View>
                    <View style={
                        {
                            borderRadius: 10, 
                            borderColor: colors.sliver,
                            width: '100%', 
                            height: '100%', 
                            borderWidth: 1, 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }
                    }>
                        <Image
                            source={require('../../assets/images/food1.png')}
                            style={{height: '90%',
                            width: '90%'}}
                        />
                    </View>
                </Swiper>
            </View>
            <View>
                <ButtonCustomize
                    onPress={() => navigation.navigate('SignIn')}
                    title='SIGN IN'
                    bg={colors.orange}
                    color={colors.white}
                    width='100%'
                    height={40}
                    fontSize={15}
                    borderRadius={7}
                    marginVertical={10}
                />
                <ButtonCustomize
                    onPress={() => navigation.navigate('SignUp')}
                    title='Create your account'
                    bg={colors.white}
                    color={colors.black}
                    width='100%'
                    height={40}
                    fontSize={15}
                    borderRadius={7}
                    marginVertical={10}
                    borderWidth={1}
                    borderColor={colors.black}
                />
            </View>
        </View>
    )
}

export default SignInWelcomeScreen