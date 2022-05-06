import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const ButtonComponents = (props) => {
    const { style } = props
    //BUtton Diffrent - title - buttonColor (backgroundcolor) - width - onPress
    return (
        <TouchableOpacity
            onPress={props.onPress} style={[styles.btnContainer, style]}
        >
            {props.iconleft && <View style={{ paddingRight: 10 }}>{props.iconleft}</View>}
            <Text style={[styles.btnTextStye, { color: props.titleColor }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        padding: wp('3%'),
        borderRadius: wp('1%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTextStye: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})

export default ButtonComponents;


