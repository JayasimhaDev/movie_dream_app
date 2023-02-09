import {
	Image,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	ScrollView,
	Modal,
} from 'react-native';
import React ,{ useState, useEffect} from 'react'
import {  ArrowLeftIcon, CheckCircleIcon,  FilmIcon, HandThumbUpIcon,  XCircleIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { Linking } from 'react-native';


const Moviebnrp = ({navigation,route}) => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const baseUrl = 'https://image.tmdb.org/t/p/w500';

	const [playmovie, setPlaymovie]=useState(false);
	const [singmovie, setSingmovie] = useState([]);
	const [genres,setGenres]=useState([]);
	const [prodcom, setProdcom]=useState([]);
	const [cast, setCast] =useState([])
	const [backr, setBackr] = useState(route.params.setbackr);
	// const [usid, setUsid]=useState(route.params.id)
	
	const Singlefilm = async (id) => {
		const response = await fetch(
			`https://api.themoviedb.org/3/${route.params.type}/${id}?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&append_to_response=credits`
		);
		const data = await response.json();
		setGenres(data.genres)
		setProdcom(data.production_companies)
		setCast(data.credits.cast)
		return setSingmovie(data);
	};
	useEffect(() => {
		Singlefilm(route.params.id);
		
	}, []);
   const [arrayte, setArrayte] =useState(route.params.array);
 
	return (
		<View style={{ flex: 1 }}>
			{/* <StatusBar  /> */}
			<ScrollView>
				<View style={{ position: 'relative' }}>
					{backr == 1 ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('toprated', {
									name: 'Top Rated',
									type: 'movie',
									id: route.params.id,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					) : backr == 2 ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('movielist', {
									name: route.params.name,
									id: route.params.id,
									array: genres.results,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					) : backr == 3 ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('papularprp', {
									name: route.params.name,
									id: route.params.id,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					) : backr == 4 ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('moviefind', {
									name: route.params.name,
									id: route.params.id,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					) : backr == 5 ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('searchrepg', {
									name: route.params.name,
									id: route.params.id,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					) : null}
					<Image
						source={{
							uri: `https://image.tmdb.org/t/p/original/${singmovie.backdrop_path}`,
						}}
						style={{ width: '100%', height: 250 }}
						// resizeMode="contain"
					/>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							backgroundColor: 'rgba(0,0,0,0.1)',
							width: '100%',
						}}
					>
						<Text
							style={{
								color: '#fff',
								fontSize: 20,
								fontWeight: '600',
								fontFamily: 'Custom-Font',
								padding: 10,
							}}
						>
							{singmovie.title}
						</Text>
						<FlatList
							data={genres}
							horizontal
							showsHorizontalScrollIndicator={false}
							keyExtractor={(val) => val.id}
							renderItem={(item) => {
								return (
									<View
										style={{
											backgroundColor: 'rgab(0,0,0,0.5)',
											padding: 2,
											marginLeft: 5,
											borderColor: '#fff',
											borderWidth: 1,
											borderRadius: 3,
											marginBottom: 5,
										}}
									>
										<Text
											style={{
												color: '#fff',
												fontSize: 15,
												fontWeight: '200',
												fontFamily: 'Custom-Font',
												paddingLeft: 5,
											}}
										>
											{item.item.name}
										</Text>
									</View>
								);
							}}
						/>
					</View>
				</View>
				<View>
					<View>
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 20,
								fontWeight: '600',
								color: '#01b4e4',
								padding: 3,
							}}
						>
							{singmovie.title}
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text
								style={{
									fontFamily: 'Custom-Font',
									fontSize: 13,
									fontWeight: '600',
									color: '#0d253f',
									padding: 3,
								}}
							>
								{singmovie.release_date}
							</Text>
							<Text>&nbsp;|&nbsp;</Text>
							<Text
								style={{
									fontFamily: 'Custom-Font',
									fontSize: 13,
									fontWeight: '600',
									color: '#0d253f',
									padding: 3,
								}}
							>
								{singmovie.runtime}Min
							</Text>
							<Text>&nbsp;|&nbsp;</Text>
							<Text
								style={{
									fontFamily: 'Custom-Font',
									fontSize: 13,
									fontWeight: '600',
									color: '#0d253f',
									padding: 3,
								}}
							>
								Original Language : {singmovie.original_language}
							</Text>
							<Text>&nbsp;|&nbsp;</Text>
							<Text
								style={{
									fontFamily: 'Custom-Font',
									fontSize: 13,
									fontWeight: '600',
									color: '#0d253f',
									padding: 3,
								}}
							>
								{singmovie.status}
							</Text>
						</View>
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
								padding: 3,
							}}
						>
							{singmovie.overview}
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
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
						onPress={() => setPlaymovie(true)}
					>
						<FilmIcon size="35" color="#01b4e4" />
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
								alignSelf: 'center',
								textAlign: 'center',
							}}
						>
							Trailer
						</Text>
					</TouchableOpacity>
					<Modal visible={playmovie} transparent={true}>
						<View
							style={{
								justifyContent: 'center',
								alignSelf: 'center',
								alignItems: 'center',
								width: '100%',
								height: '100%',
								backgroundColor: 'rgba(0,0,0,0.7)',
							}}
						>
							<View
								style={{
									width: '90%',
									height: 250,
									shadowColor: 'gray',
									shadowOpacity: 0.26,
									shadowOffset: { width: 0, height: 2 },
									shadowRadius: 10,
									elevation: 3,
									borderRadius: 12,
									backgroundColor: '#01b4e4',
									alignSelf: 'center',
									marginTop: 10,
								}}
							>
								<TouchableOpacity
									onPress={() => setPlaymovie(false)}
									style={{
										backgroundColor: '#fff',
										borderRadius: 20,
										justifyContent: 'flex-end',
										alignSelf: 'flex-end',
									}}
								>
									<XCircleIcon size="30" color="#01b4e4" />
								</TouchableOpacity>
								<View style={{}}>
									{/* <Image
										source={require('../Assests/Images/photo-1602045486350-4e53a69865c6.avif')}
										style={{ width: '100%', height: 250, borderRadius: 12 }}
									/> */}
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 30,
											fontWeight: '600',
											color: '#fff',
											alignSelf: 'center',
											textAlign: 'center',
											marginTop: 50,
										}}
									>
										Coming Soon
									</Text>
								</View>
							</View>
						</View>
					</Modal>
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
						onPress={()=>{Linking.openURL(`https://www.imdb.com/title/${singmovie.imdb_id}/`)}}
					>
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 10,
								fontWeight: '600',
								color: '#01b4e4',
								borderColor:"#01b4e4",
								borderWidth:2,
								padding:2,
								textAlign:"center",
                                borderRadius:5,
								marginTop:4,
							}}
						>
							IMDB
						</Text>
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
								marginTop:7,
							}}
						>
							IMDb
						</Text>
					</TouchableOpacity>
					
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
					>
						<CheckCircleIcon size="35" color="#01b4e4" />
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
							}}
						>
							List
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
					>
						<HandThumbUpIcon size="35" color="#01b4e4" />
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
							}}
						>
							Rate
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
					>
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 10,
								fontWeight: '600',
								color: '#01b4e4',
								borderColor:"#01b4e4",
								borderWidth:2,
								padding:2,
								textAlign:"center",
                                borderRadius:5,
								marginTop:4,
							}}
						>
							{singmovie.popularity}
						</Text>
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								marginTop:8,
								color: '#0d253f',
								textAlign: 'center',
							}}
						>
							Popularity
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<View>
						{prodcom===undefined? null: prodcom.map((item) => {
							return (
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'flex-start',
										padding: 10,
									}}
								>
									<View>
										<Image
											source={{ uri: baseUrl + item.logo_path }}
											style={{
												width: 80,
												height: 50,
												borderRadius: 5,
												shadowColor: 'gray',
												shadowOpacity: 0.26,
												shadowOffset: { width: 0, height: 2 },
												shadowRadius: 10,
												elevation: 3,
												backgroundColor: '#fff',
											}}
											resizeMode="contain"
										/>
									</View>
									<View
										style={{
											paddingLeft: 30,
											alignSelf: 'center',
											justifyContent: 'center',
											textAlign: 'center',
										}}
									>
										<Text
											style={{
												fontFamily: 'Custom-Font',
												fontSize: 14,
												fontWeight: '600',
												color: '#0d253f',
											}}
										>
											{item.name}
										</Text>
										<Text
											style={{
												fontFamily: 'Custom-Font',
												fontSize: 14,
												fontWeight: '600',
												color: '#0d253f',
											}}
										>
											Country:&nbsp;{item.origin_country}
										</Text>
									</View>
								</View>
							);
						})}
					</View>
					<View>
					<Text style={{
								fontFamily: 'Custom-Font',
								fontSize: 15,
								color: '#01b4e4',
								fontWeight: '600',
								paddingLeft:10,
								paddingBottom:5,
							}}>Movie Cast</Text>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={cast}
						keyExtractor={(val) => val.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={{
										width: 84,
										height: 120,
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
											array: arrayte,
											sub: item.known_for,
											setBackp: 2,
										})
									}
								>
									<Image
										source={{ uri: baseUrl + item.profile_path }}
										style={{
											width: 70,
											height: 70,
											borderRadius:10,
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
									{/* <Text
										ellipsizeMode="tail"
										numberOfLines={1}
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 13,
											color: '#0d253f',
											fontWeight: '600',
										}}
									>
										{item.original_name}
									</Text> */}
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
								Related Movies
							</Text>
						</View>
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							data={arrayte}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => {
								return (
									<TouchableOpacity
										style={{
											justifyContent: 'center',
											position: 'relative',
											alignItems: 'center',
											marginHorizontal: 3,
											borderRadius: 10,
										}}
										onPress={() => {
											setSingmovie(item.id);
											Singlefilm(item.id);
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
											resizeMode="contain"
										/>
									</TouchableOpacity>
								);
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Moviebnrp;

const styles = StyleSheet.create({})