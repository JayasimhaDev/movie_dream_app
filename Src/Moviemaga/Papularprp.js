import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
	ArrowLeftIcon,
	AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const Papularprp = ({navigation,route}) => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const [routary, setRoutary] =useState([]);
	const [paplrary, setPaplrary] = useState([])
  const [backp, setBackp] =useState(route.params.setBackp)
	const paplryfetch= async(id) =>{
		const response = await fetch(
			`https://api.themoviedb.org/3/person/${id}?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US`
		);
		const data =  await response.json();
		setRoutary(route.params.sub);
		return setPaplrary(data);
	}
	// console.log(paplrary);
	useEffect(() => {
		paplryfetch(route.params.id)
	}, []);

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={{ position: 'relative' }}>
				<Image
					source={{ uri: baseUrl + paplrary.profile_path }}
					style={{
						width: '100%',
						height: 300,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
					}}
					resizeMode="contain"
				/>
				{backp == 1 ? (
					<TouchableOpacity
						style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						onPress={() =>
							navigation.navigate('movielist', {
								name: 'Popular Starts',
							})
						}
					>
						<ArrowLeftIcon size="25" color="#01b4e4" />
					</TouchableOpacity>
				) : backp == 0 ? (
					<TouchableOpacity
						style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						onPress={() =>
							navigation.navigate('papularp', {
								name: 'Popular Starts',
							})
						}
					>
						<ArrowLeftIcon size="25" color="#01b4e4" />
					</TouchableOpacity>
				) : null}
			</View>
			<View style={{ padding: 10 }}>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 20,
							color: '#01b4e4',
							fontWeight: '600',
						}}
					>
						{paplrary.name}
					</Text>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 20,
							color: '#0d253f',
							fontWeight: '600',
							paddingLeft: 10,
						}}
					>
						({paplrary.known_for_department})
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 18,
							color: '#01b4e4',
							fontWeight: '600',
						}}
					>
						Born :
					</Text>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 16,
							color: '#0d253f',
							fontWeight: '600',
							paddingLeft: 10,
						}}
					>
						{paplrary.birthday}
					</Text>
				</View>
				<View>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 18,
							color: '#01b4e4',
							fontWeight: '600',
						}}
					>
						Biography
					</Text>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 16,
							color: '#0d253f',
							fontWeight: '600',
						}}
					>
						{paplrary.biography}
					</Text>
				</View>
				<View>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 18,
							color: '#01b4e4',
							fontWeight: '600',
						}}
					>
						Place of birth :
					</Text>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 16,
							color: '#0d253f',
							fontWeight: '600',
						}}
					>
						{paplrary.place_of_birth}
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
				}}
			>
				<Text
					style={{
						fontFamily: 'Custom-Font',
						fontSize: 20,
						color: '#01b4e4',
						fontWeight: '600',
					}}
				>
					Filmography
				</Text>
				<TouchableOpacity>
					<AdjustmentsVerticalIcon size="25" color="#01b4e4" />
				</TouchableOpacity>
			</View>
			<FlatList
				horizontal
				data={routary}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<View>
							<TouchableOpacity
								style={{
									marginHorizontal: 3,
								}}
								onPress={() =>
									navigation.navigate('moviebnrp', {
										id: item.id,
										array: routary,
										pro: item.production_companies,
										type: item.media_type,
										setbackr: 3,
									})
								}
							>
								<Image
									source={{ uri: baseUrl + item.poster_path }}
									style={{
										width: 114,
										height: 170,
										borderRadius: 3,
										alignSelf: 'center',
									}}
									// resizeMode="contain"
								/>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</ScrollView>
	);
}

export default Papularprp;

const styles = StyleSheet.create({})