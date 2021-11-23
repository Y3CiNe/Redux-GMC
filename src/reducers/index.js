import {combineReducers} from 'redux'
import Reducer from '.'
import filterReducer from './filterReducer.js'

export default combineReducers({
    todoReducer : Reducer,
    filterReducer
})