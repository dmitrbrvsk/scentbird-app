import React from 'react'
import { injectGlobal } from 'styled-components'
import Subscription from '../Subscription'

const globalStyles = () => injectGlobal`
	@font-face {
		font-family: 'Proxima Nova';
		src: url('../../fonts/ProximaNova/ProximaNova-Regular.eot');
		src: url('../../fonts/ProximaNova/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
				 url('../../fonts/ProximaNova/ProximaNova-Regular.woff') format('woff'),
				 url('../../fonts/ProximaNova/ProximaNova-Regular.ttf') format('truetype'),
				 url('../../fonts/ProximaNova/ProximaNova-Regular.svg#webfont') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font: 14px Proxima Nova, sans-serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}
`

const App = () => {
	globalStyles()
	return (
		<div className='app-container'>
			<Subscription />
		</div>
	)
}

export default App
