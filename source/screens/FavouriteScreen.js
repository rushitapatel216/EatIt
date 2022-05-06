import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HeaderComponant from '../Components/large/HeaderComponant';
import Colors from '../utils/colors';
import { DataString, DrawernString } from '../utils/constant';
import { DrawerActions } from '@react-navigation/native';
import { fontSizes } from '../utils/Fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Entree } from '../dummyData';


export default function FavouriteScreen(props) {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={item.src} />
                <View>
                    <Text style={[styles.text, { color: Colors.primaryColor }]}>{item.title}</Text>
                    <Text style={[styles.text, { color: Colors.gray, fontSize: wp('4%') }]}>{item.price}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.headercontainer}>
            <HeaderComponant
                Iconleft={<EvilIcons name={'navicon'} size={26} color={Colors.white} style={styles.icon} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />}
                title={DrawernString.Favourite}
                IconRight={<Text style={styles.text}>Edit</Text>}
            />
            {/* <FlatList
                data={Entree}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    headercontainer: {
        position: 'absolute'
    },
    container: {
        flexDirection: 'row',

    },
    text: {
        color: Colors.white,
        ...fontSizes.headingfont,
        margin: wp('2%')
    },
    icon: {
        margin: wp('2%')
    },
    image: {
        height: hp('20%'),
        width: wp('40%')
    }
})