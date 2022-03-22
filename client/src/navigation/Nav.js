import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from 'react-native'
import Home from '../container/Home';
import Favourite from '../container/Favourite';


const NewExpense=()=>{
    return <Text>NewExpense</Text>
}

////////////////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

function HomeStack() {
  return ( <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}   options={{headerShown:false}}/>
        <Stack.Screen name="NewExpense" component={NewExpense}   options={{headerShown:false}} />
      </Stack.Navigator>
  );
}

//////////////////////////////////////////////////////////////////////////////////

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Favourite" component={Favourite} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}