import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { translate } from '../../api/translate-api';


const ConverterCell = ({ orginal,translate,handleParentState}) => {
    return (
        <View style={styles.container} >
            <View style={styles.cell}>
                <Text>{orginal}</Text>
                <TouchableOpacity  onPress={()=>handleParentState("orginal")} >
                   <AntDesign name="caretdown" size={24}  style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.cell}>
                <AntDesign name="retweet" size={24} color="black" style={styles.icon}  />
            </View>
            <View style={styles.cell}>
                <Text>{translate}</Text>
                <TouchableOpacity  onPress={()=>handleParentState("translate")} >
                   <AntDesign name="caretdown"  style={styles.icon}  />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({


    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
       // marginHorizontal: 20
    },
    cell: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        borderColor:'red',
        borderWidth:2,
        flexGrow:1,
        justifyContent:'space-around'
       
    },
    icon:{
        fontSize:24
    }

})
export default ConverterCell