import React from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Images from "../asset";
import ButtonComponents from '../Components/large/ButtonComponents';
import Colors from "../utils/colors";
import { TextInputString } from "../utils/constant";
import { StacknString } from "../utils/constant";
import style from "../Layout/globalStyle";
import { fontSizes } from "../utils/Fontsize";
import { string } from "../utils/Strings";

const Eatit = (props) => {
    const onPressSignInButton = () => {
        props.navigation.navigate(StacknString.SignIn)
    }
    const onPressSignUpButton = () => {
        props.navigation.navigate(StacknString.SignUp)
    }
    return (
        <ImageBackground source={{ uri: Images.bacgroundImage }} style={style.image} >
            <View style={styles.container} >
                <Image source={Images.logo} style={styles.logoimage} />
                <Text style={styles.text}>
                    {string.Headertext}
                </Text>
                <View style={styles.btncontainer}>
                    <ButtonComponents
                        title={TextInputString.SignUp}
                        titleColor={Colors.white}
                        onPress={onPressSignUpButton}
                        style={styles.button}
                    />
                    <ButtonComponents
                        title={TextInputString.SignIn}
                        onPress={onPressSignInButton}
                        style={[styles.button, { backgroundColor: Colors.white }]}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackWithOpacity,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: wp('8%')
    },
    button: {
        width: wp('40%'),
        margin: wp('2%'),
        padding: wp('4%'),
        backgroundColor: Colors.primaryColor,
        borderRadius: wp('1%'),
    },
    btncontainer: {
        flexDirection: 'row',
        marginHorizontal: wp('8%'),
    },
    logoimage: {
        height: hp('20%'),
        width: hp('20%'),
        borderRadius: hp('10%'),
        marginTop: hp('10%')
    },
    text: {
        color: Colors.white,
        ...fontSizes.headingfont,
        textAlign: 'center',
    }
})
export default Eatit;