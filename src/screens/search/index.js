import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { widthScreen } from '../../constance'
import colors from '../../assets/themes/colors'
import { Icon } from 'react-native-elements'
import {categories} from '../../constance/data'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = ({navigation}) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const handleSearch = () => {
        const res = categories.filter(item => {
            return item.name.includes(value);
        })
        setData(res);
    }
    return (
        <View style={{padding: 10}}>
            <View style={{paddingHorizontal: 10 ,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10 ,width: widthScreen*0.2, height: 50, borderWidth: 1, borderColor: colors.sliver, borderRightWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                        name='search'
                        type='material-icons'
                        size={30}
                        color={colors.sliver}
                        
                    />
                </View>
                <TextInput
                    onChangeText={(text) => setValue(text)}
                    borderWidth={1}
                    borderLeftWidth={0}
                    borderColor={colors.sliver}
                    height={50}
                    width={widthScreen*0.8}
                    placeholder='Search...'
                    borderTopRightRadius={10}
                    borderBottomRightRadius={10}
                />
            </View>
            <Text style={{fontSize: 20, paddingTop: 10}}>Top Categories</Text>
            <View style={{alignItems: 'center'}}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    horizontal={false}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={{margin: 10, height: 150,width: widthScreen*0.4 ,borderWidth: 0.2}}
                            onPress={() => navigation.navigate('SearchResult', {item: item.name})}
                        >
                            <ImageBackground 
                                source={item.image}
                                style={{height: '100%', width: '100%'}}
                                resizeMode='cover'
                            >
                                <Text style={{color: colors.white, fontSize: 20, top: '40%', left: '25%'}}>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default SearchScreen