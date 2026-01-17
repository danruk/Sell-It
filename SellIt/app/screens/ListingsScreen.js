import React, { useCallback, useEffect } from 'react';
import { FlatList,StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from "../components/Card";
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';

function ListingsScreen({navigation}) {
  const getListingsApi=useApi(listingsApi.getListings);
  const loadListings = () => getListingsApi.request();

   useEffect(() => {
   loadListings();
   } ,[])

   useFocusEffect(
     useCallback(() => {
       loadListings();
     }, [])
   );

    return (
        <>
        <ActivityIndicator visible={getListingsApi.loading} />
       <Screen style={styles.screen}>
        {getListingsApi.error && (<>
        <AppText>couldn't retrieve the listings.</AppText>
        <AppButton title="Retry" onPress={loadListings}/>
        </>)}
        <FlatList
        data={getListingsApi.data}
        keyExtractor={listing=> listing.id.toString()}
        renderItem={({item})=> 
        <Card
        title={item.title}
        subTitle={"$"+item.price}
        imageUrl={item.images[0].url}
        onPress={()=> navigation.navigate(routes.LISTING_DETAILS,item) }
        />}
        
        />
       </Screen>
       </>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})
export default ListingsScreen;
