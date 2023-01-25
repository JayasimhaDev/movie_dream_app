import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
} from 'react-native';
console.reportErrorsAsExceptions = false;
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homemaga from './Src/Moviemaga/Homemaga';
import Movielist from './Src/Moviemaga/Movielist';
import Moviebnrp from './Src/Moviemaga/Moviebnrp';
import Toprated from './Src/Moviemaga/Toprated';
import Papularp from './Src/Moviemaga/Papularp';
import Papularprp from './Src/Moviemaga/Papularprp';
import Moviefind from './Src/Moviemaga/Moviefind';
import Searchrepg from './Src/Moviemaga/Searchrepg';
import Sidenavp from './Src/Moviemaga/Sidenavp';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="homemaga"
					component={Homemaga}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="movielist"
					component={Movielist}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="moviebnrp"
					component={Moviebnrp}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="toprated"
					component={Toprated}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="papularp"
					component={Papularp}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="papularprp"
					component={Papularprp}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="moviefind"
					component={Moviefind}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="searchrepg"
					component={Searchrepg}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="sidenavp"
					component={Sidenavp}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App

const styles = StyleSheet.create({})