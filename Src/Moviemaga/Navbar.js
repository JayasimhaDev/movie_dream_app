import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, MoonIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';

const Navbar = () => {
	 
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	
	const [navbr, setNavbr] = useState([]);
	const Navbritem = async ()=>{
		const response = await fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US'
		);
		const data =await response.json();
		return setNavbr(data);
	
	}
	useEffect(() => {
		Navbritem();
	},[]);
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
					alignItems: 'center',
				}}
			>
				<TouchableOpacity>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 30,
							color: '#01b4e4',
							fontWeight: '800',
						}}
					>
						JAYA
					</Text>
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
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							height:20,
							width:200,
						}}
					/>
					<MagnifyingGlassIcon color="black" size="20" />
				</View>
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
							<TouchableOpacity>
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
}

export default Navbar;

const styles = StyleSheet.create({})