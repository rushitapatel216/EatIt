import React from "react";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Textinput from "../Components/medium/TextInput";
import ButtonComponents from "../Components/large/ButtonComponents";
import Images from "../asset";
import Colors from "../utils/colors";
import { StacknString, TextInputString } from "../utils/constant"
import BackButtonComponant from "../Components/large/BackButtonComponents";
import style from "../Layout/globalStyle";
import { fontSizes } from "../utils/Fontsize";
import { string } from "../utils/Strings";

const SignIn = (props) => {
    return (
        <ImageBackground source={{ uri: Images.bacgroundImage }}
            style={style.image} >

            <ScrollView style={{ flex: 1 }} bounces={false} >
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.subcontainer}>
                        <Text style={styles.headertext}>{string.signin}</Text>
                        <Text style={styles.text}>{string.enterdata}</Text>
                        <Textinput
                            text={TextInputString.Phone}
                            placeholder={TextInputString.PhoneNumber}
                            keyboardType={TextInputString.Number}
                            style={[styles.textinput, { marginTop: hp('8%') }]}
                            placeholderTextColor={Colors.white}
                        />
                        <Textinput
                            text={TextInputString.Number}
                            placeholder={TextInputString.DigitsPass}
                            keyboardType={TextInputString.Number}
                            style={[styles.textinput, { marginTop: hp('5%') }]}
                            placeholderTextColor={Colors.white}
                        />
                        <TouchableOpacity
                            style={styles.touchtext}
                            onPress={() => props.navigation.navigate(StacknString.ForgetPassword)}
                        ><Text style={styles.ftext}>{StacknString.ForgetPassword}?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btncontainer}>
                        <ButtonComponents
                            title={TextInputString.SignIn}
                            onPress={() => props.navigation.navigate(StacknString.Drawer)}
                            titleColor={Colors.white}
                            style={styles.button}
                        />
                        <Text style={styles.text}>OR</Text>
                        <ButtonComponents
                            title={TextInputString.SignInWithTwitter}
                            onPress={() => props.navigation.navigate(StacknString.SignIn)}
                            titleColor={Colors.white}
                            style={[styles.button, { backgroundColor: Colors.twitterbtncolor }]}
                        />
                        <ButtonComponents
                            title={TextInputString.SignInWithFacebook}
                            onPress={() => props.navigation.navigate(StacknString.SignIn)}
                            titleColor={Colors.white}
                            style={[styles.button, { backgroundColor: Colors.facebookbtncolor }]}
                        />
                        <View style={styles.bottomcontainer}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate(StacknString.SignUp)}
                            ><Text style={styles.text}>{string.nowhere}  <Text style={styles.ftext}>{TextInputString.SignIn}</Text></Text></TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
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
        marginTop: hp('15%')
    },
    btncontainer: {
        alignItems: 'center',
        marginBottom: hp('10%'),
        marginTop: hp('2%')
    },
    button: {
        width: wp('80%'),
        margin: wp('2%'),
        padding: wp('3%'),
        backgroundColor: Colors.primaryColor
    },
    bottomcontainer: {
        alignSelf: 'center',
        marginTop: hp('2%')
    },
    headertext: {
        color: Colors.headercolor,
        ...fontSizes.headingfont1
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        ...fontSizes.subhedingfont,
        fontWeight: 'bold'
    },
    ftext: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: hp('1%')
    },
    textinput: {
        width: wp('80%'),
        borderBottomWidth: 1,
        borderBottomColor: Colors.bordercolor
    },
    touchtext: {
        alignSelf: 'flex-end',
        marginTop: hp('2%')
    }
})
export default SignIn;