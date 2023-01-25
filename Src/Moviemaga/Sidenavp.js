import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ArrowLeftIcon,
	UserCircleIcon,
	CircleStackIcon,
	XCircleIcon,
	HomeIcon,
	Cog6ToothIcon,
	EnvelopeIcon,
	RectangleGroupIcon,
	StarIcon,
	ShareIcon,
	FlagIcon,
	EllipsisHorizontalIcon,
	ExclamationCircleIcon,
	ArrowRightIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';

const Sidenavp = () => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	 const navigation = useNavigation();
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
				}}
				
			>
				<TouchableOpacity onPress={() =>{ navigation.navigate('movielist');}}>
					<ArrowLeftIcon size="30" color="#01b4e4" />
				</TouchableOpacity>
				<Text
					style={{
						fontFamily: 'Custom-Font',
						fontSize: 20,
						color: '#01b4e4',
						fontWeight: '600',
					}}
				>
					Login / Register
				</Text>
			</View>
			<Text>JAYASIMHA</Text>
		</View>
	);
};

export default Sidenavp;

const styles = StyleSheet.create({});
