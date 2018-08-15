import React from 'react'
import styled from 'styled-components'
import SubscriptionHeader from '../SubscriptionHeader'
import SubscriptionMainInfo from '../SubscriptionMainInfo'
import SubscriptionPurchase from '../SubscriptionPurchase'

const SubscriptionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 1240px;
	margin: 0 auto;
`

const Subscription = () => (
	<SubscriptionContainer>
		<SubscriptionHeader />
		<SubscriptionMainInfo />
		<SubscriptionPurchase />
	</SubscriptionContainer>
)

export default Subscription
