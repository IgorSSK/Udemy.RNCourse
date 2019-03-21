import React from 'react';
import {StyleSheet, Modal, Text, View, Button, Image} from 'react-native';

const PlaceInput = ({ selectedPlace, onModalClosed, onItemDeleted }) => {
    return(
        <Modal style={ styles.detailsContainer } visible= { selectedPlace != null } animationType='slide'>
            <Image style={ styles.imageContent } source={ selectedPlace ? selectedPlace.img : null}/>
            <Text style={ styles.textContent } color='black'>{ selectedPlace ? selectedPlace.value : null}</Text>
            <View style={ styles.buttonContainer }>
                <Button title='Delete' color='red' onPress={ onItemDeleted }></Button>
                <Button title='Close' color='blue' onPress={ onModalClosed }></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    imageContent:{
        width:'100%',
        height:350
    },

    textContent:{
        fontWeight:'bold',
        fontSize:25,
        textAlign:'center',
        marginBottom:15
    },

    buttonContainer:{

    },

    detailsContainer:{
        margin:25,
        padding:20
    }
})

export default PlaceInput;
