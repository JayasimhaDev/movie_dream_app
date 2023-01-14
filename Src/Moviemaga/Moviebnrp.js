import {
	Image,
	StyleSheet,
	Text,
	View,
	FlatList,
	Touchable,
	TouchableOpacity,
	ScrollView,
	Modal,
} from 'react-native';
import React ,{ useState, useEffect} from 'react'
import { ArrowDownCircleIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, CheckIcon, FilmIcon, HandThumbUpIcon, PlayCircleIcon, XCircleIcon } from 'react-native-heroicons/outline';


const Moviebnrp = ({navigation,route,}) => {
	const baseUrl = 'https://image.tmdb.org/t/p/w500';

	const [playmovie, setPlaymovie]=useState(false);
	const [singmovie, setSingmovie] = useState([]);
	const [genres,setGenres]=useState([]);
	const [prodcom, setProdcom]=useState([]);
	const [backr, setBackr] = useState(route.params.setbackr);
	const Singlefilm = async (id) => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US`
		);
		const data = await response.json();
		setGenres(data.genres)
		setProdcom(data.production_companies)
		return setSingmovie(data);
	};
	
console.log(route.params.setbackr);
	useEffect(() => {
		Singlefilm(route.params.id);
	}, []);
	console.log(route.params.id)
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<View style={{ position: 'relative' }}>
					{backr == 1 ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('toprated', {
									name: route.params.name,
									id: route.params.id,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('movielist', {
									name: route.params.name,
									id: route.params.id,
								})
							}
							style={{ position: 'absolute', zIndex: 1, top: 10, left: 6 }}
						>
							<ArrowLeftIcon size="25" color="#01b4e4" />
						</TouchableOpacity>
					)}
					<Image
						source={{ uri: baseUrl + singmovie.backdrop_path }}
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
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
						onPress={() => setPlaymovie(true)}
					>
						<PlayCircleIcon size="35" color="#01b4e4" />
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
							}}
						>
							Play
						</Text>
					</TouchableOpacity>
					{/* <Modal
						visible={playmovie}
						transparent={true}
						style={{
							justifyContent: 'center',
							alignSelf: 'center',
							alignItems: 'center',
							width: '90%',
							height: 400,
							backgroundColor: 'rgba(0,0,0,0.6)',
						}}
					>
						<TouchableOpacity onPress={() => setPlaymovie(false)}>
							<XCircleIcon size="30" color="#01b4e4" />
						</TouchableOpacity>
						<View
							style={{
								backgroundColor: 'rgba(0,0,0,0.6)',
							}}
						>
							<Image
								resizeMode="cover"
								style={{
									width: '90%',
									height: 400,
								}}
								source={{
									uri: 'https://assets-7.mxplay.com/static/images/logo-dark.png',
								}}
							/>
						</View>
					</Modal> */}
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
						<ArrowDownCircleIcon size="35" color="#01b4e4" />
						<Text
							style={{
								fontFamily: 'Custom-Font',
								fontSize: 13,
								fontWeight: '600',
								color: '#0d253f',
								textAlign: 'center',
							}}
						>
							Download
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<View>
						{prodcom.map((item) => {
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
							data={route.params.array}
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