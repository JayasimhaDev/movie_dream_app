import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const Papularp = ({ navigation, route }) => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const [topt, setTopt] = useState([]);
	const [pageno, setPageno] = useState(1);
	const [isLoading, setIsLoading]=useState(false);

	const topRated = async (pg) => {
		setIsLoading(true)
		const respone = await fetch(
			`https://api.themoviedb.org/3/person/popular?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-IN&page=${pg}`
		);
		const data = await respone.json();
		 setTopt([...topt, ...data.results]);
		 setIsLoading(false);
		 setPageno(pageno+1);
	};

	const renderData =()=>{
		return isLoading ? (
     <View>
     <ActivityIndicator size="large" color="red" />
		 </View>
		):null
	}

	const loadmoreData=()=>{
		if(!isLoading){
			topRated(pageno+1)
			setPageno(pageno+1)
		}
	}
	useEffect(() => {
		topRated(pageno+1);
	}, [pageno]);
	
	return (
		<View style={{ flex: 1 }}>
			{/* <StatusBar /> */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 5,
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

			<FlatList
				numColumns={3}
				showsVerticalScrollIndicator={false}
				ListFooterComponent={renderData}
				data={topt}
				keyExtractor={(val) => val.id}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								textAlign: 'center',
								alignItems: 'center',
								alignSelf: 'center',
							}}
						>
							<TouchableOpacity
								style={{
									width: 114,
									height: 100,
									// backgroundColor: 'rgba(0,0,0,0.1)',
									padding: 5,
									justifyContent: 'center',
									textAlign: 'center',
									marginHorizontal: 3,
									marginVertical: 3,
									alignSelf: 'center',
									borderRadius: 10,
									shadowColor: 'gray',
									shadowOpacity: 0.26,
									shadowOffset: { width: 0, height: 2 },
									shadowRadius: 10,
									elevation: 3,
									backgroundColor: '#fff',
									flexGrow: 1,
								}}
								onPress={() =>
									navigation.navigate('papularprp', {
										id: item.id,
										array: topt.results,
										sub: item.known_for,
										setBackp: 0,
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
										alignSelf: 'center',
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
										alignSelf: 'center',
									}}
								>
									{item.known_for_department}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}}
				onEndReached={loadmoreData}
				onEndReachedThreshold={0.5}
			/>
		</View>
	);
};

export default Papularp;

const styles = StyleSheet.create({});
