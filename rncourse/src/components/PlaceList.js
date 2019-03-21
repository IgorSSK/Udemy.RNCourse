import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import ListItem from './ListItem'

const PlaceList = ({ places, onItemSelected }) => {
    return(
        <FlatList 
            style = { styles.listContainer }
            data = { places }
            keyExtractor = { item => String(item.key) }
            renderItem = { info => ( 
                <ListItem 
                    placeName={ info.item.value }
                    placeImage={ info.item.img }
                    onItemSelected =  { () => onItemSelected(info.item.key) }/>
             )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: { 
        width:'100%' 
    }
});

export default PlaceList;