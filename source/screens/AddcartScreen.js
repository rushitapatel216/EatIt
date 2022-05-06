import { View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import ButtonComponents from '../Components/large/ButtonComponents';
import { TextInputString } from '../utils/constant';
import Colors from '../utils/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderComponant from '../Components/large/HeaderComponant';
import { StacknString } from '../utils/constant';
import { commentdata } from '../dummyData';
import { string } from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Textinput from '../Components/medium/TextInput';
import { fontSizes } from '../utils/Fontsize';
import style from '../Layout/globalStyle';

export default function AddcartScreen(props) {
    const [itemCount, setItemCount] = useState(0);
    const [isBookmark, setIsBookmark] = useState(false)
    const item = props.route.params.itemData
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image style={styles.sideMenuProfileIcon} source={item.img}
                />
                <View style={styles.ctextcontainer} >
                    <Text style={[styles.htext, { color: Colors.primaryColor }]}>{item.name}</Text>
                    <Text style={[styles.text, { color: Colors.gray, fontSize: wp('4%') }]}>{item.description}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={style.mainContainer}>
            <ImageBackground source={item.src}
                style={styles.image}>
                <View style={styles.headercontainer}>
                    <HeaderComponant
                        Iconleft={<AntDesign name={'left'} size={hp('4%')} color={Colors.white} style={styles.HeaderIcon} onPress={() => props.navigation.goBack()} />}
                        title={item.title}
                        IconRight={<AntDesign name={'shoppingcart'} size={hp('4%')} color={Colors.white} style={styles.icon} onPress={() => props.navigation.navigate(StacknString.mycart)} />}
                    />
                </View>
                <TouchableOpacity style={styles.textcontainer} onPress={() => console.log('add')}>
                    < Text style={[styles.text, { fontSize: wp('4%') }]}>{item.subtitle}</Text>
                    <Text style={[styles.text, { color: Colors.primaryColor, fontSize: wp('6%') }]}>{item.price}</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.btncontainer} onPress={() => setIsBookmark(!isBookmark)}>
                    {
                        isBookmark ?
                            <AntDesign name={'star'} size={hp('4%')} color={Colors.yellow} />
                            :
                            <AntDesign name={'staro'} size={hp('4%')} color={Colors.black} />
                    }
                    <Text style={styles.text2}>{TextInputString.Addfavourite}</Text>
                </TouchableOpacity>
                <View>
                    {
                        itemCount === 0 ?
                            <TouchableOpacity onPress={() => setItemCount(1)} style={[styles.btncontainer, { backgroundColor: Colors.primaryColor }]}>
                                <AntDesign name={'shoppingcart'} size={hp('4%')} color={Colors.white} />
                                <Text style={styles.btntext}>{TextInputString.AddCart}</Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.smallBtnContainer}>
                                <TouchableOpacity onPress={() => setItemCount(itemCount - 1)} style={styles.icreatmentbtn}>
                                    <Text style={styles.btntext}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.countbtnconatainer}>
                                    <Text style={styles.btntext}>{itemCount}</Text>
                                </View>
                                <TouchableOpacity onPress={() => setItemCount(itemCount + 1)} style={styles.icreatmentbtn}>
                                    <Text style={styles.btntext}>+</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>

            <View style={styles.commentcontainer}>
                <Text style={[styles.text, { color: Colors.bl, marginLeft: wp('2%') }]}>Comments (324)</Text>
                <FlatList
                    data={commentdata}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
            <View style={styles.buttoncontainer}>
                <Textinput
                    iconleft={< Ionicons name={'camera'} size={hp('4%')} color={Colors.gray} style={styles.icon} />}
                    placeholder={string.Yourmessage}
                    keyboardType={TextInputString.default}
                    placeholderTextColor={Colors.gray}
                    style={styles.textinput}
                    textInputStyle={{
                        fontSize: wp('4%')
                    }}
                />
                <ButtonComponents
                    title={TextInputString.Send}
                    onPress={() => console.log("add")}
                    titleColor={Colors.white}
                    style={styles.sendbtn}
                />
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    buttoncontainer: {
        flexDirection: 'row',
    },
    commentcontainer: {
        justifyContent: 'space-between',
        flex: 1,
        margin: wp('3%')
    },
    sendbtn: {
        backgroundColor: Colors.primaryColor,
        width: wp('30%'),
        borderRadius: 0
    },
    text: {
        color: Colors.white,
        ...fontSizes.headingfont,
        padding: wp('2%'),
        fontWeight: 'bold'
    },
    icon: {
        marginRight: wp('4%')
    },
    icreatmentbtn: {
        backgroundColor: Colors.primaryColor,
        width: wp('17%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        color: Colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: wp('1.5%'),
        fontSize: wp('5%'),
    },
    image: {
        height: hp('40%'),
        width: wp('100%'),
    },
    textcontainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: Colors.blackWithOpacity,
        paddingHorizontal: wp("2%"),
        position: 'absolute',
        bottom: 0,
        width: wp('100%'),
        alignItems: 'center'
    },
    HeaderIcon: {
        margin: wp('2%')
    },
    textinput: {
        width: wp('70%'),
        flexDirection: 'row',
        padding: wp('3%'),
        alignItems: 'center',
        backgroundColor: Colors.offwhite,
    },
    headercontainer: {
        position: 'absolute',
        top: 0
    },
    sideMenuProfileIcon: {
        height: hp('8%'),
        width: hp('8%'),
        borderRadius: hp('4%'),
        margin: wp('4%'),
        marginRight: wp('4%')
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    htext: {
        color: Colors.primaryColor,
        ...fontSizes.headingfont
    },
    btncontainer: {
        flexDirection: 'row',
        width: wp('50%'),
        paddingVertical: hp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.offwhite,
    },

    smallBtnContainer: {
        width: wp('50%'),
        flexDirection: 'row',
        flex: 1
    },
    ctextcontainer: {
        borderBottomColor: Colors.gray,
        borderBottomWidth: 0.5,
        flexShrink: 1,
        margin: wp('4%'),
        marginRight: 0
    },
    text2: {
        color: Colors.gray,
        fontSize: wp('4%'),
        marginLeft: wp('1%'),
        fontWeight: 'bold'
    },
    countbtnconatainer: {
        flex: 1,
        backgroundColor: '#7BEA4B',
        alignItems: 'center',
        justifyContent: 'center'
    }
})