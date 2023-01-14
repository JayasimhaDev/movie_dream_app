import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextBase,
	TextInput,
	Button,
	Modal,
} from 'react-native';
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { ArrowLeftIcon, ArrowUturnLeftIcon, ArrowUturnRightIcon, Bars3Icon, BellAlertIcon, BuildingStorefrontIcon, CameraIcon, ChatBubbleLeftIcon, ChevronDownIcon, ComputerDesktopIcon, EllipsisHorizontalIcon, FaceSmileIcon, GlobeAmericasIcon, HandThumbUpIcon, HomeIcon, LinkIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, PhotoIcon, PlusCircleIcon, PlusSmallIcon, SwatchIcon, UserCircleIcon, UserIcon, VideoCameraIcon, XCircleIcon, XMarkIcon } from 'react-native-heroicons/outline';
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

import * as ImagePicker from 'expo-image-picker';

	const Pfiledata = [
		{
			id: 1,
			img1: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80',
			img2: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Jayasimha',
			info: 'ನಿಮ್ಮ ಕಾರ್ಯಗಳಿಂದ ನಿಮ್ಮ ಭಯದ ಮೇಲೆ ಜಯ ಸಾಧಿಸಬಹುದು.',
			liked: false,
		},
		{
			id: 2,
			img1: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
			img2: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Jayasimha',
			info: 'ನೀವು ಹೆಚ್ಚು ಧೈರ್ಯಶಾಲಿಯಾಗಿದ್ದರೆ ನೀವು ಉತ್ತಮವಾಗಿ ಸಾಧಿಸಬಹುದು.',
			liked: false,
		},
		{
			id: 3,
			img1: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
			img2: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Jayasimha',
			info: 'ನಿಮ್ಮ ಬಗ್ಗೆ ನಿಮಗೆ ವಿಶ್ವಾಸವಿದ್ದಾಗ ಮಾತ್ರ ಬೇರೆಯವರು ನಿಮ್ಮ ಮೇಲೆ ವಿಶ್ವಾಸ ಹೊಂದುತ್ತಾರೆ.',
			liked: false,
		},
		{
			id: 4,
			img1: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			img2: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Jayasimha',
			info: 'ನಿಮ್ಮ ಬಗ್ಗೆ ನಿಮಗೆ ವಿಶ್ವಾಸವಿದ್ದಾಗ ಮಾತ್ರ ಬೇರೆಯವರು ನಿಮ್ಮ ಮೇಲೆ ವಿಶ್ವಾಸ ಹೊಂದುತ್ತಾರೆ.',
			liked: false,
		},
		{
			id: 5,
			img1: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
			img2: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Jayasimha',
			info: 'ಮತ್ತೊಂದು ಯೋಜನೆಯನ್ನು ಹೊಂದುವ ಮೂಲಕ ನಿಮ್ಮ ಯಶಸ್ಸಿನ ಸಾಧ್ಯತೆಗಳು ಹೆಚ್ಚಾಗುತ್ತವೆ',
			liked: false,
		},
	];

