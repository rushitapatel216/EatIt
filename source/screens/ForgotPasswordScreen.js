import React from "react";
import { View, StyleSheet, ImageBackground, Text, KeyboardAvoidingView } from "react-native";
import Colors from "../utils/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Images from "../asset";
import Textinput from "../Components/medium/TextInput";
import ButtonComponents from "../Components/large/ButtonComponents";
import BackButtonComponant from "../Components/large/BackButtonComponents";
import { StacknString, TextInputString } from "../utils/constant";
import { fontSizes } from "../utils/Fontsize";
import { string } from "../utils/Strings";

const Password = (props) => {
    return (
        <ImageBackground source={{ uri: Images.bacgroundImage }} style={styles.image} >
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.headertext}>{string.forgotpassheader} </Text>
                    <Text style={styles.text}>{string.subheaderforgotpass}</Text>
                    <Textinput
                        text={TextInputString.Password}
                        placeholder={TextInputString.Enterpassword}
                        keyboardType={TextInputString.Number}
                        style={styles.textinput}
                        placeholderTextColor={Colors.white}
                        borderBottomWidth={1}
                    />
                </View>
                <View style={styles.btncontainer}>
                    <ButtonComponents
                        title={TextInputString.Send}
                        onPress={() => props.navigation.navigate(StacknString.Password)}
                        titleColor={Colors.white}
                        style={styles.button}
                    />
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
    headertext: {
        color: Colors.primaryColor,
        ...fontSizes.headingfont1
    },
    image: {
        flex: 1,
        height: hp('100%'),
        width: wp('100%')
    },
    text: {
        ...fontSizes.subhedingfont,
        color: Colors.white,
    },
    textinput: {
        marginTop: hp('7%'),
        width: wp('80%')
    },
    btncontainer: {
        alignItems: 'center',
        marginBottom: hp('10%')
    },
    button: {
        backgroundColor: Colors.primaryColor,
        width: wp('80%'),
        padding: wp('4%')
    }
})
export default Password;