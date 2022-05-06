import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from "../../utils/colors";

const HeaderComponant = (props) => {
    return (
        <View style={styles.container} >
            <View>{props.Iconleft}</View>
            <Text style={styles.text}>{props.title}</Text>
            <View>{props.IconRight}</View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp("6%"),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        width: wp('100%'),
    },
    text: {
        color: Colors.white,
        fontSize: wp('5%'),
    },
})
export default HeaderComponant;