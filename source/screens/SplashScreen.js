import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../utils/colors';
import Images from '../asset';
import { StacknString } from '../utils/constant';
import { getUserLogin } from '../utils/storage';

export default function SplashScreen(props) {
    useEffect(() => {
        setTimeout(async () => {
            var isLogin = await getUserLogin()
            console.log('isLogin', isLogin)
            isLogin == "true" ?
                props.navigation.navigate(StacknString.Drawer)
                :
                props.navigation.navigate(StacknString.Home)
        }, 1000);
    })
    return (
        <View style={styles.container}>
            <Image source={Images.logo} style={styles.image}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    },
    image: {
        height: hp('20%'),
        width: hp('20%'),
        borderRadius: hp('10%')
    }
})