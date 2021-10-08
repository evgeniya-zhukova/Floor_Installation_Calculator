import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
//Stack navigation
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen} from './screens/MainScreen.js';
import {SecondScreen} from './screens/AboutScreen.js';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Calculation' }}
                    />
                    <Stack.Screen
                        name="About"
                        component={SecondScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
