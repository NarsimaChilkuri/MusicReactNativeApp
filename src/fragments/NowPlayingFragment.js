import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";

const NowPlayingFragment = (props) => {
  const varCom = "NowPlayingFragment";
  console.log(props);
  return(
    
  	<TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate("SongPlaying")}>   
    </TouchableOpacity>
    
    );
};

const styles = StyleSheet.create({
  container:{
    width: Math.round(Dimensions.get('window').width)  ,
    height: Math.round(Dimensions.get('window').height) * 0.1,
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0, 
    borderWidth: 1, 
    borderColor: '#FFFFFF',
    borderTopColor: '#FFFFFF',
    borderRightColor: '#FFFFFF'
  },
  text: {
    fontSize: 30
  }
});

export default NowPlayingFragment;