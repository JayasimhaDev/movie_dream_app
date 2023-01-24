import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ArrowLeftIcon,
	UserCircleIcon,
	CircleStackIcon,
	XCircleIcon,
	HomeIcon,
	Cog6ToothIcon,
	EnvelopeIcon,
	RectangleGroupIcon,
	StarIcon,
	ShareIcon,
	FlagIcon,
	EllipsisHorizontalIcon,
	ExclamationCircleIcon,
	ArrowRightIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';

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

	const [userpg, setUserpg]=useState(false);
	return (
		<View>
			{/* <StatusBar  /> */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 5,
					alignItems: 'center',
					marginBottm: 1,
				}}
			>
				<TouchableOpacity onPress={() => setUserpg(true)}>
					<Bars3Icon size="35" color="#01b4e4" />
				</TouchableOpacity>
				<Modal visible={userpg} transparent={true}>
					<View
						style={{
							backgroundColor: 'rgba(0,0,0,0.7)',
							width: '100%',
							height: '100%',
						}}
					>
						<View
							style={{ width: '80%', height: '100%', backgroundColor: '#fff' }}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									padding: 10,
									paddingLeft: 10,
									paddingRight: 10,
								}}
							>
								<TouchableOpacity onPress={() => setUserpg(false)}>
									<XCircleIcon size="30" color="#01b4e4" />
								</TouchableOpacity>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 20,
										color: '#01b4e4',
										fontWeight: '600',
									}}
								>
									User
								</Text>
							</View>
							<View
								style={{
									justifyContent: 'center',
									borderBottomWidth: 2,
									borderBottomColor: 'balck',
									paddingBottom: 10,
								}}
							>
								<Image
									source={{
										uri: 'https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000',
									}}
									style={{ width: 100, height: 100, alignSelf: 'center' }}
								/>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 18,
										color: '#01b4e4',
										fontWeight: '600',
										alignSelf: 'center',
										marginTop: 15,
									}}
								>
									Login to your account
								</Text>
							</View>
							<View
								style={{
									padding: 16,
									borderBottomWidth: 1,
									borderBottomColor: 'balck',
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
									}}
								>
									<HomeIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Home
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 15,
									}}
								>
									<RectangleGroupIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Login / Register
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<Cog6ToothIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Settings
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<EnvelopeIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										About
									</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{
									padding: 16,
								}}
							>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 13,
										color: 'black',
										fontWeight: '600',
										paddingBottom: 5,
									}}
								>
									Applications
								</Text>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 10,
									}}
								>
									<StarIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Rate App
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 15,
									}}
								>
									<ShareIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Share this App
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<FlagIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Report the & Help
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<ExclamationCircleIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Policy Privacy
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<ArrowLeftIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Exit
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
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
				<TouchableOpacity
					onPress={() => navigation.navigate('searchrepg')}
					style={{
						backgroundColor: 'rgba(0,0,0,0.1)',
						padding: 7,
						borderRadius: 15,
					}}
				>
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