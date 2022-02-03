import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text>TrackListScreen Screen</Text>
        <Button 
            title="Go To Detail Screen" 
            onPress={() => navigation.navigate('TrackDetail')} />
    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;