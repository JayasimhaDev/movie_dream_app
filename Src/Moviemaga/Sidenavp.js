import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	Alert,
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
import { LinearGradient } from 'expo-linear-gradient';

const Sidenavp = () => {

	    const navigation = useNavigation();
	    const [userEmail, setUserEmail] = useState('');
		const [userPassword, setUserPassword] = useState('');
		const [loading, setLoading] = useState(false);
		const [errortext, setErrortext] = useState('');
		const passwordInputRef = createRef();

const handleSubmitPress = () => {
setErrortext('');
if (!userEmail) {
alert('Please fill Email');
return;
}
if (!userPassword) {
alert('Please fill Password');
return;
}
setLoading(true);
let dataToSend = {email: userEmail, password: userPassword};
let formBody = [];
for (let key in dataToSend) {
let encodedKey = encodeURIComponent(key);
let encodedValue = encodeURIComponent(dataToSend[key]);
formBody.push(encodedKey + '=' + encodedValue);
}
formBody = formBody.join('&');

fetch('https://outstanding-puce-nematode.cyclic.app/login', {
method: 'POST',
body:JSON.stringify(dataToSend),
headers: {
'Content-Type':'application/json',
},
})
.then((response) => response.json())
.then((responseJson) => {
setLoading(false);
console.log(responseJson);
let array=responseJson;
if (Array.isArray(array)) {
console.log(responseJson[0].email);
navigation.navigate('AppNavigation');
} else {
setErrortext(responseJson.msg);
Alert.alert('Please check your email id or password');
}
})
.catch((error) => {
setLoading(false);
Alert.alert(error);
});
};

let [fontsLoaded] = useFonts({
	'Custom-Font': require('../Assests/Poppins-Light.ttf'),
});
if (!fontsLoaded) {
	return null;
  }
	return (
		<LinearGradient colors={['#0d253f', '#01b4e4', '#90cea1']} style={styles.brviewcolr}>
		<View> 
			<View>
				<Image
					style={{
						width: '90%',
						height: 230,
						marginTop: 20,
						alignSelf: 'center',
						borderRadius: 10,
					}}
					source={{
						uri: 'https://e0.pxfuel.com/wallpapers/266/874/desktop-wallpaper-movie-background-movie-theme.jpg',
					}}
				/>
			</View>
			<View
				style={{
					padding: 10,
					alignSelf: 'center',
					textAlign: 'center',
				}}>

				<Text
					style={{
						fontFamily: 'Custom-Font',
						fontSize: 25,
						color: '#fff',
						fontWeight: '600',
						textAlign: 'center',
					}}
				>
					Welcome to Movie Dream
				</Text>
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
						onSubmitEditing={() =>
							passwordInputRef.current && passwordInputRef.current.focus()
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
						borderColor: 'black',
						borderRadius: 23,
						paddingVertical: 2,
						height: 40,
						fontFamily: 'Custom-Font',
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
					<Text>{errortext}</Text>
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
						onPress={() => {
							navigation.navigate('AppNavigation');
						}}
						// onPress={handleSubmitPress}
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
							Login
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
							Don't have an account ?
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate('sidenavpj')}>
							<Text
								style={{
									color: '#fff',
									fontSize: 18,
									fontWeight: '600',
									fontFamily: 'Custom-Font',
								}}
							>
								Sing up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
		</LinearGradient>
	);
};

export default Sidenavp;

const styles = StyleSheet.create({
	brviewcolr: {
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
	},
});
