import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Incidents from './pages/Incidents'
import Detail from './pages/Detail'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR' //importando o idioma

const Stack = createStackNavigator();

const stackOptions = {
    headerShown: false
}

function Routes() {

    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions = {stackOptions}>

                <Stack.Screen name="Incidents" component={Incidents} />
                <Stack.Screen name="Detail" component={Detail} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}


export default Routes;

