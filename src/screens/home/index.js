import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import ButtonCustomize from '../../components/button'
import colors from '../../assets/themes/colors'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {Icon} from 'react-native-elements'
import {categories} from '../../constance/data'
import CardRestaurant from '../../components/cardRestaurant'
import { restaurantsData } from '../../constance/data'
import CountDown from 'react-native-countdown-component'
import axios from 'axios'

const HomeScreen = ({navigation}) => {
    const [delivery, setDelivery] = useState(true);
    const [indexCategories, setIndexCategories] = useState(0);
    return (
        <View style={{paddingBottom: 50, position: 'relative'}}>
            <Header/>
            <ScrollView>
                <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <ButtonCustomize
                        onPress={() => setDelivery(true)}
                        title='Delivery'
                        bg={delivery ? colors.orange : colors.white}
                        color={delivery ? colors.white : colors.black}
                        width='40%'
                        height={30}
                        fontSize={15}
                        borderRadius={10}
                        marginVertical={10}
                    />
                    <ButtonCustomize
                        onPress={() => {
                            setDelivery(false);
                            navigation.navigate('RestaurantMap');
                        }}
                        title='Pick Up'
                        bg={delivery ? colors.white : colors.orange}
                        color={delivery ? colors.black : colors.white}
                        width='40%'
                        height={30}
                        fontSize={15}
                        borderRadius={10}
                        marginVertical={10}
                    />
                </View>
                {/* ----------------------- */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{borderRadius: 20, paddingVertical: 5, paddingHorizontal: 20, backgroundColor: colors.sliver, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon
                                type='material-community'
                                name='map-marker'
                                color={colors.white}
                                size={30}
                            />
                            <Text>82 Nguyễn Lương Bằng</Text>
                        </View>
                        <View style={{marginLeft: 10, paddingHorizontal: 10, borderRadius: 20, backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon
                                type='material-community'
                                name='clock'
                                color={colors.sliver}
                                size={30}
                            />
                            <Text>Now</Text>
                        </View>
                    </View>
                    <Icon
                        type='material-community'
                        name='tune'
                        color={colors.sliver}
                        size={30}
                    />
                </View>
                {/* -------------------------- */}
                <View>
                    <View style={{marginVertical: 20, backgroundColor: colors.sliver, padding: 10}}>
                        <Text style={{color: colors.black, fontSize: 20}}>Categories</Text>
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={categories}
                            keyExtractor={(item) => item.id}
                            renderItem={({item, index}) => {
                                return(
                                    <Pressable
                                        onPress={() => setIndexCategories(item.id)}
                                    >
                                        <View style={indexCategories === index ? {borderRadius: 20, marginHorizontal: 10, height: 100, width: 100, backgroundColor: colors.orange, justifyContent: 'space-around',alignItems: 'center' } : {borderRadius: 20, marginHorizontal: 10, height: 100, width: 100, backgroundColor: colors.white, justifyContent: 'space-around',alignItems: 'center' }}>
                                            <View style={{borderRadius: 20, padding: 10, height: '60%', width: '60%',backgroundColor: colors.white}}>
                                                <Image 
                                                    style={{height: '100%', width: '100%'}}
                                                    source={item.image}
                                                />
                                            </View>
                                            <Text style={indexCategories === index ? {color: colors.white, fontSize: 16} : {color: colors.black, fontSize: 16}}>{item.name}</Text>
                                        </View>
                                    </Pressable>
                                )
                            }}
                        />
                    </View>
                </View>
                {/* --------------------- */}
                <View>
                    <View style={{marginVertical: 20, backgroundColor: colors.sliver, padding: 10}}>
                        <Text style={{color: colors.black, fontSize: 20}}>Free Delivery Now</Text>
                    </View>
                    <View style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <Text>Options changing in</Text>
                        <CountDown
                            until={7200}
                            size={14}
                            digitStyle={{backgroundColor: colors.green}}
                            digitTxtStyle={{color: colors.white}}
                            timeToShow={['M', 'S']}
                            timeLabels={{m: 'Min', s: 'Sec'}}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={restaurantsData}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({item, index}) => (
                                <Pressable>
                                    <CardRestaurant
                                        image={item.image}
                                        rating={item.rating}
                                        local={item.local}
                                        address={item.address}
                                        name={item.name}
                                        reviews={item.reviews}
                                        width={0.8}
                                    />
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
                {/* -------------------- */}
                <View>
                    <View style={{marginVertical: 20, backgroundColor: colors.sliver, padding: 10}}>
                        <Text style={{color: colors.black, fontSize: 20}}>Promotion Available</Text>
                    </View>
                    <View>
                        <FlatList
                            data={restaurantsData}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({item, index}) => (
                                <Pressable>
                                    <CardRestaurant
                                        image={item.image}
                                        rating={item.rating}
                                        local={item.local}
                                        address={item.address}
                                        name={item.name}
                                        reviews={item.reviews}
                                        width={0.95}
                                    />
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
                {/* ------------------------ */}
                <View>
                    <View style={{marginVertical: 20, backgroundColor: colors.sliver, padding: 10}}>
                        <Text style={{color: colors.black, fontSize: 20}}>Restaurant in your area</Text>
                    </View>
                    <View>
                        <FlatList
                            data={restaurantsData}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({item, index}) => (
                                <Pressable>
                                    <CardRestaurant
                                        image={item.image}
                                        rating={item.rating}
                                        local={item.local}
                                        address={item.address}
                                        name={item.name}
                                        reviews={item.reviews}
                                        width={0.95}
                                    />
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* --------------------------- */}
            {
                delivery &&
                <View style={{bottom: '20%', borderRadius: 50, alignItems: 'center', justifyContent: 'center', right: 20, position: 'absolute', width: 60, height: 60, backgroundColor: colors.white}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RestaurantMap')}
                    >
                        <Icon
                            type='material-community'
                            name='map-marker'
                            color={colors.orange}
                            size={30}
                        />
                        <Text>Map</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default HomeScreen