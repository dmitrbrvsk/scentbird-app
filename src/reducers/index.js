import { combineReducers } from 'redux'
import { subscriptionReducer } from './Subscription'

export default combineReducers({
	subscription: subscriptionReducer
})
