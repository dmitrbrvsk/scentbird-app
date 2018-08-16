import {
	FETCH_SUBSCRIPTION_REQUEST,
	FETCH_SUBSCRIPTION_SUCCESS,
	FETCH_SUBSCRIPTION_FAILED,
	API_ENDPOINT
} from '../constants'

export const loadSubscription = () => {
	return dispatch => {
		dispatch({
			type: FETCH_SUBSCRIPTION_REQUEST
		})

		fetch(API_ENDPOINT)
			.then(response => {
				return response.json()
			}).then(json => {
				dispatch({
					type: FETCH_SUBSCRIPTION_SUCCESS,
					payload: {
						result: json
					}
				})
			}).catch(error => {
				dispatch({
					type: FETCH_SUBSCRIPTION_FAILED,
					payload: error
				})
			})
	}
}
