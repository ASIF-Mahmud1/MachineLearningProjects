import { AsyncStorage} from 'react-native'

const getData = async (key, callback) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value != null) {
            callback(JSON.parse(value))
        }
        else {
            callback(null)
        }
    } catch (e) {
        callback(null)
        console.log('Unable to get Data', e)
    }
}

const storeData = async (key, value, callback) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        callback && callback()
    } catch (e) {
        console.log('Unable to store Data', e)
    }
}

const truncate=(string, limit)=>{
    if (string.length > limit) {
    return string.substring(0, limit-1) + "...";
    }
    return string
  }




export { 

    getData, 
    storeData,
    truncate
}