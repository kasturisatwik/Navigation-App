import react from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import FlatButton from './screen/button';
export default function Display() {
  return (
    <View style={styles.container}>
      <View style={styles.dis}>
      <Text style={styles.tt}>NAVIGATION APP</Text>
      </View>
      <View style={styles.buttons}>
    <FlatButton />
      {/* <Button title='->' style={styles.but}/> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
    // alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-end',
  },
  buttons:{
  //  flex: 1,
   marginBottom: 20,
  },
  dis:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:12,
    padding:10,
  },
  tt:{
    fontWeight:'bold',
    fontSize:30,
  }
});
