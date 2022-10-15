import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { colors } from 'react-native-elements'
import CardRestaurant from '../../components/cardRestaurant'
import { restaurantsData } from '../../constance/data'

const SearchResult = ({route, navigation}) => {
    return (
        <View style={{ marginBottom: 50}}>
            <Text style={{paddingHorizontal: 10, fontSize: 20, color: colors.black, fontWeight: 'bold'}}>{restaurantsData.length} Result for {route.params.item}</Text>
            <View style={{alignItems: 'center'}}>
                <FlatList
                    data={restaurantsData}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    renderItem={({item, index}) => (
                        <Pressable onPress={() => navigation.navigate('RestaurantHome', {id: index, restaurantName: item.name})}>
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
    )
}

export default SearchResult