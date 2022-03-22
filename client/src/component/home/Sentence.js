import * as React from 'react';
import {Text,View, StyleSheet,TouchableOpacity, TextInput} from 'react-native'
import { FontAwesome ,Entypo,AntDesign } from '@expo/vector-icons';

const Sentence=()=>{
    return (
        <View style={styles.container}>
            <View style={styles.top} >
               <View style={styles.topLeft}>
                   <Text>French</Text>  
               </View> 
               <View  style={styles.topRight}>
                   <TouchableOpacity>
                       <Entypo name="circle-with-cross" size={24} color="black" />
                   </TouchableOpacity>
                   <TouchableOpacity>
                      <Text>Translate</Text>  
                   </TouchableOpacity>
                   
               </View>
            </View>
            <TextInput  placeholder='Enter Text in French'  multiline={true}  style={styles.input}/>
           
        </View>
     
    )
}


const styles = StyleSheet.create({ 
     container:{
      display:'flex',
     // flexGrow:1,   
      backgroundColor:'white',
      paddingVertical:30
     },
     top:{
       flexDirection:'row',
       justifyContent:'space-between'
     },
     topLeft:{
        flexGrow:3,
        justifyContent:'center'
     },
     topRight:{
         flexDirection:'row',
         flexGrow:1,
         borderWidth:1,
         justifyContent:'space-around',
         alignItems:'center'
     },
     input:{
        borderColor:'#ffa600',
        borderWidth:2,
        borderRadius:20,
        marginTop:15,
        paddingHorizontal:15,
       // paddingVertical:60,
      //  color:'white',
        height:100,
        fontSize:20
     }

})

export default Sentence
