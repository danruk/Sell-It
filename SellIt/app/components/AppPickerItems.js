import React from 'react';
import {  StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';

function AppPickerItems({item,onPress}) {
    return (
       <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.lable}</AppText>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:20,
    }
})
export default AppPickerItems;