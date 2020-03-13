import React from "react";
import { Text, StyleSheet, View } from "react-native";
import NowPlayingFragment from "../fragments/NowPlayingFragment";

const AccountScreen = () => {
  const varCom = "AccountScreen";
  return(
  	<View style={styles.container}>
           <Text style={styles.text}>{varCom}</Text>
           <NowPlayingFragment />
           
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

export default AccountScreen;