const Homepage = ({navigation}) => {


	const [model, setModel] = useState(false);


	const [clrno,setclrno]=useState(0);
	const [Profiledata,setProfiledata]=useState(Pfiledata)
	const colorcode = [
		{
			id: 0,
			color: 'black',
			bgcolor: '#fff',
		},
		{
			id: 1,
			color: '#fff',
			bgcolor: '#C0392B',
		},
		{
			id: 2,
			color: '#fff',
			bgcolor: '#E74C3C',
		},
		{ id: 3, color: '#fff', bgcolor: '#9B59B6' },
		{id:4,
			color: '#fff',
			bgcolor: '#2980B9',
		},
		{ id: 5, color: '#fff', bgcolor: '#1ABC9C' },
		{ id: 6, color: '#fff', bgcolor: '#F1C40F' },
	];
	const [count, setCount] = useState(false);
  const likebutton=(id)=>{
		let newdata=Profiledata.map((atm)=>{
			if(atm.id=== id){
			return {...atm,['liked']:!atm.liked}
			}else{
				return atm;
			}
		})
		setProfiledata(newdata);
	}

	
	const [show, setshow] =useState(false);

	 const [image, setImage] = useState(null);

		const pickImage = async () => {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				// aspect: [4, 3],
				quality: 1,
			});
			if (!result.canceled) {
				setImage(result.assets[0].uri);
			}
		};
  
		const [invale, setInvale]=useState([])
		const [advalue, setAdvalue]=useState({})

		const handlevalue=(e)=>{
     setAdvalue({['name']:e})
		}
	  const submithandler =()=>{
      setInvale([...invale,advalue]);
		}
	return (
		<ScrollView style={styles.maindicontainer}>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<View style={styles.maindisubcontainer}>
				<View style={styles.fbnamedi}>
					<Text style={styles.fbnametag}>facebook</Text>
					<View style={styles.iconsdifb}>
						<TouchableOpacity style={styles.plusdi}>
							<PlusSmallIcon color="grey" style={styles.plustag} size={18} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.plusdi}>
							<MagnifyingGlassIcon
								color="grey"
								style={styles.searchtag}
								size={18}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.plusdi}>
							<ChatBubbleLeftIcon
								color="grey"
								style={styles.msgicon}
								size={18}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.iconbardibtags}>
					<TouchableOpacity>
						<HomeIcon fill="blue" color="blue" size={25} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Userpage');
						}}
					>
						<UserIcon color="grey" size={25} />
					</TouchableOpacity>
					<TouchableOpacity>
						<ComputerDesktopIcon color="grey" size={25} />
					</TouchableOpacity>
					<TouchableOpacity>
						<BuildingStorefrontIcon color="grey" size={25} />
					</TouchableOpacity>
					<TouchableOpacity>
						<BellAlertIcon color="grey" size={25} />
					</TouchableOpacity>
					<View style={styles.imgprofleview}>
						<Image
							style={styles.imgprofile}
							source={{
								uri: 'https://plus.unsplash.com/premium_photo-1661544910011-299a1ed4ad8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
							}}
						/>
					</View>
					<Bars3Icon size={15} color="#fff" style={styles.barsicon} />
				</View>
				<View style={styles.userinfoiew}>
					<TouchableOpacity>
						<Image
							style={styles.userimgbig}
							resizeMode="cover"
							source={{
								uri: 'https://plus.unsplash.com/premium_photo-1661544910011-299a1ed4ad8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.textsomethig}
						onPress={() => {
							navigation.navigate("Posterpage");
						}}
					>
						<Text style={{ fontSize: 16, color: 'black' }}>
							Write something here...
						</Text>
						<Text style={{ fontSize: 14, color: 'black' }}>
							ಇಲ್ಲಿ ಏನಾದರೂ ಬರೆಯಿರಿ...
						</Text>
					</TouchableOpacity>
					
					<TouchableOpacity>
						<PhotoIcon size={23} color="green" />
					</TouchableOpacity>
				</View>
				<View style={styles.userinfomainiew}>
					<ScrollView
						horizontal
						showsVerticalScrollIndicator={false}
						style={styles.usersubinfoiew}
					>
						{Profiledata.map((values) => {
							return (
								<View style={styles.usrimgvie}>
									<Image
										source={{ uri: values.img1 }}
										style={{ width: 80, height: 150, borderRadius: 10 }}
									></Image>
									<View style={styles.posiabiew}>
										<View style={styles.iconimground}>
											<Image
												source={{ uri: values.img2 }}
												style={styles.subimgpro}
											></Image>
										</View>
										<Text
											style={{
												marginTop: 80,
												color: 'white',
												fontWeight: '600',
											}}
										>
											{values.title}
										</Text>
									</View>
								</View>
							);
						})}
					</ScrollView>
				</View>
				<View style={{ marginTop: 20 }}>
					<View>
						{Profiledata.map((atm, id) => {
							return (
								<View key={atm.id}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											padding: 7,
										}}
									>
										<View style={{ flexDirection: 'row' }}>
											<Image
												source={{ uri: atm.img2 }}
												style={{ width: 30, height: 30, borderRadius: 10 }}
											/>
											<Text
												style={{
													fontSize: 18,
													fontWeight: '700',
													paddingLeft: 10,
												}}
											>
												{atm.title}
											</Text>
										</View>
										<View
											style={{ flexDirection: 'row', marginHorizontal: 10 }}
										>
											<EllipsisHorizontalIcon
												size={28}
												style={{ marginHorizontal: 30 }}
												color="grey"
											/>
											<XMarkIcon color="grey" size={22} />
										</View>
									</View>
									<Text style={{ fontSize: 15, padding: 5 }}>{atm.info}</Text>
									<Image
										source={{ uri: atm.img1 }}
										style={{
											width: '100%',
											height: 300,
											resizeMode: 'contain',
										}}
									/>
									{/* <View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											padding: 5,
											alignItems: 'center',
										}}
									>
										<Text style={{ alignItems: 'center' }}>
											<HandThumbUpIcon color="blue" size={20} />
											{count}
										</Text>
										<Text style={{ alignItems: 'center' }}>
											{count}
											Comment
										</Text>
									</View> */}

									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											padding: 10,
										}}
									>
										<TouchableOpacity
											onPress={() => {
												setCount(() => {
													likebutton(atm.id);
												});
											}}
											style={{ flexDirection: 'row' }}
										>
											<HandThumbUpIcon
												color={atm.liked ? 'blue' : 'grey'}
												size={20}
											/>
											<Text style={{ paddingLeft: 10, alignItems: 'center' }}>
												Like
											</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() => {
												setModel(true);
											}}
											style={{ flexDirection: 'row' }}
										>
											<ChatBubbleLeftIcon color="grey" size={20} />
											<Text style={{ paddingLeft: 10, alignItems: 'center' }}>
												Comment
											</Text>
										</TouchableOpacity>
										<Modal visible={model} transparent={true}>
											<View
												style={{
													width: '100%',
													height: '95%',
													backgroundColor: 'white',
													marginTop: 20,
													borderRadius: 8,
												}}
											>
												<View style={{ padding: 5 }}>
													<TouchableOpacity
														onPress={() => setModel(false)}
														style={{
															width: 40,
															height: 20,
															borderWidth: 1,
															borderColor: 'grey',
															borderRadius: 5,
														}}
													>
														<Text>Close</Text>
													</TouchableOpacity>
												</View>
												<View>
													{
														invale.map((ako)=>{
															return(
																<View>
																	<Text>{ako.name}</Text>
																</View>
															)
														})
													}
												</View>
												<View style={{ paddingLeft: 30 }}>
													<TextInput
														placeholder="Write a comment..."
														name="name"
														onChangeText={(e) => handlevalue(e)}
														style={{
															backgroundColor: 'rgba(0,0,0,0.1)',
															padding: 10,
															width: '90%',
															height: 35,
															borderRadius: 20,
															fontSize: 18,
														}}
													/>
												</View>
												<Button onPress={submithandler}>
													<Text>Submit</Text>
												</Button>
											</View>
										</Modal>
										<View style={{ flexDirection: 'row' }}>
											<ArrowUturnRightIcon color="grey" size={20} />
											<Text style={{ paddingLeft: 10, alignItems: 'center' }}>
												Share
											</Text>
										</View>
									</View>
								</View>
							);
						})}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default Homepage

