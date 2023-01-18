import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
} from 'react-native';
console.reportErrorsAsExceptions = false;
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homemaga from './Src/Moviemaga/Homemaga';
import Movielist from './Src/Moviemaga/Movielist';
import Moviebnrp from './Src/Moviemaga/Moviebnrp';
import Toprated from './Src/Moviemaga/Toprated';
import Papularp from './Src/Moviemaga/Papularp';
import Papularprp from './Src/Moviemaga/Papularprp';
import Moviefind from './Src/Moviemaga/Moviefind';
import Searchrepg from './Src/Moviemaga/Searchrepg';

const Stack = createNativeStackNavigator();

// export default function App() {
// 	const [img, setImg] =useState(0);
// 	const car_parts = [
//     {
//       id: 0,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_0_1645161181.jpg',
//     },
//     {
//       id: 1,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_2_1645161181.jpg',
//     },
//     {
//       id: 2,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_3_1645161181.jpg',
//     },
//     {
//       id: 3,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_4_1645161181.jpg',
//     },
//     {
//       id: 4,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_5_1645161181.jpg',
//     },
//     {
//       id: 5,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_6_1645161181.jpg',
//     },
//     {
//       id: 6,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_14_1645161181.jpg',
//     },
//     {
//       id: 7,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/W1VAxu5cZr_11_1645161181.jpg',
//     },
//     {
//       id: 8,
//       img: 'https://kalyanimotorsadmin.kalyanicrm.com/storage/images/0lp3jSDmwl_1_1645269751.jpg',
//     },
//   ];
//   return (
		
// 		<ScrollView style={styles.maindi}>
			
