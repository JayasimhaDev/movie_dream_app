import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ActivityIndicator
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const Toprated = ({ navigation, route},id) => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const [top, setTop] = useState([]);
	const [pageno, setPageno] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [msarray, setMsarray]=useState(route.params.category)
	const [type, setType]=useState(route.params.type)
	const topRated = async (pgn) => {
		setIsLoading(true);
		const respone = await fetch(
			`https://api.themoviedb.org/3/${type}/${msarray}?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=${pgn}&append_to_response=media_type`
		);
		const data = await respone.json();
			setTop([...top, ...data.results]);
			setIsLoading(false);
			setPageno(pageno + 1);
		
	};
	const renderLoder = () => {
		return isLoading ? (
			<View>
				<ActivityIndicator size="large" color="red" />
			</View>
		) : null;
	};
	
	const loadmoreItem = () => {
		if (!isLoading) {
			topRated(pageno+1);
			setPageno(pageno + 1);
		}
	};
	useEffect(() => {
		topRated(pageno);
	}, [pageno]);
	
	return (
		<View>
			{/* <StatusBar /> */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
				}}
				key={id}
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
					columnWrapperStyle={{ justifyContent: 'space-around' }}
					initialNumToRender={1}
					refreshing={isLoading}
					ListFooterComponent={renderLoder}
					data={top}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={{
									marginHorizontal: 2,
									marginVertical: 2,
									flexGrow: 1,
								}}
								onPress={() =>{
									navigation.navigate('moviebnrp',{
										id: item.id,
										array: top,
										type: route.params.type,
										setbackr: 1,
									})
								}}
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
					onEndReached={loadmoreItem}
					onEndReachedThreshold={0.5}
				/>
			</View>
		</View>
	);
};

export default Toprated;

const styles = StyleSheet.create({})