
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'

import PlaceList from './src/components/PlaceList'
import PlaceInput from './src/components/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail'
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';


class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded = { this.placeAddedHandler }/>
        <PlaceList places = { this.props.places } onItemSelected = { this.placeSelectedHandler }/>

        <PlaceDetail 
          selectedPlace = { this.props.selectedPlace } 
          onModalClosed = { this.modalClosedHandler } 
          onItemDeleted = { this.placeDeletedHandler }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

