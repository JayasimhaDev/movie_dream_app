import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import {ArrowLeftIcon, ChatBubbleLeftIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, MapPinIcon} from 'react-native-heroicons/outline';

const Userpage = () => {
	return (
		<View>
			<View>
				<View>
					<ArrowLeftIcon
						size={24}
						color="grey"
						style={{ marginTop: 15, paddingLeft: 20 }}
					/>
				</View>
				<View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<MapPinIcon size={40} color="red" />
						<View>
							<Text style={{ fontSize: 17, color: 'black', fontWeight: '700' }}>
								Jayasimha M H
							</Text>
							<Text style={{ fontSize: 13, color: 'grey', fontWeight: '500' }}>
								Nayandahalli, Bangalore
							</Text>
						</View>
					</View>
					<View>
						<ChatBubbleLeftRightIcon size={27} color="grey" />
						<Image
							source={{
								uri: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
							}}
							style={{width:30, hight:40}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Userpage

const styles = StyleSheet.create({})