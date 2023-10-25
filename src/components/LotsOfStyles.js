import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LotsOfStyles = () => {
    return (
        <View style={style.container}>
            <Text style={style.red}>just red</Text>
            <Text style={[style.bigBlue, style.red]}>just big blue, the red</Text>
            <Text style={[style.red, style.bigBlue]}>red, then big blue</Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red:{
        color: 'red',
    }

})

export default LotsOfStyles