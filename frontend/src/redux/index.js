import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { groupReducer } from './groupReducer'
import { messageReducer } from './messageReducer'

export default combineReducers({user: userReducer, groups: groupReducer, message: messageReducer })