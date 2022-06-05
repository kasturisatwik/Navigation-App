import React from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';
export default function Profile({ navigation }){
    return(
        // <View style={styles.container}>
        //     <Text>profile page</Text>
        // </View>
        <View style={styles.container}>
       <View style={styles.header}>
            {/* <Text style={styles.text}>MY PROFILE</Text> */}
        </View>
      <View style={styles.img}>
      <Image 
      source={require('../assets/satwik.png')}
      style={styles.two} 
      />
      <Text style={styles.name}>SATWIK KASTURI</Text>
      </View>
      <View>
      <Text style={styles.bio}>I'm satwik from telangana currently i'm pursuing my 3rd year computer science(Bachelors) from JNUTH college of Engineering Jagtial with an aggregate of 65% .</Text>
      </View>
    </View>
    )
}
// const styles=StyleSheet.create({
//     container:{
//         padding:30,
//     }
// });
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    // header: {
    //   height:80,
    //   paddingTop:35,
    //   // paddingBottom:10,
    //   backgroundColor:'#FFC212',
  // },
  text: {
      fontSize:22,
      textAlign:'center',
      fontWeight:'bold',
  },
  img:{
    paddingTop:84
    ,
    alignItems:'center',
  
  },
  two: {
    height:200,
    width:200,
    borderRadius:100,
    borderWidth:50,
  },
  name:{
    marginTop:15,
    fontSize:34,
    fontWeight:'bold',
  },
  bio:{
    margin:20,
    marginTop:30,
    marginHorizontal:40,
    padding:30,
    paddingBottom:40,
    backgroundColor:'#060606',
    fontSize:23,
    borderRadius:14,
    color:'white',
  }
  });