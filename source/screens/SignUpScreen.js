import React, { useState } from 'react'
import ButtonComponents from '../Components/large/ButtonComponents';
import Textinput from '../Components/medium/TextInput';
import { ImageBackground, StyleSheet, View, Image, Text, KeyboardAvoidingView } from "react-native"
import Colors from '../utils/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../asset';
import CheckBox from 'react-native-check-box';
import BackButtonComponant from '../Components/large/BackButtonComponents';
import { StacknString, TextInputString } from '../utils/constant';
import style from '../Layout/globalStyle';
import { fontSizes } from '../utils/Fontsize';
import { string } from '../utils/Strings';

export default function SignUpScreen(props) {
    const [isSelected, setSelection] = useState(false);
    return (
        <ImageBackground source={{ uri: Images.bacgroundImage }} style={style.image} >
            <KeyboardAvoidingView behavior='height' style={styles.container} >
                <View style={styles.subcontainer}>
                    <Image source={Images.cemeraIcon} style={styles.camaraimage} />
                    <View style={styles.textinputcontainer}>
                        <Textinput
                            text={TextInputString.Name}
                            placeholder={TextInputString.TaylorSwift}
                            keyboardType={TextInputString.default}
                            style={[styles.textinput, { marginTop: hp('4%') }]}
                            placeholderTextColor={Colors.white}
                        />
                        <Textinput
                            text={TextInputString.Number}
                            placeholder={TextInputString.Numberplacehol}
                            keyboardType={TextInputString.Number}
                            style={[styles.textinput, { marginTop: hp('2%') }]}
                            placeholderTextColor={Colors.white}
                        />
                    </View>
                    <View style={styles.textcontainer}>
                        <CheckBox
                            isChecked={isSelected}
                            style={styles.checkBoxStyle}
                            onClick={() => setSelection(!isSelected)}
                            checkBoxColor={Colors.green}
                        />
                        <Text style={styles.text}>{string.Agreetext} <Text style={styles.termstext} onPress={() => props.navigation.navigate(StacknString.TermsCondition)} >{string.Termtext}</Text> </Text>
                    </View>
                </View>
                <View style={styles.btncontainer}>
                    <ButtonComponents
                        title={TextInputString.SignUp}
                        onPress={isSelected == true ? () => props.navigation.navigate(StacknString.Password) : () => alert(string.termserrortext)}
                        titleColor={Colors.white}
                        style={styles.signupbtn}
                    />
                    <View style={styles.textinput}>
                        <Text style={styles.text}>{string.have} <Text onPress={() => props.navigation.navigate(StacknString.SignIn)} style={styles.termstext}>{string.anaccount}</Text></Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <BackButtonComponant navigation={props.navigation} />
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackWithOpacity,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subcontainer: {
        alignItems: 'center',
        marginTop: hp('10%')
    },
    signupbtn: {
        width: wp('80%'),
        backgroundColor: Colors.primaryColor,
        margin: wp('2%'),
        padding: wp('4%')
    },
    btncontainer: {
        marginTop: hp('5%'),
        marginBottom: hp('8%'),
        alignItems: 'center'
    },
    textinputcontainer: {
        width: wp('80%')
    },
    camaraimage: {
        height: hp('15%'),
        width: hp('15%'),
        borderRadius: hp('7.5%'),
        backgroundColor: Colors.bordercolor
    },
    text: {
        ...fontSizes.subhedingfont,
        color: Colors.white,
        fontWeight: 'bold'
    },
    textcontainer: {
        flexDirection: 'row',
        marginTop: hp('5%'),
        width: wp('80%')
    },
    checkBoxStyle: {
        padding: 0,
        margin: 0,
    },
    termstext: {
        color: Colors.primaryColor,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.bordercolor
    },
})


