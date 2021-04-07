import { userReducer } from './userReducer'
import { groupReducer } from './groupReducer'
import { combineReducers } from 'redux'

export default combineReducers({user: userReducer}, {groups: groupReducer})