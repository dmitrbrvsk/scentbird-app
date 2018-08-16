import {
	FETCH_SUBSCRIPTION_REQUEST,
	FETCH_SUBSCRIPTION_SUCCESS,
	FETCH_SUBSCRIPTION_FAILED
} from '../constants'

const initialState = {
	loading: false,
	subscription: [],
	error: null
}

export const subscriptionReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SUBSCRIPTION_REQUEST:
			return {
				...state,
				loading: true,
				error: null
			}
		case FETCH_SUBSCRIPTION_SUCCESS:
			return {
				...state,
				loading: false,
				subscription: action.payload.result
			}
		case FETCH_SUBSCRIPTION_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				subscription: []
			}
		default:
			return state
	}
}
