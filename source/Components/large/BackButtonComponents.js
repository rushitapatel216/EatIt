import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from "../../utils/colors";

const BackButtonComponant = (props) => {
    return (
        <TouchableOpacity style={Styles.container} onPress={() => props.navigation.goBack()}>
            <AntDesign name={'left'} size={20} color={Colors.white} />
            <Text style={Styles.text}>Back</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        position: 'absolute',
        margin: hp('2%'),
        flexDirection: 'row'
    },
    text: {
        fontSize: wp('4%'),
        color: Colors.white,
        fontWeight: 'bold'
    },
})
export default BackButtonComponant;