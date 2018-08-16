import React from 'react'
import styled from 'styled-components'
import Confirmation from '../Confirmation'
import logoProduct from '../../images/product.svg'

const SubscriptionContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 680px;
	padding: 30px;
	border: 1px solid #e6e6e6;
`

const SubscriptionImage = styled.img`
	height: 300px;
`

const SubscriptionDescription = styled.div`
	margin-top: 20px;
	padding: 20px;
	border-top: 1px solid #e6e6e6;
	border-bottom: 1px solid #e6e6e6;
`

const SubscriptionDescriptionItem = styled.div`
	display: flex;
	justify-content: space-between;
	&:not(:last-child) {
		margin-bottom: 15px;
	}
`

const SubscriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	margin-right: 70px;
`

const SubscriptionDescriptionName = styled.div``

const SubscriptionDescriptionValue = styled.div``

const SubscriptionMainInfo = () => (
	<SubscriptionContainer>
		<SubscriptionContent>
			<SubscriptionImage
				src={ logoProduct }
			/>
			<SubscriptionDescription>
				<SubscriptionDescriptionItem>
					<SubscriptionDescriptionName>
						{'Monthly subscription'}
					</SubscriptionDescriptionName>
					<SubscriptionDescriptionValue>
						{'$14.95'}
					</SubscriptionDescriptionValue>
				</SubscriptionDescriptionItem>
				<SubscriptionDescriptionItem>
					<SubscriptionDescriptionName>
						{'Shipping'}
					</SubscriptionDescriptionName>
					<SubscriptionDescriptionValue>
						{'FREE'}
					</SubscriptionDescriptionValue>
				</SubscriptionDescriptionItem>
				<SubscriptionDescriptionItem>
					<SubscriptionDescriptionName>
						{'Tax'}
					</SubscriptionDescriptionName>
					<SubscriptionDescriptionValue>
						{'$2.35'}
					</SubscriptionDescriptionValue>
				</SubscriptionDescriptionItem>
				<SubscriptionDescriptionItem>
					<SubscriptionDescriptionName>
						{'Discount'}
					</SubscriptionDescriptionName>
					<SubscriptionDescriptionValue>
						{'-$5'}
					</SubscriptionDescriptionValue>
				</SubscriptionDescriptionItem>
				<SubscriptionDescriptionItem>
					<SubscriptionDescriptionName>
						{'Credit (Balance $100)'}
					</SubscriptionDescriptionName>
					<SubscriptionDescriptionValue>
						{'$50'}
					</SubscriptionDescriptionValue>
				</SubscriptionDescriptionItem>
			</SubscriptionDescription>
		</SubscriptionContent>
		<Confirmation />
	</SubscriptionContainer>
)

export default SubscriptionMainInfo
