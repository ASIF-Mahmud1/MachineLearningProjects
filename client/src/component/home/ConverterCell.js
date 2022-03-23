import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';


const ConverterCell = () => {
    return (
        <View style={styles.container} >
            <View style={styles.cell}>
                <Text>French</Text>
                <TouchableOpacity>
                   <AntDesign name="caretdown" size={24}  style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.cell}>
              
                <AntDesign name="retweet" size={24} color="black" style={styles.icon}  />
            </View>
            <View style={styles.cell}>
                <Text>English</Text>
                <TouchableOpacity>
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