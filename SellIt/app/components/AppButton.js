import React from 'react';
import { View,Text,TouchableOpacity ,StyleSheet} from 'react-native';

import colors from '../config/colors';

import { getExpoGoProjectConfig } from 'expo';
function AppButton({title,onPress,color="primary"}) {
    return (
        <TouchableOpacity style={[styles.botton,{backgroundColor:colors[color]}]} onPress={onPress}>
<Text style={styles.text}>  {title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    botton:{
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:15,
        margin:10,
    },
    text:{
        color:colors.primary.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold' 
    }

})
export default AppButton;