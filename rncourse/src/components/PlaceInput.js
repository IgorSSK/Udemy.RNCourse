import React, { Component } from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

class PlaceInput extends Component{

  state = { placeName: "" }

  placeNameChangeHandler = val => {
      this.setState({ placeName : val });
  } 

  placeSubmitHandler = () => {
      if(this.state.placeName.trim() === "") return;
      this.props.onPlaceAdded(this.state.placeName);
  }

  render(){ 
    return (
        <View style={styles.formContainer}>
          <TextInput style={ styles.placeInput } 
            placeholder='An alwesome place' 
            value={ this.state.placeName } 
            onChangeText={ this.placeNameChangeHandler } />
          <Button style={ styles.placeButton } title='Add' onPress={ this.placeSubmitHandler }></Button>
        </View>
    );  
  }
}

const styles = StyleSheet.create({
    formContainer:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
      },
    
      placeInput:{
        width:'70%'
      },
    
      placeButton:{
        width:'30%'
      }
});

export default PlaceInput;