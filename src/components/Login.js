import react from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';


const Home = () => {
    return (
        <SafeAreaView style={styles.root}>
        <Text>Home</Text>
        </SafeAreaView>
    );
    };

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default Home;