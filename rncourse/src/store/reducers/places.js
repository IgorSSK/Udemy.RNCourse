import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    value: action.placeName,
                    img: { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/14/6d/14/c3/very-beautiful-place.jpg'}
                })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.key !== state.selectedPlace.key ),
                selectedPlace:null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => place.key === action.placeKey )
            }
        case DESELECT_PLACE:
            return{
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
}

export default reducer;