const styles = StyleSheet.create({
	fbnametag: {
		fontSize: 26,
		fontWeight: '700',
		color: 'rgb(0,0,225)',
	},
	iconsdifb: {
		flexDirection: 'row',
		paddingTop: 3,
	},
	fbnamedi: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		alignItems: 'center',
	},
	plusdi: {
		width: 25,
		height: 25,
		backgroundColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'center',
		borderRadius: 20,
		padding: 3,
		marginLeft: 12,
	},
	imgprofile: {
		width: 30,
		height: 30,
		resizeMode: 'cover',
		borderRadius: 20,
	},
	imgprofleview: {
		borderWidth: 2,
		borderColor: 'grey',
		width: 33,
		height: 33,
		borderRadius: 20,
		position: 'relative',
	},
	iconbardibtags: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		paddingBottom: 10,
	},
	barsicon: {
		position: 'absolute',
		zIndex: 1,
		right: 17,
		top: 17,
		backgroundColor: 'grey',
		borderRadius: 10,
	},
	userimgbig: {
		width: 50,
		height: 40,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.1)',
	},
	textsomethig: {
		borderWidth: 1,
		borderColor: 'grey',
		padding: 2,
		paddingLeft: 20,
		width: 'auto',
		paddingRight: 60,
		height: 50,
		borderRadius: 30,
	},
	userinfoiew: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	subimgpro: {
		width: 30,
		height: 30,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: 'blue',
	},
	usrimgvie: {
		position: 'relative',
		marginHorizontal: 5,
	},
	posiabiew: {
		position: 'absolute',
		padding: 5,
	},
	usersubinfoiew: {
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#fff',
		paddingTop: 10,
		paddingBottom: 10,
		width: '100%',
	},
	userinfomainiew: {
		marginTop: 10,
		backgroundColor: 'grey',
	},
});