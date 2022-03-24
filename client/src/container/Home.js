import React, { useState, useEffect } from 'react';
import {Text,View, StyleSheet} from 'react-native'
import { FontAwesome ,Entypo,AntDesign } from '@expo/vector-icons';
import ConverterCell from '../component/home/ConverterCell';
import Sentence from '../component/home/Sentence';
import Translation from '../component/home/Translation';
import { translate } from '../api/translate-api';
import { Loader,showToast } from '../helper/component/Indicator';
import {getData, storeData } from '../helper/helper';
import ModalPage from '../helper/component/Modal';

const Home=()=>{
    const [language, setLanguage]= useState({
        orginal:'French',
        translate:'English'
    })

    const [sentence, setSentence]= useState({
        orginal:'',
        translate:''
    })

    const[loading,setLoading]=useState(false)
    const [selectLanguage,setSelectLanguage] = useState('')
    const[modalVisible, setModalVisible] = useState(false)
 

    const handleTranslate= async()=>{
        setLoading(true)
        const result= await translate(sentence.orginal)
        if(result?.prediction)
        {
            console.log(sentence.orginal, result);
            setSentence({...sentence, translate: result.prediction})
        }
        else 
        {
           showToast("Something went wrong")
        }
        setLoading(false)
     
    }

    const handleAddToFavourite =()=>{

        if( sentence.orginal &&  sentence.translate )
        {

            const translationDetails =
            {
                orginalLanguage: language.orginal,
                translateLanguage: language.translate,
                orginalSentence: sentence.orginal,
                translateSentence: sentence.translate
            }

            getData('favourite', (data) => {
                let result = []

                if (data)   // already exist in Async
                {
                    result = [...data]
                    result.push(translationDetails)

                }
                else   // create new array of favourite
                {
                    result.push(translationDetails)
                }

                storeData('favourite', result)
            })
        }

        else 
        {
            showToast("Cannot save to Favourite")
        }

    }
    

    return (
        <View style={styles.container}>
              <Loader loading={loading}/>
              <ConverterCell  handleParentState= {(lang)=>{  setSelectLanguage(lang) ;setModalVisible(true) }}   />     
              <Sentence  sentence={sentence.orginal}  handleParentState= {(feedBack)=> setSentence({...sentence, orginal:feedBack}) } handleTranslate={handleTranslate} />
              <Translation  translate= {sentence.translate} handleAddToFavourite ={handleAddToFavourite}  />
              <ModalPage modalVisible={modalVisible} setModalVisible={setModalVisible} title={"Select Language"} status={selectLanguage} handleParentState={()=>{}}  />
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