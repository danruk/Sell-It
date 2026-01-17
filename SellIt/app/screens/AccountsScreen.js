 import React from 'react';
 import { FlatList,StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator'
import useAuth from '../auth/useAuth';

const menuItems=[{
    title:"my listing ",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary
    },
    targetScreen: "Feed"
},
{
    title:"my messages ",
    icon:{
        name:"email",
        backgroundColor:colors.secondary
    },
    targetScreen: "Messages"
}
]
 function AccountsScreen({navigation}) {
    const {user,logOut}=useAuth();
   
    return (
        <Screen  style={styles.screen}>
            <View style={styles.container}>

            <ListItem title={user.name}
            subTitle={user.email}
            image={require("../assets/drukundo.jpg")}/>
            </View>

            <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={menuItem=> menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=> <ListItem
                title={item.title}
                ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                }
                onPress={() => navigation.navigate(item.targetScreen)}
                />
            }
                />
            </View>
            <ListItem
            title="Log Out"
            IconComponent={<Icon name="logout" backgroundColor='#ffe66d'/>}
            onPress={()=> logOut()}
            />
        </Screen>
    );
 }
 const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
backgroundColor:colors.light
    },
 })
 export default AccountsScreen;
