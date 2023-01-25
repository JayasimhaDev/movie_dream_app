
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
	Image,
	ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	MagnifyingGlassIcon,
	ArrowLeftIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Searchrepg = () => {
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
 const navigation = useNavigation();
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);
   

	
		const fetchMovies = async (search)=> {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=1&include_adult=false&query=${search}`
			);
			const data = await response.json();
			const moviesWithOnlyPosters =
				data.results.filter((item) => (item.poster_path != null ? item : null));
			setMovies(moviesWithOnlyPosters);
		}
    
	const updateSearch=(e) =>{
		setSearch(e);
	}

	const getQuery=(e) =>{
		fetchMovies(search);
	}

		
	return (
		<View>
			{/* <StatusBar  /> */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
					alignItems: 'center',
				}}
			>
				<TouchableOpacity onPress={() => navigation.navigate('movielist')}>
					<ArrowLeftIcon size="25" color="#01b4e4" />
				</TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						height: 35,
						alignItems: 'center',
						backgroundColor: 'rgba(0,0,0,0.1)',
						padding: 10,
						width: 250,
						justifyContent: 'space-between',
						borderRadius: 5,
					}}
				>
					<TextInput
						placeholder="Search for Movies"
						value={search}
						onChangeText={updateSearch}
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							height: 20,
							width: 200,
						}}
					/>
					<TouchableOpacity onPress={getQuery}>
						<MagnifyingGlassIcon color="black" size="20" />
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<FlatList
					numColumns={3}
					columnWrapperStyle={{ justifyContent: 'space-around' }}
					showsHorizontalScrollIndicator={false}
					// style={{ flex: 1 }}
					data={movies}
					keyExtractor={(val) => val.id}
					renderItem={({ item }) => {
						return (
							<ScrollView style={{ flex: 1 }}>
								<TouchableOpacity
									style={{
										marginHorizontal: 2,
										marginVertical: 2,
									}}
									onPress={() =>
										navigation.navigate('moviebnrp', {
											id: item.id,
											array: movies,
											type: 'movie',
											setbackr: 5,
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
											zIndex: 100,
										}}
										// resizeMode="contain"
									/>
								</TouchableOpacity>
							</ScrollView>
						);
					}}
				/>
			</View>
		</View>
	);
}

export default Searchrepg;

const styles = StyleSheet.create({})