import React from 'react'
import logo from './logo.svg'
import styles from './App.css'

const App = () => (
	<div className={ styles.app }>
		<header className={ styles.header }>
			<img src={ logo } className={ styles.logo } alt='logo' />
		</header>
	</div>
)

export default App
