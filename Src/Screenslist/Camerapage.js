import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState }from 'react'
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { ArrowPathIcon, CakeIcon, CameraIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { captureRef } from 'react-native-view-shot';

const Camerapage = ({navigation}) => {
	const [close, setclose] =useState(false);
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const toggleCameraType = () => {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	};
	if (!permission) {
		return <View />;
	}
	if (!permission.granted) {
		return (
			<View>
				<Text style={{ textAlign: 'center' }}>
					We need your permission to show the camera
				</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}
	
	
	return (
		<View style={{ flex: 1 }}>
			<StatusBar hidden />
			<Camera  type={type} style={{ flex: 1, height:"90%" }}>
				<View style={{flexDirection:"row", padding:20, justifyContent:"space-between",bottom:0}}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Posterpage');
						}}
					>
						<XMarkIcon size={30} color="#fff" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={toggleCameraType}>
						<ArrowPathIcon color="#fff" size={30} />
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
}

export default Camerapage;

const styles = StyleSheet.create({
});