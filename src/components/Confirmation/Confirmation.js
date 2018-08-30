import React from 'react'
import styled from 'styled-components'
import logoConfirm from '../../images/confirm.svg'

const ConfirmationContainer = styled.div`
	margin-top: 25px;

	@media (max-width: 1170px) {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		padding: 0 15px;
	}
`

const ImgConfirmation = styled.div`
	width: 370px;
	height: 240px;
	background-image: url(${logoConfirm});
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1170px) {
		width: 280px;
		height: 180px;
	}
`

const TextConfirmation = styled.div`
	margin-top: 20px;
	line-height: 20px;

	@media (max-width: 1170px) {
		margin-top: 0;
		font-size: 16px;
	}
`

const Confirmation = () => (
	<ConfirmationContainer>
		<ImgConfirmation />
		<TextConfirmation>
			{`You will receive an email confirmation when recipient accepts your gift.
				Scentbird ships between the 15th and the 18th of every month.
				Recipient will receive an email confirmation of shipment every month.
				Please allow 5-7 days for delivery.`}
		</TextConfirmation>
	</ConfirmationContainer>
)

export default Confirmation
