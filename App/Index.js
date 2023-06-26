import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react' 
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native' 
import { LinearGradient } from 'expo-linear-gradient'
// import Gradiant from './Gradiant'
// import LinearGradient from 'react-native-linear-gradient'
//Pages imports
import C_Login from './Screens/Coach/C_Login'
import F_Login from './Screens/Fighters/F_Login'
import { StatusBar } from 'react-native'

//Assets
import start_img from '../assets/UI/start_img.png';


const Index = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    //status bar's codes
    useEffect(() => {
        
        StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    },[])
  return (
    <SafeAreaView style={{flex:1}}>
        <LinearGradient
      colors={['#201742', '#633C7D', '#331E55', '#5E3067']}
      style={{ flex: 1 }}
    >
        
        <View style={{flex:1,paddingTop: 30,}}>
        <View style={{alignItems:'center', justifyContent:'center', paddingTop:80, backgroundColor: 'rgba(0, 0, 0, 0)', }}>
            <Image source={start_img} style={{height:400, width:300, backgroundColor: 'rgba(0, 0, 0,0)'}}/> 
        </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#fff', fontSize: 40, fontWeight:'bold'}}>R A G E</Text>
                <Text style={{color:'#888585', fontSize: 12, fontWeight:'bold'}}>The All in One MMA & Fitness App</Text>
            </View>
            <TouchableOpacity  style={{ borderRadius:17, backgroundColor: '#201742',shadowColor: '#000',shadowOffset: {
                                                                                                    width: 0,
                                                                                                    height: 2,
                                                                                                },
                                                                                                shadowOpacity: 0.9,
                                                                                                shadowRadius: 4,
            elevation: 5, height:60, marginTop:20,marginHorizontal:20, alignItems:'center', justifyContent:'center', height:60, marginTop:20,marginHorizontal:20, alignItems:'center', justifyContent:'center'}}
             onPress={() => navigation.navigate('C_Login')}>
                <Text style={{color:'#FFF'}}>Coach</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius:17,backgroundColor: '#201742',shadowColor: '#000',shadowOffset: {
                                                                                                    width: 0,
                                                                                                    height: 2,
                                                                                                },
                                                                                                shadowOpacity: 0.9,
                                                                                                shadowRadius: 4,
            elevation: 5, height:60, marginTop:20,marginHorizontal:20, alignItems:'center', justifyContent:'center'}}
            onPress={() => navigation.navigate('F_Login')}>
                <Text style={{color:'#FFF'}}>Fighters</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

export default Index


