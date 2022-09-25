import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GalleryScreen } from './GalleryScreen';
import { OneImg } from './OneImg';

export const Main = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="List" component={GalleryScreen} options={{ title: 'Gallery' }}/>
                <Stack.Screen name="OneImg" component={OneImg} options={{ title: 'Image' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

