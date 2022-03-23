import React, { useState } from 'react';
import {Text,View, StyleSheet} from 'react-native'
import { FontAwesome ,Entypo,AntDesign } from '@expo/vector-icons';
import ConverterCell from '../component/home/ConverterCell';
import Sentence from '../component/home/Sentence';
import Translation from '../component/home/Translation';
import { translate } from '../api/translate-api';

const Home=()=>{
    const [language, setLanguage]= useState({
        orginal:'French',
        translate:'English'
    })

    const [sentence, setSentence]= useState({
        orginal:'',
        translate:''
    })

    const handleTranslate= async()=>{
        const result= await translate(sentence.orginal)
        if(result?.prediction)
        {
            console.log(sentence.orginal, result);
            setSentence({...sentence, translate: result.prediction})
        }
     
    }

    return (
        <View style={styles.container}>
              <ConverterCell />     
              <Sentence  sentence={sentence.orginal}  handleParentState= {(feedBack)=> setSentence({...sentence, orginal:feedBack}) } handleTranslate={handleTranslate} />
              <Translation  translate= {sentence.translate} />
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

/*

orginalLanguage
translateLanguage

orginalSentence
translateSentence
*/