import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
} from 'react-native';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './Src/Moviemaga/AuthNavigation';


const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
      <AuthNavigation />
		</NavigationContainer>
	);
}

export default App

const styles = StyleSheet.create({})