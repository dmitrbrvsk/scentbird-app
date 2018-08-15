import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'

const Header = styled.div`
	display: flex;
	flex: 0 0 100%;
	margin: 20px 0;
`

const LogoLink = styled.a`
	width: 140px;
	height: 40px;
	background-image: url(${logo});
	background-repeat: no-repeat;
`

const SubscriptionHeader = () => (
	<Header>
		<LogoLink
			href={ 'https://www.scentbird.com/' }
		/>
	</Header>
)

export default SubscriptionHeader
