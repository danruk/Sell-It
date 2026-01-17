import React, { useEffect } from 'react';
import { View, StyleSheet, Image ,TouchableWithoutFeedback, Alert} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import colors from '../config/colors';



function ImageInput({imageUri,onChangeImage}) {
useEffect(() => {
    requestPermission();
} ,[])
    const requestPermission= async ()=> {
        const {granted}= await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted)
            alert("you need to enable permission to access the library")
    };
    const handlePress= () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete','Are you sure you want to delete this image?',[
            {text:"Yes", onPress: () => onChangeImage(null)},
            {text: 'No', }
        ])
    }
            const selectImage= async () => {
                try {
                    const result=await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        quality:0.5
                    });
                    console.log(result)
                    if(result.canceled || !result.assets || result.assets.length===0) return;

                    const asset = result.assets[0];
                    const manipulated = await ImageManipulator.manipulateAsync(
                      asset.uri,
                      [],
                      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
                    );
                    onChangeImage(manipulated.uri);
                    console.log("Image uri set to: ",manipulated.uri)
                } catch (error) {
                    console.log("error reading an image",error)
                }
            }
        
    
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={30}/>}
        {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    backgroundColor:colors.light,
    justifyContent:'center',
    borderRadius:15,
    width:100,
    height:100,
    overflow:'hidden'
    
  },
 image:{
    width:"100%",
    height:"100%",
 }
});

export default ImageInput;
