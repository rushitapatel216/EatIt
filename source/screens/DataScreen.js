import React from "react";
import { StyleSheet, FlatList, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from "../utils/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import HeaderComponant from "../Components/large/HeaderComponant";
import { DataString, StacknString } from "../utils/constant";
import { Entree } from "../dummyData";
import { Fruit } from "../dummyData";

const Drink = [{
    title: 'orange Juice',
    src: require('../asset/images/drinks-image.jpg'),
    price: '$10.40'
},
{
    title: 'orange Juice',
    src: require('../asset/images/drink2-image.jpg'),
    price: '$10.40'
},
{
    title: 'orange Juice',
    src: require('../asset/images/drink3-image.jpeg'),
    price: '$10.40'
},
{
    title: 'orange Juice',
    src: require('../asset/images/drink4-image.jpeg'),
    price: '$10.40'
},
]
const Salad = [{
    title: 'salad',
    src: require('../asset/images/salad1-image.jpeg')
},
{
    title: 'salad',
    src: require('../asset/images/salads-images.jpg')
},
{
    title: 'salad',
    src: require('../asset/images/Salad4-image.jpeg')
},

]
export default function Data(props) {
    const { screen } = props.route.params
    const renderItem = ({ item }) => {
        return (
            <ImageBackground source={item.src}
                style={styles.image}>
                <TouchableOpacity style={styles.textcontainer} onPress={() => props.navigation.navigate(StacknString.AddCart, { itemData: item })}>
                    <View style={styles.titletextcontainer}>
                        <Text style={styles.text}>{item.title}</Text>
                        {item.subtitle && <Text style={styles.subtitletext}>{item.subtitle}</Text>}
                    </View>
                    <Text style={[styles.text, { color: Colors.primaryColor }]}>{item.price}</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    };
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponant
                Iconleft={<AntDesign name={'left'} size={hp('4%')} color={Colors.white} style={styles.icon} onPress={() => props.navigation.goBack()} />}
                title={screen}
                IconRight={<AntDesign name={'shoppingcart'} size={hp('4%')} style={styles.icon} color={Colors.white} />}
            />
            <FlatList
                data={
                    screen == DataString.Entrees
                        ?
                        Entree
                        :
                        screen == DataString.Fruits
                            ?
                            Fruit
                            :
                            screen == DataString.Salads
                                ?
                                Salad
                                :
                                Drink
                }
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontSize: wp('5%'),
    },
    titletextcontainer: {
        flexDirection: 'column',
        margin: wp('2%'),
        justifyContent: 'center',
    },
    image: {
        height: hp('34%'),
        width: wp('100%'),
        justifyContent: 'flex-end'
    },
    textcontainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.blackWithOpacity,
        paddingHorizontal: wp("2%")
    },
    subtitletext: {
        color: Colors.white,
        fontWeight: 'bold'
    },
    icon: {
        margin: wp('2%')
    }
})