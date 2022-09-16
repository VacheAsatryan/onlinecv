import {combineReducers, createStore} from 'redux';
import { abouthReducer, inityalAbouth } from './abouth/abouthSlicer';

const store = createStore(combineReducers({
    items:abouthReducer
}),{
    items:inityalAbouth
})

export default store