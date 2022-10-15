import { View, Text, ScrollView, ImageBackground} from 'react-native'
import React, {useState} from 'react'
import {widthScreen} from '../../constance/index'
import colors from '../../assets/themes/colors'
import { CheckBox } from 'react-native-elements'

const PreferenceScreen = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{flex: 1, width: widthScreen}}>
            <ScrollView>
                <View style={{height: 150, width: '100%'}}>
                    <ImageBackground
                        style={{height: '100%', width: '100%'}}
                        source={require('../../assets/images/food.png')}
                    >
                        <Text style={{color: colors.white, fontSize: 25, fontWeight: 'bold', left: '20%', top: '15%'}}>
                            Choose a preference
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>Big Mac</Text>
                    <Text>Mc Features two 100% fresh beef burger patties that are hot</Text>
                </View>
                <View>
                    <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.sliver}}>
                        <Text style={{color: colors.black, fontWeight: 'blod'}}>Choose a meal type</Text>
                        <Text>REQUIRED</Text>
                    </View>
                    <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: colors.black, fontWeight: 'blod'}}>-------</Text>
                        <Text style={{fontWeight: 'bold'}}>R70.20</Text>
                    </View>
                </View>
                <View>
                    <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.sliver}}>
                        <Text style={{color: colors.black, fontWeight: 'blod'}}>Choose your 2 dips</Text>
                        <Text>2 REQUIRED</Text>
                    </View>
                    <View>
                        <View style={{paddingRight: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox
                                    checkedIncon='dot-circle-o'
                                    uncheckedIncon='circle-o'
                                    checked={true}
                                    style={{padding: 0, margin: 0}}
                                />
                                <Text style={{color: colors.black, fontWeight: 'bold'}}>-------</Text>
                            </View>
                            <Text style={{fontWeight: 'bold'}}>R70.20</Text>
                        </View>
                        <View style={{paddingRight: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox
                                    checkedIncon='dot-circle-o'
                                    uncheckedIncon='circle-o'
                                    checked={false}
                                />
                                <Text style={{color: colors.black, fontWeight: 'blod'}}>-------</Text>
                            </View>
                            <Text style={{fontWeight: 'bold'}}>R70.20</Text>
                        </View>
                        <View style={{paddingRight: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox
                                    checkedIncon='dot-circle-o'
                                    uncheckedIncon='circle-o'
                                    checked={false}
                                />
                                <Text style={{color: colors.black, fontWeight: 'blod'}}>-------</Text>
                            </View>
                            <Text style={{fontWeight: 'bold'}}>R70.20</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PreferenceScreen