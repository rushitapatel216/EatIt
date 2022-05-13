import React, { useEffect, useState } from "react";
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
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { setUserLogin } from "../utils/storage";

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        if (password == "") {
            alert(string.passworderror);
        }
        else if (email == "") {
            alert(string.emailerror);
        }
        else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((r) => {
                    setUserLogin("true");
                    props.navigation.navigate(StacknString.Drawer)
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert(error);
                    }
                    else if (error.code === 'auth/invalid-email') {
                        alert(error);
                    }
                });
        }
    }
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '284138653282-b2ghf69m6uvoqcpju5fm25jhjpnr91ip.apps.googleusercontent.com'
        });
    }, [])
    async function onGoogleButtonPress() {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
    }

    async function onFacebookButtonPress() {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw 'Something went wrong obtaining access token';
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        return auth().signInWithCredential(facebookCredential);
    }
    return (
        <ImageBackground source={{ uri: Images.bacgroundImage }}
            style={style.image} >
            <ScrollView style={{ flex: 1 }} bounces={false} >
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.subcontainer}>
                        <Text style={styles.headertext}>{string.signin}</Text>
                        <Text style={styles.text}>{string.enterdata}</Text>
                        <Textinput
                            text={TextInputString.Email}
                            placeholder={TextInputString.Enteremail}
                            keyboardType={TextInputString.default}
                            style={[styles.textinput, { marginTop: hp('8%') }]}
                            onChangeText={setEmail}
                            value={email}
                            placeholderTextColor={Colors.white}
                        />
                        <Textinput
                            text={TextInputString.Password}
                            placeholder={TextInputString.Enterpassword}
                            secureTextEntry={true}
                            keyboardType={TextInputString.Number}
                            style={[styles.textinput, { marginTop: hp('5%') }]}
                            placeholderTextColor={Colors.white}
                            onChangeText={setPassword}
                            value={password}
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
                            onPress={() => createUser(email, password)}
                            titleColor={Colors.white}
                            style={styles.button}
                        />
                        <Text style={styles.text}>OR</Text>
                        <ButtonComponents
                            title={TextInputString.Signupwithgoogle}
                            onPress={() => onGoogleButtonPress().then((r) => { setUserLogin("true"), props.navigation.navigate(StacknString.Drawer) })}
                            titleColor={Colors.white}
                            style={[styles.button, { backgroundColor: Colors.googlebtncolor }]}
                        />
                        <ButtonComponents
                            title={TextInputString.SignInWithFacebook}
                            onPress={() => onFacebookButtonPress().then((r) => { setUserLogin("true"), props.navigation.navigate(StacknString.Drawer) })}
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