import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {Dimensions} from 'react-native';



const Categories = () => {
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    axios
        .get('https://fakestoreapi.com/products/categories')
        .then((res) => {
            setCategories(res.data);
            setLoading(false);
        }
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

}, []);

const renderItem = ({item}) => {
    return(
        <View style = {styles.wrapper}>
            <TouchableOpacity>
            <View style= {styles.categoryChip}>
                <Text style= {styles.categoryChipText}>{item}</Text>
                </View>
            </TouchableOpacity>
            
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
        data={categories}
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
    categoryChip: {
        padding: Dimensions.get('window').width * 0.02,
        backgroundColor: 'tomato',
        color: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: Dimensions.get('window').width * 0.01,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.9,
    },

    categoryChipText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    wrapper: {
        alignItems: 'center',
        alignContent: 'center',
    }

  
 
});

export default Categories;