import { View, Text, Modal } from 'react-native'
import React, {useState} from 'react'
import RestaurantHeader from '../../components/restaurantHeader'
import { restaurantsData } from '../../constance/data'
import colors from '../../assets/themes/colors'
import { Icon } from 'react-native-elements'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import RestaurantMenu from '../../screens/restaurantTab/menu'
import RestaurantInfo from '../../screens/restaurantTab/info'
import RestaurantReview from '../../screens/restaurantTab/reviews'
import RestaurantGallery from '../../screens/restaurantTab/gallery'
import { widthScreen } from '../../constance'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MenuDetails from '../restaurantTab/menu/menuDetails'

const RestaurantHomeScreen = ({route, navigation}) => {
    const {id, restaurantName} = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: 'MENU'},
        {key: 'second', title: 'INFO'},
        {key: 'third', title: 'REVIEWS'},
        {key: 'fourth', title: 'GALLERY'}
    ]);
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <RestaurantMenu onPress={() => setModalVisible(true)} />; 
            case 'second':
                return <RestaurantInfo onPress={() => setModalVisible(true)}/>;
            case 'third':
                return <RestaurantReview onPress={() => setModalVisible(true)}/>;
            case 'fourth':
                return <RestaurantGallery onPress={() => setModalVisible(true)}/>;
            default:
                return null;
        }
    };
    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.orange}}
            style={{backgroundColor: colors.orange, heigth: 50}}
            labelStyle={{color: colors.white, fontSize: 16, fontWeight: 'bold'}}
        />
    )
    return (
        <View>
            <RestaurantHeader
                id={id}
                navigation={navigation}
            />
            {restaurantsData &&
                <View style={{padding: 10}}>
                    {restaurantsData[id].discount && 
                        <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18, color: colors.green}}>GET {restaurantsData[id].discount} ON FOOD TOTAL</Text>
                    }
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            {restaurantName &&
                                <Text style={{fontSize: 20, color: colors.black, fontWeight: 'bold'}}>{restaurantName}</Text>
                            }
                            <Text style={{fontSize: 18}}>Burgers, Wraps, MilkShakes,...</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    {restaurantsData[id].rating &&
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Icon
                                                type='material-community'
                                                name='star'
                                                color={colors.sliver}
                                                size={20}
                                            />
                                            <Text>{restaurantsData[id].rating}</Text>
                                        </View>
                                    }
                                    {restaurantsData[id].reviews && 
                                        <Text style={{marginLeft: 5}}>({restaurantsData[id].reviews}+)</Text>
                                    }
                                </View>
                                {restaurantsData[id].local &&
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Icon
                                            type='material-community'
                                            name='map-marker'
                                            color={colors.sliver}
                                            size={20}
                                        />
                                        <Text>{restaurantsData[id].local}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{paddingHorizontal: 5, alignItems: 'center'}}>
                                <Text style={{color: colors.black, fontSize: 17, fontWeight: 'bold'}}>Collect</Text>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>5</Text>
                                    <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>min</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal: 5, alignItems: 'center'}}>
                                <Text style={{color: colors.black, fontSize: 17, fontWeight: 'bold'}}>Delivery</Text>
                                <View style={{borderRadius: 50,paddingHorizontal: 10 , alignItems: 'center', backgroundColor: colors.orange}}>
                                    <Text style={{fontSize: 18, color: colors.white, fontWeight: 'bold'}}>15</Text>
                                    <Text style={{fontSize: 18, color: colors.white, fontWeight: 'bold'}}>min</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            }
            <View style={{height: '55%'}}>
                <TabView
                    navigationState={{index, routes}}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: widthScreen }}
                    renderTabBar={renderTabBar}
                    navigation={navigation}
                />
            </View>
            <TouchableOpacity>
                <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: colors.orange}}>
                    <Text style={{color: colors.white, fontSize: 18, fontWeight: 'bold'}}>View Cart</Text>
                    <Text style={{color: colors.white, fontSize: 18, fontWeight: 'bold', borderWidth: 1, borderRadius: 50, paddingHorizontal: 3, borderColor: colors.white}}>0</Text>
                </View>
            </TouchableOpacity>
            <Modal
                visible={modalVisible} 
                animationType='slide'
            >  
                <View style={{paddingBottom: 10, paddingLeft: 10, backgroundColor: colors.orange, flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        name='arrow-left'
                        type='material-community'
                        color={colors.black}
                        size={25}
                        onPress={() => setModalVisible(false)}
                    />
                    <Text style={{marginLeft: 10, color: colors.black, fontSize: 25, fontWeight: 'bold'}}>Menu</Text>
                </View>
                <MenuDetails
                    onPress={() => navigation.navigate('Preference')}
                />
            </Modal>
        </View>
    )
}

export default RestaurantHomeScreen