// 			<View style={styles.container}>
// 				<Text style={styles.textdi}>Jayasimha hello</Text>
// 				<Text style={styles.loremdi}>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea
// 					architecto itaque beatae consequatur animi enim fugiat, ex iusto earum
// 					quam ab ducimus commodi porro reprehenderit rerum. Ipsa, quo dolore.
// 				</Text>
// 			</View>
// 			<View style={styles.imgcont}>
// 				<Image
// 					style={styles.imgbox}
// 					source={{
// 						uri: 'https://images.unsplash.com/photo-1554301840-913d3250f757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
// 					}}
// 				/>
// 				<Image
// 					style={styles.imgbox}
// 					source={{
// 						uri: 'https://images.unsplash.com/photo-1554301840-913d3250f757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
// 					}}
// 				/>
// 				<Image
// 					style={styles.imgbox}
// 					source={{
// 						uri: 'https://images.unsplash.com/photo-1554301840-913d3250f757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
// 					}}
// 				/>
// 			</View>
// 			<View style={styles.carfun}>
// 				<Text style={styles.carname}>Maruti Suzuki Swift VXI 1.2L 5MT</Text>
// 				<View style={styles.flexnamescolor}>
// 					<View style={styles.placedi}>
// 						<Text style={styles.textversion}>Version</Text>
// 						<Text style={styles.textversion}>Color</Text>
// 					</View>
// 					<View style={styles.placeditwo}>
// 						<TextInput
// 							style={styles.inputtext}
// 							placeholder="Swift VXI 1.2L"
// 						></TextInput>
// 						<View style={styles.colorforsolid}>
// 							<Text style={styles.solidred}>Solid Fire Red</Text>
// 							<TouchableOpacity style={styles.namediclr}></TouchableOpacity>
// 						</View>
// 					</View>
// 				</View>
// 				<View style={styles.diexint}>
// 					<View style={styles.caronedi}>
// 						<Text style={styles.exterior}>Exterior</Text>
// 						<Text style={styles.interior}>interior</Text>
// 						<View style={styles.carcenter}>
// 							<Image
// 								style={styles.carimgin}
// 								source={{
// 									uri: car_parts[img].img,
// 								}}
// 							/>
// 						</View>
// 					</View>
// 					<View style={styles.cartwodi}>
// 						<TouchableOpacity style={styles.oneclr}/>
// 						<TouchableOpacity style={styles.twoclr}/>
// 						<TouchableOpacity style={styles.threeclr}/>
// 						<TouchableOpacity style={styles.fourclr}/>
// 						<TouchableOpacity style={styles.fiveclr}/>
// 						<TouchableOpacity style={styles.sixclr}/>
// 					</View>
// 				</View>
// 				<View>
// 				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
// 					{
// 						car_parts.map((values)=>{
// 							return(
// 								<TouchableOpacity onPress={()=>{setImg(values.id)}}>
//                  <Image source={{uri : values.img}} style={{width:40, height:35, marginHorizontal:5,}} />
// 								</TouchableOpacity>
// 							)
// 						})
// 					}
// 				</ScrollView>
// 				</View>
// 			</View>
// 		</ScrollView>
// 	);
// }
// const styles = StyleSheet.create({
// 	maindi: {
// 		backgroundColor: '#fff',
// 	},
// 	container: {
// 		padding: 10,
// 	},
// 	textdi: {
// 		fontSize: 25,
// 		color: 'blue',
// 		padding: 10,
// 		backgroundColor: 'yellow',
// 		borderRadius: 5,
// 		borderColor: 'red',
// 		borderWidth: 5,
// 		textAlign: 'center',
// 		fontStyle: 'italic',
// 	},
// 	loremdi: {
// 		marginTop: 10,
// 		padding: 10,
// 		fontSize: 18,
// 		color: 'red',
// 		borderColor: '#61dafb',
// 		borderWidth: 4,
// 		borderRadius: 5,
// 		fontStyle: 'italic',
// 	},
// 	imgbox: {
// 		width: 90,
// 		height: 90,
// 		resizeMode: 'cover',
// 		margin: 3,
// 	},
// 	imgcont: {
// 		textAlign: 'center',
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 	},
// 	carname: {
// 		fontSize: 20,
// 		fontWeight: '700',
// 		textAlign: 'left',
// 	},
// 	carfun: {
// 		marginTop: 10,
// 		padding: 15,
// 		borderRadius: 5,
// 		elevation:3,
// 		// margin:10,
// 		width:"98%",
// 		shadowOffset:{width:3,height:3},
// 		shadowColor:"black",
// 		shadowOpacity:0.5,
// 	},
// 	placedi: {
// 		marginTop: 10,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 	},
// 	inputtext: {
// 		marginTop: 3,
// 		width: 150,
// 		height: 30,
// 		shadowRadius: 3,
// 		padding: 8,
// 		fontWeight: '600',
// 		color: 'grey',
// 		shadowProp: {
// 			shadowColor: '#171717',
// 			shadowOffset: { width: -1, height: 2 },
// 			shadowOpacity: 0.2,
// 			shadowRadius: 3,
// 		},
// 	},
// 	textversion: {
// 		fontSize: 18,
// 		color: 'grey',
// 		fontWeight: '700',
// 	},
// 	diexint: {
// 		marginTop: 10,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 	},
// 	exterior: {
// 		fontSize: 20,
// 		fontWeight: '700',
// 		borderBottomColor: 'orange',
// 		borderBottomWidth: 2,
// 		width: 120,
// 	},
// 	interior: {
// 		fontSize: 17,
// 		color: 'grey',
// 		marginTop: 4,
// 	},
// 	carimgin: {
// 		width: 260,
// 		height: 200,
// 		resizeMode: 'contain',
// 	},
// 	oneclr: {
// 		backgroundColor: 'red',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 	},
// 	twoclr: {
// 		backgroundColor: 'grey',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 		marginTop: 10,
// 	},
// 	threeclr: {
// 		backgroundColor: '#AAB7B8',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 		marginTop: 10,
// 	},
// 	fourclr: {
// 		backgroundColor: '#F0F3F4',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 		marginTop: 10,
// 	},
// 	fiveclr: {
// 		backgroundColor: '#1B4F72',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 		marginTop: 10,
// 	},
// 	sixclr: {
// 		backgroundColor: '#D35400',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 		marginTop: 10,
// 	},
// 	caronedi: {},
// 	carcenter: {
// 		textAlign: 'center',
// 		justifyContent: 'center',
// 	},
// 	cartwodi: {
// 		borderColor: 'grey',
// 		borderWidth: 1,
// 		padding: 5,
// 		width: 33,
// 		height: 180,
// 		marginTop: 15,
// 	},
// 	flexnamescolor: {
// 		flexDirection: 'column',
// 		justifyContent: 'space-between',
// 	},
// 	colorforsolid: {
// 		flexDirection: 'row',
// 	},
// 	placeditwo: {
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 	},
// 	solidred: {
// 		fontSize: 15,
// 		fontWeight: '600',
// 		color: 'grey',
// 		marginTop: 10,
// 		marginRight: 10,
// 	},
// 	namediclr: {
// 		backgroundColor: 'red',
// 		padding: 10,
// 		width: 15,
// 		height: 20,
// 		borderRadius: 5,
// 		marginTop: 10,
// 		// marginHorizontal:5,
// 	},
// });
//  const App = () => {
// 	 return (
// 			<NavigationContainer>
// 				<Stack.Navigator>
// 					<Stack.Screen
// 						name="Home"
// 						component={Homepage}
// 						options={{ headerShown: false, statusBarHidden: false }}
// 					/>

// 					<Stack.Screen
// 						name="Userpage"
// 						component={Userpage}
// 						options={{ headerShown: false }}
// 					/>
// 					<Stack.Screen
// 						name="Camerapage"
// 						component={Camerapage}
// 						options={{ headerShown: false, statusBarHidden: true }}
// 					/>
// 					<Stack.Screen
// 						name="Posterpage"
// 						component={Posterpage}
// 						options={{ headerShown: false, statusBarHidden: true }}
// 					/>
// 				</Stack.Navigator>
// 			</NavigationContainer>
// 		);
//  }
 
//  export default App
 

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="homemaga"
					component={Homemaga}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="movielist"
					component={Movielist}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="moviebnrp"
					component={Moviebnrp}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="toprated"
					component={Toprated}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="papularp"
					component={Papularp}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="papularprp"
					component={Papularprp}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="moviefind"
					component={Moviefind}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
				<Stack.Screen
					name="searchrepg"
					component={Searchrepg}
					options={{ headerShown: false, statusBarHidden: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App

const styles = StyleSheet.create({})