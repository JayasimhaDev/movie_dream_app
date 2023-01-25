import {
	FlatList,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useFonts } from 'expo-font';
import { AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import Footerbar from './Footerbar';
import { StatusBar } from 'expo-status-bar';


const Movielist = ({ navigation }) => {

	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const [user, setUser] = useState([]);
	const fetchData = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-IN&page=1'
		);
		const data = await response.json();
		return setUser(data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	//  console.log(user);
	const [people, setPeople] = useState([]);
	const peopleData = async () => {
		const respone = await fetch(
			'https://api.themoviedb.org/3/person/popular?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-IN&page=1'
		);
		const data = await respone.json();
		return setPeople(data);
	};
	useEffect(() => {
		peopleData();
	}, []);

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

	const [popular, setPopular] = useState([]);
	const popularM = async () => {
		const respone = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=1'
		);
		const data = await respone.json();
		return setPopular(data);
	};
	useEffect(() => {
		popularM();
	}, []);

	const [upcomming, setUpcomming] = useState([]);
	const upcommingM = async () => {
		const respone = await fetch(
			'https://api.themoviedb.org/3/movie/upcoming?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-UN&page=2'
		);
		const data = await respone.json();
		return setUpcomming(data);
	};
	useEffect(() => {
		upcommingM();
	}, []);

	const [nowplaying, setNowplaying] = useState([]);
	const nowplayingM = async () => {
		const respone = await fetch(
			'https://api.themoviedb.org/3/movie//now_playing?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=3'
		);
		const data = await respone.json();
		return setNowplaying(data);
	};
	useEffect(() => {
		nowplayingM();
	}, []);
 
	return (
		<View style={{ flex: 1 }}>
			{/* <StatusBar
			/> */}
			<Navbar />
			<ScrollView style={{ flex: 1, marginTop: 5,  }}>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={user.results}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={{
									justifyContent: 'center',
									position: 'relative',
									alignItems: 'center',
									marginHorizontal: 5,
									borderRadius: 10
								}}
								onPress={() =>
									navigation.navigate('moviebnrp', {
										id: item.id,
										array: user.results,
										type: 'movie',
										setbackr: 2,
									})
								}
							>
								<Image
									source={{ uri: baseUrl + item.backdrop_path }}
									style={{
										width:350,
										height: 220,
										justifyContent: 'center',
										alignItems: 'center',
										alignSelf: 'center',
										borderRadius: 5,
									}}
									resizeMode="contain"
								/>
								<View
									style={{
										position: 'absolute',
										bottom: 0,
										width: 350,
										height: 55,
										alignItems: 'center',
										backgroundColor: 'rgba(0,0,0,0.7)',
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
									}}
								>
									<Text
										style={{
											color: '#fff',
											fontSize: 17,
											fontWeight: '500',
											fontFamily: 'Custom-Font',
											padding: 5,
											textAlign: 'left',
										}}
									>
										{item.original_title}
									</Text>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
				<View>
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
								fontSize: 15,
								color: '#01b4e4',
								fontWeight: '600',
							}}
						>
							Popular Starts
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('papularp', { name: 'Popular Starts' })
							}
						>
							<AdjustmentsVerticalIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					</View>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={people.results}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										width: 84,
										height: 100,
										padding: 5,
										justifyContent: 'center',
										textAlign: 'center',
										marginHorizontal: 3,
										alignSelf: 'center',
										borderRadius: 10,
										shadowColor: 'gray',
										shadowOpacity: 0.26,
										shadowOffset: { width: 0, height: 1 },
										shadowRadius: 10,
										elevation: 3,
										backgroundColor: '#fff',
										marginBottom: 4,
									}}
									onPress={() =>
										navigation.navigate('papularprp', {
											id: item.id,
											array: nowplaying.results,
											sub: item.known_for,
											pro: item.production_companies,
											setBackp: 1,
										})
									}
								>
									<Image
										source={{ uri: baseUrl + item.profile_path }}
										style={{
											width: 50,
											height: 50,
											borderRadius: 20,
											alignSelf: 'center',
										}}
										resizeMode="cover"
									/>
									<Text
										ellipsizeMode="tail"
										numberOfLines={1}
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 13,
											color: '#0d253f',
											fontWeight: '600',
										}}
									>
										{item.name}
									</Text>
									<Text
										ellipsizeMode="tail"
										numberOfLines={1}
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 13,
											color: '#0d253f',
											fontWeight: '600',
										}}
									>
										{item.known_for_department}
									</Text>
								</TouchableOpacity>
							);
						}}
					/>
				</View>
				<View>
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
								fontSize: 15,
								color: '#01b4e4',
								fontWeight: '600',
							}}
						>
							Top Rated
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('toprated', {
									array: top.results,
									category: 'top_rated',
									name: 'Top Rated',
								})
							}
						>
							<AdjustmentsVerticalIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					</View>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={top.results}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										marginHorizontal: 3,
									}}
									onPress={() => {
										navigation.navigate('moviebnrp', {
											id: item.id,
											array: top.results,
											type: 'movie',
											setbackr: 2,
										});
									}}
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
							);
						}}
					/>
				</View>
				<View>
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
								fontSize: 15,
								color: '#01b4e4',
								fontWeight: '600',
							}}
						>
							Popular
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('toprated', {
									array: popular.results,
									category: 'popular',
									name: 'Popular',
								})
							}
						>
							<AdjustmentsVerticalIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					</View>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={popular.results}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										marginHorizontal: 3,
									}}
									onPress={() =>
										navigation.navigate('moviebnrp', {
											id: item.id,
											array: popular.results,
											type: 'movie',
											setbackr: 2,
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
							);
						}}
					/>
				</View>
				<View>
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
								fontSize: 15,
								color: '#01b4e4',
								fontWeight: '600',
							}}
						>
							Up Comming
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('toprated', {
									array: upcomming.results,
									category: 'upcoming',
									name: 'Up Comming',
								})
							}
						>
							<AdjustmentsVerticalIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					</View>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={upcomming.results}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										marginHorizontal: 3,
									}}
									onPress={() =>
										navigation.navigate('moviebnrp', {
											id: item.id,
											array: upcomming.results,
											category: 'upcoming',
											type: 'movie',
											setbackr: 2,
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
							);
						}}
					/>
				</View>
				<View>
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
								fontSize: 15,
								color: '#01b4e4',
								fontWeight: '600',
							}}
						>
							Now Playnig
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('toprated', {
									array: nowplaying.results,
									category: 'now_playing',
									name: 'Now Playnig',
								})
							}
						>
							<AdjustmentsVerticalIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					</View>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={nowplaying.results}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										marginHorizontal: 3,
									}}
									onPress={() =>
										navigation.navigate('moviebnrp', {
											id: item.id,
											array: nowplaying.results,
											category: 'now_playing',
											name: 'Now Playnig',
											type: 'movie',
											setbackr: 2,
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
							);
						}}
					/>
				</View>
			</ScrollView>
			<Footerbar />
		</View>
	);
};

export default Movielist;

const styles = StyleSheet.create({})