import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import Navbar from './Navbar';
import { StatusBar } from 'expo-status-bar';

const Moviefind = ({ navigation, route }) => {
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const [mvfind, setMvfind] = useState([]);
	const [pagea, setPagea]=useState(1);
	const [isLoading, setIsLoading] =useState(false);
	const topRated = async (pgn) => {
		setIsLoading(true);
		const respone = await fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=04267d8d72061cab657e5c6f5a9737f8&with_genres=${route.params.id}&page=${pgn}`
		);
		const data = await respone.json();
		setMvfind([...mvfind,...data.results]);
		setIsLoading(false);
		setPagea(pagea + 1)
	};
const foterCount =()=>{
	return isLoading ?(
		<View>
			<ActivityIndicator size="large" color="red"/>
		</View>
	):null
};

const renderItem =()=>{
if(!isLoading){
 topRated(pagea+1);
  setPagea(pagea+1)
}
}
	useEffect(() => {
		topRated(pagea + 1);
	}, [pagea]);
	
	return (
		<View style={{ flex: 1 }}>
			{/* <StatusBar /> */}
			<View style={{ flex: 1 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: 3,
						paddingLeft: 5,
						paddingRight: 5,
					}}
				>
					<TouchableOpacity onPress={() => navigation.navigate('movielist')}>
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
						{route.params.name}
					</Text>
				</View>
				<View>
					<FlatList
						numColumns={3}
						showsVerticalScrollIndicator={false}
						initialNumToRender={10}
						refreshing={isLoading}
						ListFooterComponent={foterCount}
						data={mvfind}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										marginHorizontal: 2,
										marginVertical: 2,
									}}
									onPress={() =>
										navigation.navigate('moviebnrp', {
											id: item.id,
											array: mvfind,
											type: 'movie',
											setbackr: 4,
											name: route.params.name,
										})
									}
								>
									<Image
										source={{ uri: baseUrl + item.poster_path }}
										style={{
											width: 115,
											height: 170,
											borderRadius: 3,
											alignSelf: 'center',
										}}
										// resizeMode="contain"
									/>
								</TouchableOpacity>
							);
						}}
						onEndReached={renderItem}
						onEndReachedThreshold={0.05}
					/>
				</View>
			</View>
		</View>
	);
};

export default Moviefind;

const styles = StyleSheet.create({});
