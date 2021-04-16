import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { groupReducer } from './groupReducer'
import { alertsReducer } from './alertsReducer'

export default combineReducers({user: userReducer, groups: groupReducer, alerts: alertsReducer })