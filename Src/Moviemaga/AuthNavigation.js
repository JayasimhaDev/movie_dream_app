import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
console.reportErrorsAsExceptions = false;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sidenavp from './Sidenavp';
import Sidenavpj from './Sidenavpj';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
	
			<Stack.Navigator>
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
				<Stack.Screen
					name="sidenavpj"
					component={Sidenavpj}
					options={{
						headerShown: false,
						statusBarHidden: false,
						statusBarStyle: 'dark',
						statusBarColor: 'white',
					}}
				/>
				<Stack.Screen
					name="appnavigation"
					component={AppNavigation}
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

export default AuthNavigation

const styles = StyleSheet.create({})