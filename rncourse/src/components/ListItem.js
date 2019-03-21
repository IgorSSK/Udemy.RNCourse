import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const ListItem = ({ placeName, placeImage, onItemSelected }) => (
    <TouchableOpacity onPress={ onItemSelected }>
        <View style={ styles.listContainer }>
            <Image resizeMode='cover' style={ styles.placeImage } source = { placeImage }/>
            <Text style={ styles.placeText }> { placeName } </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    placeText:{
        padding:10,
        fontSize:16
    },

    placeImage:{
        width:35,
        height:35,
        borderRadius:10
    },

    listContainer:{

        backgroundColor:'#eeee',
        width:'100%',
        margin:5,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10
    }
});

export default ListItem; 