import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderComponant from '../Components/large/HeaderComponant';
import Colors from '../utils/colors';
import { DrawernString } from '../utils/constant';
import { DrawerActions } from '@react-navigation/native';
import { fontSizes } from '../utils/Fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default function MycartScreen(props) {

    return (
        <View style={styles.headercontainer}>
            <HeaderComponant
                Iconleft={<EvilIcons name={'navicon'} size={28} color={Colors.white} style={{ margin: wp('2%') }} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />}
                title={DrawernString.Cart}
                IconRight={<Text style={styles.text}>Edit</Text>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    headercontainer: {
        position: 'absolute'
    },
    text: {
        color: Colors.white,
        ...fontSizes.headingfont,
        margin: wp('2%')
    },
})
