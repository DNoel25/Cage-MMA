import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const C_Login = () => {
  const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
          colors={['#2C1C6C', '#33285D']}
          style={{ flex: 1 }}
        >
            
            
            <View >
                <View style={{paddingTop:50}}><TouchableOpacity onPress={() => navigation.navigate('index')}>
                    <Ionicons name="caret-back" size={35} color="white" style={{paddingLeft:20}}/>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', justifyContent:'center',paddingTop:50}}>
                    <Text style={{color:'#fff', fontSize: 40, fontWeight:'bold'}}>R A G E</Text>
                    <Text style={{color:'#888585', fontSize: 12, fontWeight:'bold'}}>The All in One MMA & Fitness App</Text>
                    
                    
                </View>
            </View>
            </LinearGradient>
        </SafeAreaView>
      )
    
}

export default C_Login