import postReducer from './postReducer';
import postEdit from './postEdit';
import {combineReducers} from 'redux';
export default combineReducers({
    postReducer , postEdit
});