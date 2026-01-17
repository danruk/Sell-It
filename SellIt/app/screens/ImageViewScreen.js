import React from 'react';
import { Image,StyleSheet, View } from 'react-native';
import colors  from '../config/colors';

import {MaterialCommunityIcons} from '@expo/vector-icons'
function ImageViewScreen(props) {
    return ( 
        <View  style={styles.container}>
            <View style={styles.closeButton}>
                <MaterialCommunityIcons name='close' size={35} color="white"/>
            </View>
            <View style={styles.deleteButton}>
<MaterialCommunityIcons name='trash-can-outline' color="white" size={35}/>
            </View>

            <Image 
            resizeMode='contain'
            style={styles.image}
            source={require('../assets/chair.jpg')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    closeButton:{

top:70,
left:30,
position:'absolute'
    },
    container:{
backgroundColor:'#000',
flex:1,
    },
    deleteButton:{
       
        top:70,
        right:30,
        position:'absolute'
            },
    image:{
        width:'100%',
        height:'100%',
    
    }
})
export default ImageViewScreen;