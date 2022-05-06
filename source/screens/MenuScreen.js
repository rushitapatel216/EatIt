import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../asset'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../utils/colors'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native'
import HeaderComponant from '../Components/large/HeaderComponant'
import { DataString } from '../utils/constant'
import { fontSizes } from '../utils/Fontsize';
import style from '../Layout/globalStyle'

export default function MenuScreen(props) {
    return (
        <View style={style.mainContainer}>
            <ImageBackground source={Images.MenuImage} style={styles.image}>
                <TouchableOpacity style={styles.textcontainer} onPress={() => props.navigation.navigate('Data', { screen: DataString.Entrees })}>
                    <Text style={styles.text} >{DataString.Entrees} </Text>
                    <Text style={[styles.text, { color: Colors.primaryColor }]}>23</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.subcontainer}>
                <ImageBackground source={Images.DrinkImage} style={styles.imagedrink}>
                    <TouchableOpacity style={styles.textcontainer} onPress={() => props.navigation.navigate('Data', { screen: DataString.Drinks })}>
                        <Text style={styles.text}>{DataString.Drinks}</Text>
                        <Text style={[styles.text, { color: Colors.primaryColor }]}>18</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View >
                    <View style={style.mainContainer}>
                        <ImageBackground source={Images.FruitsImage} style={styles.fritsimage}>
                            <TouchableOpacity style={styles.textcontainer} onPress={() => props.navigation.navigate('Data', { screen: DataString.Fruits })}>
                                <Text style={styles.text}>{DataString.Fruits}</Text>
                                <Text style={[styles.text, { color: Colors.primaryColor }]}>26</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <ImageBackground source={Images.SaladsImage} style={styles.saladimage}>
                        <TouchableOpacity style={styles.textcontainer} onPress={() => props.navigation.navigate('Data', { screen: DataString.Salads })}>
                            <Text style={styles.text}>{DataString.Salads}</Text>
                            <Text style={[styles.text, { color: Colors.primaryColor }]}>24</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles.headercontainer}>
                <HeaderComponant
                    Iconleft={<EvilIcons name={'navicon'} size={hp('4%')} color={Colors.white} style={styles.icon} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />}
                    title={DataString.Menu}
                    IconRight={<AntDesign name={'search1'} size={hp('3%')} color={Colors.white} style={styles.icon} />}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        ...fontSizes.headingfont,
    },
    image: {
        height: hp('45%'),
        justifyContent: 'flex-end'
    },
    textcontainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: Colors.blackWithOpacity,
        padding: wp("2%")
    },
    icon: {
        margin: wp('2%'),
    },
    headercontainer: {
        position: 'absolute',
    },
    subcontainer: {
        flexDirection: 'row',
        flex: 1,
    },
    imagedrink: {
        width: wp('50%'),
        justifyContent: 'flex-end'
    },
    fritsimage: {
        height: hp('25%'),
        width: wp('50%'),
        justifyContent: 'flex-end',
    },
    saladimage: {
        height: hp('25%'),
        width: wp('50%'),
        justifyContent: 'flex-end',
    },
})