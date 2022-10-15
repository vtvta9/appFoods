// import { View, Text } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from 'react-navigation-drawer'
// import ClientTab from '../clientTab';
// import { Icon } from 'react-native-elements';
// import colors from '../../assets/themes/colors';

// const DrawerNavigator = () => {
//     const Drawer = createDrawerNavigator();
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen
//                 name='ClientTab'
//                 component={ClientTab}
//                 options={{
//                     title: 'Client',
//                     drawerIcon : ({focussed, size}) => (
//                         <Icon
//                             type='material-community'
//                             name='menu'
//                             color={focussed ? colors.orange : colors.sliver}
//                             size={size}
//                         />
//                     )
//                 }}
//             />
//         </Drawer.Navigator>
//     )
// }

// export default DrawerNavigator