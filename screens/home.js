import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Profile');
    }
    const pressHandle = () => {
        navigation.navigate('Skills');
    }
    const pressHandl = () => {
        navigation.navigate('Contact');
    }
    return (
        <View style={styles.main}>
            <View >
                <Text style={styles.wel}>Portfolio Navigation App!</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt}>Profile:</Text>
                <Button title='Profile Screen' onPress={pressHandler} />
            </View>
            <View style={styles.sk}>
                <Text style={styles.txt}>My skills:</Text>
                <Button title='Skills' onPress={pressHandle} />
            </View>
            <View style={styles.ct}>
                <Text style={styles.txt}>Contact info:</Text>
                <Button title='Contact' onPress={pressHandl} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        padding: 40,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    wel: {
        fontSize: 65,
        marginTop: 69,
        marginLeft: 22,
    },
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sk: {
        marginHorizontal: 50,
    },
    ct: {
        marginTop: 30,
        marginHorizontal: 50,
    }
});