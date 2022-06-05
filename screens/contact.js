import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default function Contact({ navigation }){
    return(
        <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.ttt}>Get in touch</Text>
        </View>
        <View style={styles.mail}>
            <Text style={styles.ma}>Email</Text>
            <Text style={styles.m}>satwikkasturi@gmail.com</Text>
        </View>
        <View style={styles.mail}>
            <Text style={styles.ma}>Address</Text>
            <Text style={styles.m}>laxminagar,505001,karimnagar,karimnagar,telangana,India</Text>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:30,
    },
    ttt:{
        fontSize:38,
        fontWeight:'bold',
    },
    mail:{
        padding:30,
    },
    ma:{
        fontSize:28,
    },
    m:{
        fontSize:22,
    },
    main:{
        flex:1,
        backgroundColor: '#fff',
    }
});