import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient' 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';

const F_Login = () => {
    const navigation = useNavigationBuilder();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        if (email === 'example@example.com' && password === 'password') {
          Alert.alert('Success', 'Login successful');
        } else {
          Alert.alert('Error', 'Invalid email or password');
        }
      };

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
                    <View>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            autoCapitalize="none"
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                        <Button title="Login" onPress={handleLogin} />
                    </View>
                    
                </View>
            </View>
            </LinearGradient>
        </SafeAreaView>
      )
    
}

export default F_Login