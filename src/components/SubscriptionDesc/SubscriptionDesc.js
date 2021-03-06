import React from 'react'
import styled from 'styled-components'

const SubscriptionDescContainer = styled.div`
	@media (max-width: 1170px) {
		order: -1;
		text-align: center;
	}
`

const SubscriptionDescTitle = styled.div`
	font-size: 36px;
	text-transform: uppercase;

	@media (max-width: 1170px) {
		margin-bottom: 10px;
		font-size: 22px;
	}
`

const SubscriptionDescText = styled.div`
	color: #ff408e;
	font-size: 16px;

	@media (max-width: 1170px) {
		padding: 0 10px;
	}
`

const SubscriptionDesc = ({ title, text }) => (
	<SubscriptionDescContainer>
		<SubscriptionDescTitle>
			{ title }
		</SubscriptionDescTitle>
		<SubscriptionDescText>
			{ text }
		</SubscriptionDescText>
	</SubscriptionDescContainer>
)

export default SubscriptionDesc
