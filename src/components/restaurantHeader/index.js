import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthScreen } from '../../constance'
import { Icon } from 'react-native-elements'
import colors from '../../assets/themes/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { restaurantsData } from '../../constance/data'
import { Animated } from 'react-native'

const RestaurantHeader = ({id, navigation}) => {
    const [liked, setLiked] = useState(false);
    const [visible, setVisible] = useState(false);
    const currenValue = new Animated.Value(1);
    useEffect(() => {
        if(liked){
            Animated.spring(currenValue, {
                toValue: 3,
                friction: 2,
                useNativeDriver: true
            }).start(() => {
                Animated.spring(currenValue, {
                    toValue: 1,
                    friction: 2,
                    useNativeDriver: true
                }).start(() => {
                    setVisible(false);
                })
            })
        }
    }, [liked])
    return (
        <ImageBackground
            source={restaurantsData[id].image}
            style={{width: widthScreen, height: 150}}
            resizeMode='cover'
        >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: colors.sliver, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}
                >
                    <Icon
                        type='material-community'
                        name='arrow-left'
                        color={colors.black}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        setLiked(!liked);
                        setVisible(true);
                    }}
                    style={{ backgroundColor: colors.sliver, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}
                >
                    <Icon
                        type='material-community'
                        name={liked ? 'cards-heart' : 'cards-heart-outline'}
                        color={colors.red}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View>
                {liked && visible &&
                    <Animated.View style={{transform: [{scale: currenValue}]}}>
                        <Icon
                            type='material-community'
                            name='cards-heart'
                            color={colors.red}
                            size={50}
                        />
                    </Animated.View>
                }
            </View>
        </ImageBackground>
    )
}

export default RestaurantHeader