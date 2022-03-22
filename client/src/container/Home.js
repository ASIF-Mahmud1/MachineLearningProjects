import * as React from 'react';
import {Text,View, StyleSheet} from 'react-native'
import { FontAwesome ,Entypo,AntDesign } from '@expo/vector-icons';
import ConverterCell from '../component/home/ConverterCell';
import Sentence from '../component/home/Sentence';
import Translation from '../component/home/Translation';
const Home=()=>{
    return (
        <View style={styles.container}>
              <ConverterCell />     
              <Sentence />
              <Translation />
        </View>
     
    )
}


const styles = StyleSheet.create({ 
     container:{
      display:'flex',
      flexGrow:1,   
      backgroundColor:'white',
      paddingHorizontal:20,
     
     },

})

export default Home
