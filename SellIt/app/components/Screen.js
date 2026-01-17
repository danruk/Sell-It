import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import { Constants } from 'expo-constants';
import { View } from 'react-native';
function Screen({children,style}) {
    console.log(children)
    return (
       <SafeAreaView style={[styles.screen,style]}>
<View style={[styles.view, style]}>
{children}

</View>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingLeft:50,
    paddingTop:"Constants.statusBarHeight",
    flex:1,
    },
    view:{
        flex:1,
    }
})
export default Screen;