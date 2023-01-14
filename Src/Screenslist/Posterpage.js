
import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	TextBase,
	TextInput,
	Button,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
	ArrowLeftIcon,
	ArrowUturnLeftIcon,
	ArrowUturnRightIcon,
	Bars3Icon,
	BellAlertIcon,
	BuildingStorefrontIcon,
	CameraIcon,
	ChatBubbleLeftIcon,
	ChevronDownIcon,
	ComputerDesktopIcon,
	EllipsisHorizontalIcon,
	FaceSmileIcon,
	GlobeAmericasIcon,
	HandThumbUpIcon,
	HomeIcon,
	LinkIcon,
	MagnifyingGlassIcon,
	MapIcon,
	MapPinIcon,
	PhotoIcon,
	PlusCircleIcon,
	PlusSmallIcon,
	SwatchIcon,
	UserCircleIcon,
	UserIcon,
	VideoCameraIcon,
	XCircleIcon,
	XMarkIcon,
} from 'react-native-heroicons/outline';
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

import * as ImagePicker from 'expo-image-picker';




const Posterpage = ({navigation}) => {
	const [clrno, setclrno] = useState(0);

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
		{ id: 4, color: '#fff', bgcolor: '#2980B9' },
		{ id: 5, color: '#fff', bgcolor: '#1ABC9C' },
		{ id: 6, color: '#fff', bgcolor: '#F1C40F' },
	];
	const [count, setCount] = useState(0);
	const [show, setshow] = useState(false);

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
	return (
		<View>
			<View visible={show}>
				<ScrollView>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: 10,
							borderBottomWidth: 1,
							borderBottomColor: 'grey',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								// gap: 10,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate("Home");
								}}
							>
								<Text>
									<ArrowLeftIcon size={22} color="grey" />
								</Text>
							</TouchableOpacity>
							<Text
								style={{
									fontSize: 20,
									fontWeight: '600',
									paddingHorizontal: 6,
								}}
							>
								Create post
							</Text>
						</View>
						<View>
							<Text style={{ fontSize: 13, color: 'grey' }}>NEXT</Text>
						</View>
					</View>
					<View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								padding: 10,
							}}
						>
							<Image
								source={{
									uri: 'https://plus.unsplash.com/premium_photo-1661544910011-299a1ed4ad8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
								}}
								style={{ width: 70, height: 70, borderRadius: 35 }}
								resizeMode="cover"
							/>
							<View style={{ flexDirection: 'column', paddingLeft: 14 }}>
								<Text
									style={{
										fontSize: 18,
										fontWeight: '700',
										paddingBottom: 4,
										paddingLeft: 3,
									}}
								>
									Jayasimha M H
								</Text>
								<View style={{ flexDirection: 'row' }}>
									<View
										style={{
											flexDirection: 'row',
											marginHorizontal: 5,
											alignItems: 'center',
											borderWidth: 1,
											borderColor: 'grey',
											padding: 4,
											borderRadius: 5,
										}}
									>
										<GlobeAmericasIcon size={13} color="grey" />
										<Text style={{ fontSize: 13 }}>Album</Text>
										<ChevronDownIcon size={13} color="grey" />
									</View>
									<View
										style={{
											flexDirection: 'row',
											marginHorizontal: 5,
											alignItems: 'center',
											borderWidth: 1,
											borderColor: 'grey',
											padding: 4,
											borderRadius: 5,
										}}
									>
										<GlobeAmericasIcon size={13} color="grey" />
										<Text style={{ fontSize: 13 }}>Off</Text>
										<ChevronDownIcon size={13} color="grey" />
									</View>
									<View
										style={{
											flexDirection: 'row',
											marginHorizontal: 5,
											alignItems: 'center',
											borderWidth: 1,
											borderColor: 'grey',
											padding: 4,
											borderRadius: 5,
										}}
									>
										<GlobeAmericasIcon size={13} color="grey" />
										<Text style={{ fontSize: 13 }}>Public</Text>
										<ChevronDownIcon size={13} color="grey" />
									</View>
								</View>
							</View>
						</View>
					</View>
					<View>
						<TextInput
							numberOfLines={4}
							multiline={true}
							placeholder="What's on your mind ?"
							placeholderTextColor={'grey'}
							style={{
								fontSize: 20,
								padding: 10,
								borderColor: '#fff',
								textAlignVertical: 'top',
								backgroundColor: colorcode[clrno].bgcolor,
								color: colorcode[clrno].color,
							}}
						/>
						<View>
							{image == null ? null : (
								<TouchableOpacity
									onPress={() => {
										setImage();
									}}
									style={{
										position: 'absolute',
										zIndex: 1,
										top: 2,
										right: 5,
									}}
								>
									<XCircleIcon color="grey" size={30} />
								</TouchableOpacity>
							)}
							{image && (
								<Image
									source={{ uri: image }}
									style={{
										width: '100%',
										height: 200,
										alignSelf: 'center',
										resizeMode: 'contain',
										margin: 4,
									}}
								/>
							)}
						</View>
						<View>
							<View style={{ flexDirection: 'row', marginTop: 10 }}>
								{colorcode.map((clr) => {
									return (
										<TouchableOpacity
											onPress={() => {
												setclrno(clr.id);
											}}
											style={{
												backgroundColor: clr.bgcolor,
												width: 20,
												height: 20,
												borderRadius: 5,
												marginHorizontal: 10,
											}}
										/>
									);
								})}
							</View>
						</View>
					</View>
					<View>
						<View style={{ padding: 10, flexDirection: 'column' }}>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									borderTopWidth: 1,
									borderTopColor: 'grey',
									paddingTop: 5,
								}}
								onPress={pickImage}
							>
								<PhotoIcon size={20} color="green" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>
									Photo/Video
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									paddingTop: 5,
								}}
							>
								<UserCircleIcon size={20} color="blue" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>
									Tag people
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									paddingTop: 5,
								}}
							>
								<FaceSmileIcon size={20} color="yellow" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>
									Feeling/activity
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									paddingTop: 5,
								}}
							>
								<MapPinIcon size={20} color="red" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>Chick in</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									paddingTop: 5,
								}}
							>
								<VideoCameraIcon size={20} color="red" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>
									Live video
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									paddingTop: 5,
								}}
							>
								<SwatchIcon size={20} color="orange" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>
									Background color
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingBottom: 10,
									borderBottomWidth: 1,
									borderBottomColor: 'grey',
									paddingTop: 5,
								}}
								onPress={() => {
									navigation.navigate('Camerapage');
								}}
							>
								<CameraIcon size={20} color="blue" />
								<Text style={{ fontSize: 16, paddingLeft: 10 }}>Camera</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

export default Posterpage

const styles = StyleSheet.create({})