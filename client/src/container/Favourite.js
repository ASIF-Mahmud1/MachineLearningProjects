import React, { useState ,useEffect } from 'react';
import { View,Text ,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { getData } from '../helper/helper';
import { useIsFocused } from '@react-navigation/native';
import { Feather ,Entypo  } from '@expo/vector-icons';
import { getSuggestions } from '../helper/helper';
const Favourite = () => {
    const isFoucsed = useIsFocused()
    const [text, onChangeText] = React.useState('');
    const [search, setSearch] = useState([]);
    const [favourite, setFavourite]= useState([])

    const handleSearch = (userInput) => {

        let result = getSuggestions(favourite, userInput)
        if (userInput) {
            console.log(result, '\n', result.length);
            setSearch(result)
        }
        else {
            setSearch(favourite)
        }
    }

    useEffect(() => {
        if (isFoucsed) {
            getData("favourite", (data) => {
                if (data) 
                {
                  console.log(JSON.stringify(data));
                 
                  setFavourite(data)
                }
            })
        }

    }, [isFoucsed])

    useEffect(()=>{
        handleSearch(text)
    },[text])

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.textInputLayout}>
                    <Feather name="search" size={25} color="grey" />
                    <TextInput style={styles.textInput} placeholder="  Search By Sentence" onChangeText={onChangeText} value={text}
                    />

                </View>
                <View style={{ flexDirection: 'row', flexGrow: 6 }}>
                    <TouchableOpacity onPress={() => { onChangeText('') }} style={{ justifyContent: 'flex-end' }}>
                        <Entypo name="circle-with-cross" size={26} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
     display:'flex',
     flexGrow:1,   
     backgroundColor:'white',
    // paddingHorizontal:20,
    
    },
    textInput: { 
        fontSize: 20, 

    },
    textInputLayout:{
        flexDirection: 'row', 
        marginVertical: 10, 
        marginHorizontal: 20, 
        borderWidth: 1, 
        borderRadius: 50, 
        borderColor: 'grey',
        padding: 10 ,
        width:300
    },
    
})


export default Favourite



/*  



<TextInput style={styles.textInput} placeholder="Search By Name" onChangeText={onChangeText} value={text}
/>









    */