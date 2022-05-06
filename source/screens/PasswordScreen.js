import React from "react";
import { View, StyleSheet, ImageBackground, Text, KeyboardAvoidingView } from "react-native";
import Colors from "../utils/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Images from "../asset";
import Textinput from "../Components/medium/TextInput";
import ButtonComponents from "../Components/large/ButtonComponents";
import style from "../Layout/globalStyle";
import BackButtonComponant from "../Components/large/BackButtonComponents";
import { StacknString, TextInputString } from "../utils/constant";
import { fontSizes } from "../utils/Fontsize";
import { string } from "../utils/Strings";

const Password = (props) => {
    return (
        <ImageBackground source={{ uri: Images.bacgroundImage }} style={style.image} >
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.headertext}>{string.entercode}</Text>
                    <Text style={styles.text}>{string.fromsms}</Text>
                    <Textinput
                        text={TextInputString.Password}
                        placeholder={TextInputString.DigitsPass}
                        keyboardType={TextInputString.Number}
                        style={styles.textinput}
                        placeholderTextColor={Colors.white}
                        borderBottomWidth={1}
                    />
                </View>
                <View style={styles.btncontainer}>
                    <ButtonComponents
                        title={TextInputString.Done}
                        onPress={() => props.navigation.navigate(StacknString.Drawer)}
                        titleColor={Colors.white}
                        style={styles.button}
                    />
                    <Text style={styles.bottomtext}>{string.notreceivemess}<Text style={styles.reapettext}>{string.repeat}</Text> </Text>
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
        marginTop: hp('10'),
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headertext: {
        color: Colors.primaryColor,
        ...fontSizes.headingfont
    },
    text: {
        ...fontSizes.subhedingfont,
        color: Colors.white,
    },
    bottomtext: {
        color: Colors.white,
        marginTop: hp('4%'),
    },
    reapettext: {
        color: Colors.primaryColor,
        textDecorationLine: 'underline',
    },
    textinput: {
        height: hp('25%'),
        width: wp('80%'),
        justifyContent: 'center',
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