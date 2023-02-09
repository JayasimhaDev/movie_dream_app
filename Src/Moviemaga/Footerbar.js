import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
	HomeIcon,
	FilmIcon,
	TvIcon,
	CommandLineIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Footerbar = () => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const navigation = useNavigation();

	const [top, setTop] = useState([]);
	const topRated = async () => {
		const respone = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=1'
		);
		const data = await respone.json();
		return setTop(data);
	};
	useEffect(() => {
		topRated();
	}, []);

	return (
		<View>
			{/* <StatusBar  /> */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					height: 50,
					backgroundColor: 'rgba(0,0,0,0.1)',
					paddingTop: 8,
				}}
			>
				<TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center' }}>
					<HomeIcon size="24" color="#01b4e4" />
					<Text
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							alignSelf: 'center',
						}}
					>
						Home
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ alignSelf: 'center', alignItems: 'center' }}
					onPress={() =>
						navigation.navigate('toprated', {
							array: top.results,
							name: 'Movies',
							type: 'movie',
							category: 'top_rated',
						})
					}
				>
					<FilmIcon size="24" color="#01b4e4" />
					<Text
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							alignSelf: 'center',
						}}
					>
						Movie
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ alignSelf: 'center', alignItems: 'center' }}
					onPress={() =>
						navigation.navigate('toprated', {
							array: top.results,
							name: 'TV Shows',
							type: 'tv',
							category: 'top_rated',
						})
					}
				>
					<TvIcon size="24" color="#01b4e4" />
					<Text
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							alignSelf: 'center',
						}}
					>
						TV Show
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center' }}>
					<CommandLineIcon size="24" color="#01b4e4" />
					<Text
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							alignSelf: 'center',
						}}
					>
						Chat Box
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Footerbar;

const styles = StyleSheet.create({})