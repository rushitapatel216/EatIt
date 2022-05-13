import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Images from '../asset';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../utils/colors';
import { fontSizes } from '../utils/Fontsize';
import style from '../Layout/globalStyle';
import { string } from '../utils/Strings';
import { StacknString } from '../utils/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeUserLogin } from '../utils/storage';

const CustomSidebarMenu = (props) => {
    const onPressLogoutBtn = () => {
        removeUserLogin()
            .then(() => {
                props.navigation.navigate(StacknString.Home)
            })
    }
    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={styles.conatainer}>
                <Image
                    source={Images.ProfileImage}
                    style={styles.sideMenuProfileIcon}
                />
                <Text style={styles.headertext}>Taylor swift</Text>
                <Text style={styles.text}>{string.editprofile}</Text>
            </View>
            <DrawerContentScrollView {...props} style={styles.bottomcontainer}>
                <DrawerItemList {...props} />
                <TouchableOpacity style={[styles.conatainer, { marginTop: hp('4%') }]} onPress={onPressLogoutBtn} >
                    <Text style={[styles.text, { ...fontSizes.headingfont }]}>{string.logout}</Text>
                </TouchableOpacity>
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
