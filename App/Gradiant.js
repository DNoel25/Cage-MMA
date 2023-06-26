import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient';
// import { LinearGradient } from 'expo-linear-gradient';


const Gradiant = () => {
    return (
      <View style={styles.container}>
        <LinearGradient 
          colors={['#201742', '#633C7D', '#331E55', '#5E3067']}
          start={[0, 0]}
          end={[1, 1]}
        >
          
        </LinearGradient>
      </View>
    );
  };

export default Gradiant

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: '#fff',
    },
  });