import React from 'react'
import styled from 'styled-components'

const SubscriptionDescContainer = styled.div``

const SubscriptionDescTitle = styled.div`
	font-size: 36px;
	text-transform: uppercase;
`

const SubscriptionDescText = styled.div`
	color: #ff408e;
	font-size: 16px;
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
