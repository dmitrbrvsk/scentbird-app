import React from 'react'
import styled from 'styled-components'
import SubscriptionHeader from '../SubscriptionHeader'
import SubscriptionMainInfo from '../SubscriptionMainInfo'
import SubscriptionPurchase from '../SubscriptionPurchase'

const SubscriptionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 1170px;
	margin: 0 auto 50px;
`

const Subscription = () => (
	<SubscriptionContainer>
		<SubscriptionHeader />
		<SubscriptionMainInfo />
		<SubscriptionPurchase />
	</SubscriptionContainer>
)

export default Subscription
