import React, { useEffect } from 'react';
import { Text } from 'react-native'
import { getData } from '../helper/helper';
import { useIsFocused } from '@react-navigation/native';

const Favourite = () => {
    const isFoucsed = useIsFocused()
    useEffect(() => {
        if (isFoucsed) {
            getData("favourite", (data) => {
                if (data) 
                {
                    console.log(JSON.stringify(data));
                  //  alert(data.length)
                }
            })
        }

    }, [isFoucsed])

    return <Text>Favourite</Text>
}

export default Favourite