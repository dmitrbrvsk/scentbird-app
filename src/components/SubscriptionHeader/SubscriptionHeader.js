import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'

const Header = styled.div`
	display: flex;
	flex: 0 0 100%;
	margin: 20px 0;

	@media (max-width: 1170px) {
		justify-content: center;
		order: -2;
	}
`

const LogoLink = styled.a`
	width: 140px;
	height: 40px;
	background-image: url(${logo});
	background-repeat: no-repeat;
	background-size: 100% auto;

	@media (max-width: 1170px) {
		width: 115px;
		height: 30px;
	}
`

const SubscriptionHeader = () => (
	<Header>
		<LogoLink
			href={ 'https://www.scentbird.com/' }
		/>
	</Header>
)

export default SubscriptionHeader
