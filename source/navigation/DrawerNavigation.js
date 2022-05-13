import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from '../screens/MenuScreen';
import MycartScreen from '../screens/MyCartScreen';
import OfferScreen from '../screens/OfferScreen';
import LastOrders from '../screens/LastorderScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import SettingScreen from '../screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomSidebarMenu from './CustomSidebarMenu';
import { DrawernString } from '../utils/constant';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fontSizes } from '../utils/Fontsize';

const Drawer = createDrawerNavigator();
export default function Drawernavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: Colors.white,
                drawerInactiveTintColor: Colors.white,
                drawerStyle: {
                    backgroundColor: Colors.blackWithOpacity,
                },
                drawerLabelStyle: {
                    ...fontSizes.headingfont,
                    fontWeight: 'bold'
                }
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name={DrawernString.Menu} component={MenuScreen}
                options={{
                    drawerIcon: (({ focused }) => <Ionicons name={'fast-food-sharp'} size={hp('3.5%')} color={Colors.white} />),
                }} />
            <Drawer.Screen name={DrawernString.Offers} component={OfferScreen}
                options={{ drawerIcon: (({ focused }) => <MaterialIcons name={'local-offer'} size={hp('3.5%')} color={Colors.white} />) }} />
            <Drawer.Screen name={DrawernString.Mycart} component={MycartScreen}
                options={{ drawerIcon: (({ focused }) => <Feather name={'shopping-cart'} size={hp('3.5%')} color={Colors.white} />) }} />
            <Drawer.Screen name={DrawernString.Lastorders} component={LastOrders}
                options={{ drawerIcon: (({ focused }) => <MaterialIcons name={'watch-later'} size={hp('3.5%')} color={Colors.white} />) }} />
            <Drawer.Screen name={DrawernString.Favourite} component={FavouriteScreen}
                options={{ drawerIcon: (({ focused }) => <Entypo name={'star-outlined'} size={hp('3.5%')} color={Colors.white} />) }} />
            <Drawer.Screen name={DrawernString.Setting} component={SettingScreen}
                options={{ drawerIcon: (({ focused }) => <Ionicons name={'settings-outline'} size={hp('3.5s%')} color={Colors.white} />) }} />
        </Drawer.Navigator>
    )
}

