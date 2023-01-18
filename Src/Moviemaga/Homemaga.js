import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';


const Homemaga = ({navigation}) => {
let [fontsLoaded] = useFonts({
	'Custom-Font': require('../Assests/Poppins-Light.ttf'),
});

	return (
		<LinearGradient
			colors={['#0d253f', '#01b4e4', '#90cea1']}
			style={styles.brviewcolr}
		>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<View
					style={{
						borderColor: '#fff',
						borderWidth: 1,
						width: 300,
						height: 200,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 10,
					}}
				>
					<Text style={styles.appname}>Movie Dream</Text>
				</View>

				<TouchableOpacity
					style={{
						marginTop: 40,
						borderRadius: 20,
						borderColor: '#fff',
						borderWidth: 1,
						padding: 5,
					}}
					onPress={() => navigation.navigate('movielist')}
				>
					<ArrowRightIcon color="#fff" size="30" />
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
}

export default Homemaga;

const styles = StyleSheet.create({
	appname: {
		fontSize: 43,
		fontWeight: '600',
		fontFamily: 'Custom-Font',
		color: '#fff',
		alignSelf: 'center',
	},
	brviewcolr: {
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
	},
});



