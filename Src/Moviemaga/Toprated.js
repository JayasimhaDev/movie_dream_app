import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const Toprated = ({navigation,route}) => {
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const [top, setTop] = useState([]);
	const [pageno,setPageno] =useState(1)
	const topRated = async (pg) => { 
		const respone = await fetch(
			`https://api.themoviedb.org/3/movie/${route.params.category}?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=1`
		);
		const data = await respone.json();
		return setTop(data);
	};
	useEffect(() => {
		topRated();
	}, []);
 console.log(top);
 console.log(route.params.id);
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
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
					ListFooterComponent={() => <Text>The End!</Text>}
					data={top.results}
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
										array: top.results,
										setbackr: 1,
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
				/>
			</View>
		</View>
	);
}

export default Toprated;

const styles = StyleSheet.create({})