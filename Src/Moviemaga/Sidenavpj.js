import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';
import React, { useEffect, useState, createRef } from 'react';
import {
	ArrowLeftIcon,
	EnvelopeIcon,
	ShieldCheckIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Sidenavpj = () => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
	const navigation = useNavigation();
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errortext, setErrortext] = useState('');
	const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
	const emailInputRef = createRef();
	const passwordInputRef = createRef();
	const handleSubmitButton = () => {
		if (!userEmail) {
			alert('Please fill Email');
			return;
		}
		if (!userPassword) {
			alert('Please fill Password');
			return;
		}
		setLoading(true);
		var dataToSend = {
			email: userEmail,
			password: userPassword,
		};
		console.log(dataToSend);
		var formBody = [];
		for (var key in dataToSend) {
			var encodedKey = encodeURIComponent(key);
			var encodedValue = encodeURIComponent(dataToSend[key]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');
		fetch('http://10.0.2.2:3000/api/user/register', {
			method: 'POST',
			body: formBody,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				setLoading(false);
				console.log(responseJson);
				if (responseJson.status === 'success') {
					setIsRegistraionSuccess(true);
					console.log('Registration Successful. Please Login to proceed');
				} else {
					setErrortext(responseJson.msg);
				}
			})
			.catch((error) => {
				setLoading(false);
				console.error(error);
			});
	};
	if (isRegistraionSuccess) {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: '#307ecc',
					justifyContent: 'center',
				}}
			>
				<Image
					source={{
						uri: 'https://image.similarpng.com/very-thumbnail/2021/08/Green-check-mark-icon.png',
					}}
					style={{
						height: 150,
						resizeMode: 'contain',
						alignSelf: 'center',
					}}
				/>
				<Text
					style={{
						color: 'white',
						textAlign: 'center',
						fontSize: 18,
						padding: 30,
					}}
				>
					Registration Successful
				</Text>
				<TouchableOpacity
					style={{
						backgroundColor: '#7DE24E',
						borderWidth: 0,
						color: '#FFFFFF',
						borderColor: '#7DE24E',
						height: 40,
						alignItems: 'center',
						borderRadius: 30,
						marginLeft: 35,
						marginRight: 35,
						marginTop: 20,
						marginBottom: 20,
					}}
					activeOpacity={0.5}
					onPress={() =>navigation.navigate('sidenavp')}
				>
					<Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 16 }}>
						Login Now
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
	return (
		<View>
			<View>
				<Image
					style={{
						width: '90%',
						height: 230,
						marginTop: 40,
						alignSelf: 'center',
						borderRadius: 10,
					}}
					source={{
						uri: 'https://e0.pxfuel.com/wallpapers/266/874/desktop-wallpaper-movie-background-movie-theme.jpg',
					}}
				/>
			</View>
			<View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginHorizontal: 50,
						borderWidth: 2,
						marginTop: 50,
						paddingHorizontal: 10,
						borderColor: '#01b4e4',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
					}}
				>
					<EnvelopeIcon size="20" color="#01b4e4" />
					<TextInput
						style={{
							paddingHorizontal: 10,
							height: 30,
							width: 200,
							fontFamily: 'Custom-Font',
						}}
						placeholder="Enter Your Email"
						onChangeText={(UserEmail) => setUserEmail(UserEmail)}
						ref={emailInputRef}
						onSubmitEditing={() =>
							passwordInputRef.current && passwordInputRef.current.focus()
						}
						blurOnSubmit={false}
					></TextInput>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginHorizontal: 50,
						borderWidth: 2,
						marginTop: 20,
						paddingHorizontal: 10,
						borderColor: '#01b4e4',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
					}}
				>
					<ShieldCheckIcon size="20" color="#01b4e4" />
					<TextInput
						style={{
							paddingHorizontal: 10,
							height: 30,
							width: 200,
							fontFamily: 'Custom-Font',
						}}
						placeholder="Enter Your Password"
						secureTextEntry={true}
						ref={passwordInputRef}
						onChangeText={(UserPassword) => setUserPassword(UserPassword)}
						onSubmitEditing={() =>
							ageInputRef.current && ageInputRef.current.focus()
						}
						blurOnSubmit={false}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginHorizontal: 50,
						borderWidth: 2,
						marginTop: 20,
						paddingHorizontal: 10,
						borderColor: '#01b4e4',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
					}}
				>
					<ShieldCheckIcon size="20" color="#01b4e4" />
					<TextInput
						style={{
							paddingHorizontal: 10,
							height: 30,
							width: 200,
							fontFamily: 'Custom-Font',
						}}
						placeholder="Confirm Your Password"
						secureTextEntry={true}
						ref={passwordInputRef}
						onChangeText={(UserPassword) => setUserPassword(UserPassword)}
						onSubmitEditing={() =>
							ageInputRef.current && ageInputRef.current.focus()
						}
						blurOnSubmit={false}
					/>
				</View>
				{errortext != '' ? (
					<Text style={styles.errorTextStyle}>{errortext}</Text>
				) : null}
				<View>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginHorizontal: 50,
							borderWidth: 2,
							marginTop: 20,
							paddingHorizontal: 60,
							borderColor: '#01b4e4',
							borderRadius: 23,
							paddingVertical: 2,
							height: 40,
							alignSelf: 'center',
							backgroundColor: '#01b4e4',
						}}
						onPress={handleSubmitButton}
					>
						<Text
							style={{
								color: '#fff',
								fontSize: 18,
								fontWeight: '600',
								fontFamily: 'Custom-Font',
								alignSelf: 'center',
							}}
						>
							Register
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							marginTop: 30,
						}}
					>
						<Image
							source={{
								uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png',
							}}
							style={{ width: 30, height: 30 }}
						/>
						<Image
							source={{
								uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png',
							}}
							style={{ width: 30, height: 30 }}
						/>
						<Image
							source={{
								uri: 'https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk',
							}}
							style={{ width: 30, height: 30, borderRadius: 5 }}
						/>
					</View>
					<View
						style={{
							marginTop: 40,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								color: 'black',
								fontSize: 18,
								fontWeight: '600',
								fontFamily: 'Custom-Font',
								marginRight: 5,
							}}
						>
							Already have an account ?
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate('sidenavp')}>
							<Text
								style={{
									color: '#01b4e4',
									fontSize: 18,
									fontWeight: '600',
									fontFamily: 'Custom-Font',
								}}
							>
								Login
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Sidenavpj;

const styles = StyleSheet.create({});
