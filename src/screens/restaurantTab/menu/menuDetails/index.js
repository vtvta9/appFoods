import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { widthScreen } from '../../../../constance'
import colors from '../../../../assets/themes/colors'
import MenuCard from '../../../../components/menuCard'

const MenuDetails = ({onPress}) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: 'BEEF'},
        {key: 'second', title: 'CHICKEN'},
        {key: 'third', title: 'VEGGIE'},
        {key: 'fourth', title: 'SHARE'}
    ]);
    const renderScene = ({route}) => {
        switch (route.key) {
            case 'first':
                return <MenuCard
                            name='Big Mac'
                            introduce='Two 100% features two 100% fresh beef. Two 100% features two 100% fresh beef'
                            price='$40'
                            image={require('../../../../assets/images/food.png')}
                            onPress={onPress}
                        />; 
            case 'second':
                return <MenuCard
                            name='Big Mac'
                            introduce='Two 100% features two 100% fresh beef. Two 100% features two 100% fresh beef'
                            price='$40'
                            image={require('../../../../assets/images/food.png')}
                            onPress={onPress}
                        />; 
            case 'third':
                return <MenuCard
                            name='Big Mac'
                            introduce='Two 100% features two 100% fresh beef. Two 100% features two 100% fresh beef'
                            price='$40'
                            image={require('../../../../assets/images/food.png')}
                            onPress={onPress}
                        />; 
            case 'fourth':
                return <MenuCard
                            name='Big Mac'
                            introduce='Two 100% features two 100% fresh beef. Two 100% features two 100% fresh beef'
                            price='$40'
                            image={require('../../../../assets/images/food.png')}
                            onPress={onPress}
                        />; 
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
        <View style={{height: '100%'}}>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: widthScreen }}
                renderTabBar={renderTabBar} 
            />
        </View>
    )
}

export default MenuDetails