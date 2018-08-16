import React from 'react'
import { injectGlobal } from 'styled-components'
import Subscription from '../Subscription'

const resetStyles = () => injectGlobal`
	* {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	outline: 0;
  	box-sizing: border-box;
	}

	body {
		font-size: 14px;
	}
`

const App = () => {
	resetStyles()
	return (
		<div className='app-container'>
			<Subscription />
		</div>
	)
}

export default App
