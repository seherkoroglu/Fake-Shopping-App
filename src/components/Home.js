import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {Dimensions} from 'react-native';
import {useFavoritesContext} from './context/favoritesContext';


const Home = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const {favorites, addToFavoritesHandler, removeFromFavoritesHandler} = useFavoritesContext();

const checker = item => {
    const boolean = favorites.some(element => element.id === item.id);
    return boolean;
};

useEffect(() => {
    setLoading(true);
    axios
        .get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data);
            setLoading(false);
        }
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

}, []);

const renderItem = ({item}) => {
    return(
        <View style = {styles.wrapper}>
            <View style={styles.imageAndButtonWrapper}>
        <View style= {styles.imageWrapper}>
            <Image source={{uri: item.image}} style={styles.image}/>
        </View>
        <View>
         <TouchableOpacity style= {styles.addButton} 
            onPress={()=> checker(item) ? removeFromFavoritesHandler(item) : addToFavoritesHandler(item)}
         >
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 16}}
           >
                {checker(item) ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
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
        {loading ? (
            <View style= {styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00000" />
            </View>
        ) :     <FlatList
        data={products}
        keyExtractor={element => element.id}
        renderItem={renderItem}/>}

    

        </SafeAreaView>
    );
    };

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
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

export default Home;