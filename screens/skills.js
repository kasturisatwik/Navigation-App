import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default function Skills({ navigation }){
    return(
        <View style={styles.main}>
            <View style={styles.container}>
            <Text style={styles.ttt}>Skills</Text>
        </View>
        <View style={styles.skills}>
        <Text style={styles.m}>@ Leadership abilites</Text>
        <Text style={styles.m}>@ Teambuilding</Text>
        <Text style={styles.m}>@ Multitasking abilites</Text>
        <Text style={styles.m}>@ Flexible and adaptable</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.ttt}>Languages known</Text>
        </View>
        <View style={styles.skill}>
        <Text style={styles.m}> Java</Text>
        <Text style={styles.m}> Sql</Text>
        <Text style={styles.m}> c++</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.ttt}>Accomplishments</Text>
        </View>
        <View style={styles.skills}>
        <Text style={styles.m}>Completed Scouting upto RAJYAPURASKAR im my Schooling </Text>
        <Text style={styles.m}>@ Team player</Text>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:26,
    },
    ttt:{
        fontSize:38,
        fontWeight:'bold',
    }, 
    m:{
        fontSize:22,
    },
    skills:{
        marginLeft:20,
    },
    skill:{
        marginLeft:30,
    },
    main:{
        flex:1,
        backgroundColor: '#fff',
    }
});