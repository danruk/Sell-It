import React, { useState } from 'react';
import { Alert, View,StyleSheet, Image } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import listingsApi from '../api/listings';

function ListingDetailsScreen({route, navigation}) {
     const listing=route.params;
     const [deleting, setDeleting] = useState(false);

     const handleDelete = () => {
       if (deleting) return;
       Alert.alert("Delete listing", "Are you sure you want to delete this listing?", [
         { text: "Cancel", style: "cancel" },
         {
           text: "Delete",
           style: "destructive",
           onPress: async () => {
             setDeleting(true);
             const result = await listingsApi.deleteListing(listing.id);
             setDeleting(false);
             if (!result.ok) return Alert.alert("Error", "Could not delete the listing.");
             navigation.goBack();
           },
         },
       ]);
     };
    return (
       <View>
        <Image 
        style={styles.image}
        source={{ uri: listing.images[0].url }}
        />
        <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <ListItem
        image={require("../assets/drukundo.jpg")}
        title="Dan Rukundo"
        subTitle="20 listings"
        
        />
        <AppButton title={deleting ? "Deleting..." : "Delete Listing"} onPress={handleDelete} />
        </View>

       </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
padding:20,
    },
    image:{
        width:"100%",
        height:300,
    },
    title:{
fontSize:30,
fontWeight:"500",
    },
    price:{
color:colors.secondary,
fontSize:20,
fontWeight:'bold',
marginVertical:10,
    },
})
export default ListingDetailsScreen;
