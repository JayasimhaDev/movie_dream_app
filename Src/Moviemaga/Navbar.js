import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	FlatList,
	Image,
	Share,
	BackHandler, 
	Alert,
	ScrollView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ArrowLeftIcon,
	UserCircleIcon,
	CircleStackIcon,
	XCircleIcon,
	HomeIcon,
	Cog6ToothIcon,
	EnvelopeIcon,
	RectangleGroupIcon,
	StarIcon,
	ShareIcon,
	FlagIcon,
	EllipsisHorizontalIcon,
	ExclamationCircleIcon,
	ArrowRightIcon,
} from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';

const Navbar = () => {

	let [fontsLoaded] = useFonts({
		'Custom-Font': require('../Assests/Poppins-Light.ttf'),
	});

  const navigation =useNavigation();
	const [navbr, setNavbr] = useState([]);
	const [navid, setNavid] = useState([]);
	const Navbritem = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=04267d8d72061cab657e5c6f5a9737f8&language=en-US'
		);
		const data = await response.json();
		return setNavbr(data);
	};
	useEffect(() => {
		Navbritem();
	}, []);

	const onShare = async () => {
		try {
		  const result = await Share.share({
		   title: 'App link',
	  message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
	  url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
		  });
		  if (result.action === Share.sharedAction) {
			if (result.activityType) {
			} else {
			}
		  } else if (result.action === Share.dismissedAction) {
		  }
		} catch (error) {
		  alert(error.message);
		}
	  };
	  const backActionHandler = () => {
		   BackHandler.exitApp();
		   setUserpg(false);
	  };
	const [userpg, setUserpg]=useState(false);
	const [about, setAbout]=useState(false);
	const [privey, setPrivey] =useState(false);
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 5,
					alignItems: 'center',
					marginBottm: 1,
				}}
			>
				<TouchableOpacity onPress={() => setUserpg(true)}>
					<Bars3Icon size="35" color="#01b4e4" />
				</TouchableOpacity>
				<Modal visible={userpg} transparent={true}>
					<View
						style={{
							backgroundColor: 'rgba(0,0,0,0.7)',
							width: '100%',
							height: '100%',
						}}
					>
						<View
							style={{
								width: '80%',
								height: '100%',
								backgroundColor: '#fff',
								justifyContent: 'space-between',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									padding: 10,
									paddingLeft: 10,
									paddingRight: 10,
								}}
							>
								<TouchableOpacity onPress={() => setUserpg(false)}>
									<XCircleIcon size="30" color="#01b4e4" />
								</TouchableOpacity>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 20,
										color: '#01b4e4',
										fontWeight: '600',
									}}
								>
									User
								</Text>
							</View>
							<View
								style={{
									justifyContent: 'center',
									borderBottomWidth: 2,
									borderBottomColor: 'balck',
									paddingBottom: 10,
								}}
							>
								<Image
									source={{
										uri: 'https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000',
									}}
									style={{ width: 100, height: 100, alignSelf: 'center' }}
								/>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 18,
										color: '#01b4e4',
										fontWeight: '600',
										alignSelf: 'center',
										marginTop: 15,
									}}
								>
									Login to your account
								</Text>
							</View>
							<View
								style={{
									padding: 16,
									borderBottomWidth: 1,
									borderBottomColor: 'balck',
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
									}}
									onPress={() => navigation.navigate('movielist')}
								>
									<HomeIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Home
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 15,
									}}
									onPress={() =>{ navigation.navigate('sidenavp'); setUserpg(false)}}
								>
									<RectangleGroupIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Login / Register
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<Cog6ToothIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Settings
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
									onPress={()=>setAbout(true)}
								>
									<EnvelopeIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										About
									</Text>
								</TouchableOpacity>
							</View>
							<Modal visible={about} transparent={true}>
								<View style={{width:"100%",height:"100%",backgroundColor:"#fff"}}>
                             <View style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:10,flexDirection:"row"}}>
								<TouchableOpacity onPress={()=>setAbout(false)}>
									<ArrowLeftIcon size="20" color="#01b4e4"/>
								</TouchableOpacity>
								<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: '#01b4e4',
											fontWeight: '600',
										}}
									>
										About
									</Text>
							 </View>
							 <View>
							 <Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: '#01b4e4',
											fontWeight: '600',
											textAlign:"center"
										}}
									>
										Movie Dream
									</Text>
									<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											padding:10,
											textAlign:"auto"
											
										}}>There was a time not long ago when we waited with bated breath to
										 catch our favorite movies being aired on cable television on 
										 a fixed schedule.
                                        If for some reason you couldn’t make it to your television in time, 
										chances are you missed parts of or the entire movie altogether. 
										Suffice to say, the days of traditional TV broadcasting weren’t 
										kind to us movie fans.

                                       Fortunately, we now live in a world with an evolved entertainment 
									   industry dominated by the likes of OTT and streaming sites. 
									   Platforms like Netflix, Amazon Prime, and more recently Disney 
									   Plus, have made access to all kinds of movies, both old and new,
									    extremely convenient.</Text>
										<Text style={{fontFamily: 'Custom-Font',
											fontSize: 17,
											color: 'black',
											padding:8,borderBottomColor:"black",borderBottomWidth:1}}>Film Genres</Text>
										<View style={{paddingLeft:10,paddingTop:5}}>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Action</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Comedy</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Drama</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Fantasy</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Horror</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Mystery</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Romance</Text>
											<Text style={{fontFamily: 'Custom-Font',
											fontSize: 16,
											color: 'black',
											}}>Thriller
                                             </Text>
										</View>
							 </View>
								</View>
							</Modal>
							<View
								style={{
									padding: 16,
								}}
							>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 13,
										color: 'black',
										fontWeight: '600',
										paddingBottom: 5,
									}}
								>
									Applications
								</Text>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 10,
									}}
								>
									<StarIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Rate App
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 15,
									}}
									onPress={onShare}
								>
									<ShareIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Share this App
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
								>
									<FlagIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Report the & Help
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
									onPress={()=>setPrivey(true)}
								>
									<ExclamationCircleIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Policy Privacy
									</Text>
								</TouchableOpacity>
								<Modal visible={privey} transparent={true}>
									<View style={{width:"100%",height:"100%",backgroundColor:"#fff"}}>
									<View style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:10,flexDirection:"row"}}>
								<TouchableOpacity onPress={()=>setPrivey(false)}>
									<ArrowLeftIcon size="20" color="#01b4e4"/>
								</TouchableOpacity>
								<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: '#01b4e4',
											fontWeight: '600',
										}}
									>
										Policy Privacy
									</Text>
							 </View>
							 <ScrollView>
								<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>Jaya Developer built the Movie Dream app as a Free app. This SERVICE is provided
										     by Jaya Developer at no cost and is intended for use as is.{''}
											 {''}<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>This page is used to inform visitors regarding [my/our] policies
										    regarding the collection, use, and disclosure of Personal Information
											 if anyone decided to use [my/our] Service.{''}</Text>
											 {''}<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>If you choose to use [my/our] Service, then you agree to the collection
											 and use of information in relation to this policy. The Personal 
											 Information that [I/We] collect is used for providing and improving 
											 the Service. [I/We] will not use or share your information with 
											 anyone except as described in this Privacy Policy.</Text>
											 {''}<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>The terms used in this Privacy Policy have the same meanings as in
											 our Terms and Conditions, which is accessible at Jaya unless otherwise 
											 defined in this Privacy Policy.{''}
											 {''}</Text>
											 <Text style={{fontFamily: 'Custom-Font',
								                     color:"#01b4e4" ,
													 padding:10,
								              fontWeight: '600',}}>
                                            Information Collection and Use
											</Text>
                                            For a better experience, while using our Service, [I/We] 
											may require you to provide us with certain personally identifiable 
											information. The information that [I/We] request will be [retained 
											on your device and is not collected by [me/us] in any way]/[retained 
											by us and used as described in this privacy policy].
                                            The app does use third-party services that may collect information
											 used to identify you.
                                             Link to the privacy policy of third-party service providers used by 
											 the app</Text>
                                               <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>
                                              Google Play Services
                                              AdMob
                                              Google Analytics for Firebase
                                               Facebook • One Signal
                                             Log Data
                                              [I/We] want to inform you that whenever you use [my/our] Service, 
											  in a case of an error in the app [I/We] collect data and information
											   (through third- party products) on your phone called Log Data. This
											    Log Data may include information such as your device Internet 
												Protocol ("IP") address, device name, operating system version, 
												the configuration of the app when utilizing [my/our] Service, 
												the time and date of your use of the Service, and other statistics.
                                              </Text>
                                             <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>Cookies
										{''}<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>Cookies are files with a small amount of data that are commonly used as 
										  anonymous unique identifiers. These are sent to your browser from the 
										  websites that you visit and are stored on your device's internal memory.
                                          This Service does not use these "cookies" explicitly. However, the app 
										  may use third party code and libraries that use "cookies" to collect
										   information and improve their services. You have the option to either
										    accept or refuse these cookies and know when a cookie is being sent 
											to your device. If you choose to refuse our cookies, you may not be 
											able to use some portions of this Service.</Text>
                                          </Text>
                                           <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>Service Providers
                                          [I/We] may employ third-party companies and individuals due to the 
										  following reasons:
                                         To facilitate our Service;
                                         • To provide the Service on our behalf; • To perform Service-related 
										 services; or • To assist us in analyzing how our Service is used.
                                         [I/We] want to inform users of this Service that these third parties 
										 have access to your Personal Information. The reason is to perform the 
										 tasks assigned to them on our behalf. However, they are obligated not 
										 to disclose or use the information for any other purpose.
                                         Security<Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}> [I/We] value your trust in providing us with your Personal Information, 
										thus we are striving to use commercially acceptable means of protecting 
										it. But remember that no method of transmission over the internet, or 
										method of electronic storage is 100% secure and reliable, and [I/We] 
										cannot guarantee its absolute security.
                                         Links to Other Sites</Text>
                                       <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>This Service may contain links to other sites. If you click on a 
										third-party link, you will be directed to that site. Note that 
										these external sites are not operated by [me/us]. Therefore, [I/We]
										 strongly advise you to review the Privacy Policy of these websites.
										  [I/We] have no control over and assume no responsibility for the 
										  content, privacy policies, or practices of any third-party sites 
										  or services.</Text>
                                        <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>Children's Privacy</Text>
                                         <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>These Services do not address anyone under the age of 13. [I/We] 
										do not knowingly collect personally identifiable information from
										 children under 13. In the case [I/We] discover that a child under
										  13 has provided [me/us] with personal information, [I/We] immediately 
										  delete this from our servers. If you are a parent or guardian and you
										   are aware that your child has provided us with personal information,
										    please contact [me/us] so that [I/We] will be able to do the necessary 
											actions.</Text>
                                        <Text style={{
											fontFamily: 'Custom-Font',
											fontSize: 18,
											color: 'black',
											fontWeight: '600',
											padding:10,
										}}>Changes to This Privacy Policy
                                        [I/We] may update our Privacy Policy from time to time. Thus, you are
										 advised to review this page periodically for any changes. [I/We] will 
										 notify you of any changes by posting the new Privacy Policy on this page.
                                         This policy is effective as of 2021-02-04</Text>
                                        
                                          Contact Us

                                         If have any questions or suggestions about you [my/our] Privacy Policy, 
										 do not hesitate to contact [me/us] at jayawebx01@gmail.com.
                                          This privacy policy page was created at privacypolicytemplate.net and 
										  modified/generated by App Privacy Policy Generator
                                    </Text>

							 </ScrollView>
									</View>
								</Modal>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'flex-start',
										marginTop: 20,
									}}
									onPress={backActionHandler}
								>
									<ArrowLeftIcon size="25" color="black" />
									<Text
										style={{
											fontFamily: 'Custom-Font',
											fontSize: 16,
											color: '#01b4e4',
											fontWeight: '600',
											paddingLeft: 40,
										}}
									>
										Exit
									</Text>
								</TouchableOpacity>
								<Text
									style={{
										fontFamily: 'Custom-Font',
										fontSize: 13,
										color: 'black',
										fontWeight: '600',
										paddingLeft: 10,
										marginTop: 50,
									}}
								>
									Designed by Jaya
								</Text>
							</View>
						</View>
					</View>
				</Modal>
				<TouchableOpacity>
					<Text
						style={{
							fontFamily: 'Custom-Font',
							fontSize: 25,
							color: '#01b4e4',
							fontWeight: '600',
						}}
					>
						Movie Dream
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('searchrepg')}
					style={{
						backgroundColor: 'rgba(0,0,0,0.1)',
						padding: 7,
						borderRadius: 15,
					}}
				>
					<MagnifyingGlassIcon color="black" size="20" />
				</TouchableOpacity>
			</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={navbr.genres}
				keyExtractor={(val) => val.id}
				renderItem={(item) => {
					return (
						<View
							style={{
								paddingLeft: 10,
								paddingRight: 5,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('moviefind', {
										id: item.item.id,
										name: item.item.name,
									});
								}}
							>
								<Text
									style={{
										fontSize: 18,
										color: '#0d253f',
										fontFamily: 'Custom-Font',
										fontWeight: '650',
									}}
								>
									{item.item.name}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default Navbar;

const styles = StyleSheet.create({})