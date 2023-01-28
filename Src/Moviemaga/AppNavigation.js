import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
console.reportErrorsAsExceptions = false;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homemaga from './Homemaga';
import Movielist from './Movielist';
import Moviebnrp from './Moviebnrp';
import Toprated from './Toprated';
import Papularp from './Papularp';
import Papularprp from './Papularprp';
import Moviefind from './Moviefind';
import Searchrepg from './Searchrepg';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		
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
			</Stack.Navigator>
		
	);
}

export default AppNavigation;

const styles = StyleSheet.create({})