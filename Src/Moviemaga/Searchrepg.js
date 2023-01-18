
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	MagnifyingGlassIcon,
	ArrowLeftIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Searchrepg = ({text}) => {
	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});
 const navigation = useNavigation();
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
  
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/search/multi?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US&page=1&include_adult=false'
		)
			.then((response) => response.json())
			.then((responseJson) => {
				setFilteredDataSource(responseJson);
				setMasterDataSource(responseJson);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const searchFilterFunction = (text) => {
		if (text) {
			const newData = masterDataSource.filter(function (item) {
				const itemData = item.title
					? item.title.toUpperCase()
					: ''.toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredDataSource(newData);
			setSearch(text);
		} else {
			setFilteredDataSource(masterDataSource);
			setSearch(text);
		}
	};
	const ItemView = ({ item }) => {
		return (
			<Text style={styles.itemStyle} onPress={() => getItem(item)}>
				{item.id}
				{'.'}
				{item.title.toUpperCase()}
			</Text>
		);
	};

	const ItemSeparatorView = () => {
		return (
			<View
				style={{
					height: 0.5,
					width: '100%',
					backgroundColor: '#C8C8C8',
				}}
			/>
		);
	};

	const getItem = (item) => {
		alert('Id : ' + item.id + ' Title : ' + item.title);
	};

	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 10,
					alignItems: 'center',
				}}
			>
				<TouchableOpacity onPress={() => navigation.navigate('movielist')}>
					<ArrowLeftIcon size="25" color="#01b4e4" />
				</TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						height: 35,
						alignItems: 'center',
						backgroundColor: 'rgba(0,0,0,0.1)',
						padding: 10,
						width: 250,
						justifyContent: 'space-between',
						borderRadius: 5,
					}}
				>
					<TextInput
						placeholder="Search for Movies"
						onChangeText={(text) => searchFilterFunction(text)}
						onClear={(text) => searchFilterFunction('')}
						style={{
							fontWeight: '600',
							fontSize: 15,
							fontFamily: 'Custom-Font',
							height: 20,
							width: 200,
						}}
						value={search}
					/>
					<MagnifyingGlassIcon color="black" size="20" />
				</View>
			</View>
			<FlatList
				data={filteredDataSource}
				keyExtractor={(item, index) => index.toString()}
				ItemSeparatorComponent={ItemSeparatorView}
				renderItem={ItemView}
			/>
		</View>
	);
}

export default Searchrepg;

const styles = StyleSheet.create({})