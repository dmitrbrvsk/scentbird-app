import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import SubscriptionHeader from 'components/SubscriptionHeader'
import SubscriptionMainInfo from 'containers/SubscriptionMainInfo'
import SubscriptionDesc from 'components/SubscriptionDesc'
import SubscriptionPurchase from 'components/SubscriptionPurchase'
import Confirmation from 'components/Confirmation'

const SubscriptionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 1170px;
	margin: 0 auto 50px;

	@media (max-width: 1170px) {
		width: 320px;
	}
`

const Subscription = () => (
	<SubscriptionContainer>
		<SubscriptionHeader />
		<SubscriptionMainInfo />
		<MediaQuery query='(max-width: 1170px)'>
			<SubscriptionDesc
				title={ 'month-to-month subscription' }
				text={ 'Billed monthly. Renews automatically, cancel any time. Free shipping.' }
			/>
		</MediaQuery>
		<SubscriptionPurchase />
		<MediaQuery query='(max-width: 1170px)'>
			<Confirmation />
		</MediaQuery>
	</SubscriptionContainer>
)

export default Subscription
