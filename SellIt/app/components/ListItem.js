import React from 'react';
import { View,StyleSheet,Image,TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons"

import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors'
function ListItem({image,ImageComponent,title,subTitle,onPress,renderRightActions}) {
    return (
        <Swipeable
        renderRightActions={renderRightActions}
        >
        <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        >

       <View style ={styles.container}>
        {ImageComponent}
       {image && <Image style={styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
        <AppText numberOfLines={1}>{title}</AppText>
      { subTitle && <AppText  numberOfLines={2}>{subTitle}</AppText>}
            </View>
      <MaterialCommunityIcons  color={colors.medium} name='chevron-right' size={25} />
       </View>
        </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
    },
    detailsContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:'center'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    }
})

export default ListItem;
