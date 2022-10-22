import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";

const Stack = createNativeStackNavigator();

const Routes = ()=>{
    return(
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
    );
}

export default Routes;