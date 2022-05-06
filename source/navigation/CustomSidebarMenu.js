import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Images from '../asset';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../utils/colors';
import { fontSizes } from '../utils/Fontsize';
import style from '../Layout/globalStyle';

const CustomSidebarMenu = (props) => {
    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={styles.conatainer}>
                <Image
                    source={Images.ProfileImage}
                    style={styles.sideMenuProfileIcon}
                />
                <Text style={styles.headertext}>Taylor swift</Text>
                <Text style={styles.text}>Edit profile</Text>
            </View>
            <DrawerContentScrollView {...props} style={styles.bottomcontainer}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    conatainer: {
        marginLeft: wp('4%')
    },
    sideMenuProfileIcon: {
        height: hp('15%'),
        width: hp('15%'),
        borderRadius: hp('7.5%'),
        marginTop: hp('10%')
    },
    headertext: {
        color: Colors.white,
        ...fontSizes.headingfont,
        marginTop: wp('2%'),
        fontWeight: 'bold'
    },
    text: {
        color: Colors.primaryColor,
        ...fontSizes.subhedingfont
    },
    bottomcontainer: {
        marginTop: hp('3%')
    }
});
export default CustomSidebarMenu;
