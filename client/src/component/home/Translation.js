import * as React from 'react';
import {Text,View, StyleSheet,TouchableOpacity, TextInput, Clipboard} from 'react-native'
import {  Ionicons ,AntDesign ,MaterialIcons} from '@expo/vector-icons';

const Translation=({translate})=>{
    return (
        <View style={styles.container}>
            <View style={styles.top} >
               <View style={styles.topLeft}>
                   <Text>English</Text>  
               </View> 
        
            </View>
            <TextInput value={translate} placeholder='Translate to English'  multiline={true}  style={styles.input} selectTextOnFocus={false}  editable={false} />
            <View  style={styles.topRight}>
                   <TouchableOpacity onPress={()=>{Clipboard.setString(translate)}} >
                      <Ionicons name="copy-outline" size={24} color="black" />
                      {/* <Ionicons name="copy" size={24} color="black" /> */}
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <AntDesign name="sharealt" size={24} color="black" />
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <MaterialIcons name="favorite-outline" size={24} color="black" />
                       {/* <MaterialIcons name="favorite" size={24} color="black" /> */}
                   </TouchableOpacity>
                   
               </View>
        </View>
     
    )
}


const styles = StyleSheet.create({ 
     container:{
      display:'flex',
      flexGrow:1,   
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
         marginVertical:10,
         paddingVertical:10,
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
        fontSize:20,
        color:'red'
     }

})

export default Translation
