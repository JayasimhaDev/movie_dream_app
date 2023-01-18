import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {

	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
  const navigation =useNavigation();
	const [navbr, setNavbr] = useState([]);
	const [navid, setNavid] = useState([]);
	const Navbritem = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US'
		);
		const data = await response.json();
		return setNavbr(data);
	};
	useEffect(() => {
		Navbritem();
	}, []);
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 5,
					alignItems: 'center',
					marginBottm:1,
				}}
			>
				<TouchableOpacity>
					<Bars3Icon size="35" color="#01b4e4" />
				</TouchableOpacity>
				<TouchableOpacity>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 25,
							color: '#01b4e4',
							fontWeight: '600',
						}}
					>
						Movie Dream
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('searchrepg')} style={{backgroundColor:"rgba(0,0,0,0.1)",padding:7,borderRadius:15}}>
					<MagnifyingGlassIcon color="black" size="20" />
				</TouchableOpacity>
			</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={navbr.genres}
				keyExtractor={(val) => val.id}
				renderItem={(item) => {
					return (
						<View
							style={{
								paddingLeft: 10,
								paddingRight: 5,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('moviefind', {
										id: item.item.id,
										name: item.item.name,
									});
								}}
							>
								<Text
									style={{
										fontSize: 18,
										color: '#0d253f',
										fontFamily: 'Custom-Font',
										fontWeight: '650',
									}}
								>
									{item.item.name}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default Navbar;

const styles = StyleSheet.create({})