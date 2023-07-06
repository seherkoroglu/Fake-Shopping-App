import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import {useFavoritesContext} from './context/favoritesContext';
import {Dimensions} from 'react-native';



const Favorites = () => {
const {favorites, removeFromFavoritesHandler} = useFavoritesContext();
const renderItem = ({item}) => {
    return(
        <View style = {styles.wrapper}>
            <View style={styles.imageAndButtonWrapper}>
        <View style= {styles.imageWrapper}>
            <Image source={{uri: item.image}} style={styles.image}/>
        </View>
        <View>
            <TouchableOpacity style= {styles.addButton} onPress={()=> removeFromFavoritesHandler(item)}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 16}}>Remove from Favorites</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.textWrapper}>
            <Text style = {styles.text}>{item.title}</Text>
            <Text style = {styles.text}>{item.description}</Text>
            <Text style = {styles.text}>Price: {item.price}$</Text>

        </View>
    </View>
    )
};


    return (
        <SafeAreaView style={styles.root}>
        {favorites.length > 0 ? (
             <FlatList
             data={favorites}
             keyExtractor={element => element.id}
             renderItem={renderItem}/>
         ) : (
            <View style= {styles.noFavoritesView}>
            <Text> Favorites are empty! Please add... </Text>
         </View>
         )}
           
        </SafeAreaView>
    );
    };

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Dimensions.get('window').width * 0.05,
        backgroundColor: '#ffffff',
    },

    noFavoritesView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        resizeMode: 'contain',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Dimensions.get('window').width * 0.02,
        padding: Dimensions.get('window').width * 0.05,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    imageWrapper: {
        flex: 1,
    },
    textWrapper: {
        flex: 1,
    },
    text: {
        marginVertical: Dimensions.get('window').width * 0.02,
        marginHorizontal: Dimensions.get('window').width * 0.02,
        
    },
    imageAndButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        marginVertical: Dimensions.get('window').width * 0.02,
        padding: Dimensions.get('window').width * 0.01,
        backgroundColor: '#FAD6A5',
        borderRadius: 30,
    },


  
 
});

export default Favorites;