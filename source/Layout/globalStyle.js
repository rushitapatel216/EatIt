import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../utils/colors';

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        height: hp('100%'),
        width: wp('100%'),
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.bordercolor
    }
})
export default style;