import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stacknavigation from './navigation/Stacknavigation';
import Cineprovider from './context/cinecontext'

export default function App() {
  return (
    <Cineprovider>
      <NavigationContainer>
        <Stacknavigation/>
      </NavigationContainer>
    </Cineprovider>
  );
}

