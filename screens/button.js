import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function FlatButton({ naviagtion }) {
    return (
        <TouchableOpacity onPress={pressHandler}>
            <View style={styles.button}>
                <Text style={styles.txt}>Next</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        //    marginTop:200,
        marginHorizontal: 30,
        paddingVertical: 14,
        paddingHorizontal: 11,
        borderRadius: 10,
        backgroundColor: '#f01d71',
        alignItems: 'center',

        // justifyContent: 'center',
    },
    txt: {
        fontSize: 22,
        width: 50,
    }
});