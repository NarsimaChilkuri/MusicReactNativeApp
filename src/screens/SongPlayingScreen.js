import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SongPlayingScreen = () => {
  const varCom = "SongPlayingScreen";
  return(
  	<View style={styles.container}>
           <Text style={styles.text}>{varCom}</Text>
           
    </View>
    );
};

const styles = StyleSheet.create({
  container:{
   alignItems: 'center',
   flex: 1, 
   backgroundColor: '#000000',
   justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF'
  }
});
export default SongPlayingScreen;