import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	Alert
} from 'react-native';
import React, { useEffect, useState, createRef,useCallback } from 'react';
import {
	ArrowLeftIcon,
	EnvelopeIcon,
	ShieldCheckIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const Sidenavpj = () => {
	const [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	  })
	const navigation = useNavigation();
    
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [userName, setUserName] =useState('');
	const [loading, setLoading] = useState(false);
	const [errortext, setErrortext] = useState('');
	const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
	const emailInputRef = createRef();
	const passwordInputRef = createRef();
	const handleSubmitButton = () => {
		if (!userName) {
			alert('Please fill Name');
			return;
		}
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
			name:userName,
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
		fetch('https://outstanding-puce-nematode.cyclic.app/register', {
			method: 'POST',
			body: JSON.stringify(dataToSend),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				Alert.alert(
					'Success!',
					'User was successfully created!',
				  );
				  return true;
			})
			.catch((error) => {
				Alert.alert('Error!', error.message);
				return false;
			  });
	};
	
	
	return (
		<LinearGradient colors={['#0d253f', '#01b4e4', '#90cea1']}
		style={styles.brviewcolr}>
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
						marginTop: 20,
						paddingHorizontal: 10,
						borderColor: 'black',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
					}}
				>
					<ShieldCheckIcon size="20" color="black" />
					<TextInput
						style={{
							paddingHorizontal: 10,
							height: 30,
							width: 200,
							fontFamily: 'Custom-Font',
						}}
						placeholder="Enter Your Name"
						secureTextEntry={true}
						ref={passwordInputRef}
						onChangeText={(UserName) => setUserName(UserName)}
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
						borderColor: 'black',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
					}}
				>
					<EnvelopeIcon size="20" color="black" />
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
						borderColor: 'black',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
					}}
				>
					<ShieldCheckIcon size="20" color="black" />
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
									color: '#fff',
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
		</LinearGradient>
	);
};

export default Sidenavpj;

const styles = StyleSheet.create({
	brviewcolr: {
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
	},
});
