import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../utils/colors';
import { fontSizes } from '../../utils/Fontsize';

const Textinput = (props) => {
    const { errorText, text, placeholder, keyboardType, style, textInputStyle, onChangeText, value, secureTextEntry
    } = props
    return (
        <View style={style}>
            <Text style={styles.textInputTitle}>{text}</Text>
            {props.iconleft && <View>{props.iconleft}</View>}
            <TextInput
                style={[styles.inputtext, textInputStyle]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType == 'Number' ? 'numeric' : 'default'}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={secureTextEntry}
            />
            {errorText &&
                <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    inputtext: {
        color: Colors.white,
        paddingVertical: wp('1%'),
        margin: 0,
        ...fontSizes.headingfont,
    },
    textInputTitle: {
        ...fontSizes.headingfont,
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    errorText: {
        fontSize: wp('3%'),
        color: Colors.white,
        marginVertical: hp('0.5%')
    }
})
export default Textinput;

