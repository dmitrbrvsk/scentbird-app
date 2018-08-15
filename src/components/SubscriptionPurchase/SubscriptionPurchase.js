import React from 'react'
import styled from 'styled-components'

const PurchaseContainer = styled.div`
	width: 700px;
`

const PurchaseTitle = styled.div`
	font-size: 36px;
	text-transform: uppercase;
`

const PurchaseSubTitle = styled.div`
	color: #ff408e;
	font-size: 16px;
`

const PurchaseForm = styled.div`
	margin-top: 50px;
`

const PurchaseFormTitle = styled.div`
	font-size: 24px;
	margin-bottom: 15px;
`

const PurchaseInputContainer = styled.div`
	display: inline-block;
	position: relative;
	width: ${props => props.widthInput ? props.widthInput : '100%'};
	margin-bottom: 20px;
`

const PurchaseFormLabel = styled.label`
	position: absolute;
	top: 50%;
	left: 15px;
	transform: translateY(-50%);
	color: #9b9b9b;
	font-size: 18px;
	pointer-events: none;
	transition: top .3s ease, font .3s ease;

	&:before {
		content: '';
    display: block;
    position: absolute;
    top: 7px;
    left: -3px;
		right: -3px;
		height: 3px;
    background-color: #fff;
    z-index: -1;
	}
`

const PurchaseInputGroup = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const PurchaseInput = styled.input`
	width: 100%;
	height: 60px;
	padding: 0 15px;
	border: 1px solid #e6e6e6;
	font-size: 18px;

	&:focus + ${PurchaseFormLabel} {
		top: 0;
		background-color: #fff;
		font-size: 14px;
  }
`

const SubscriptionPurchase = () => (
	<PurchaseContainer>
		<PurchaseTitle>
			{'month-to-month subscription'}
		</PurchaseTitle>
		<PurchaseSubTitle>
			{'Billed monthly. Renews automatically, cancel any time. Free shipping.'}
		</PurchaseSubTitle>
		<PurchaseForm>
			<div className='purchase-form__group'>
				<PurchaseFormTitle>
					{'Create account'}
				</PurchaseFormTitle>
				<PurchaseInputGroup>
					<PurchaseInputContainer
						widthInput='340px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Email address'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='340px'
					>
						<PurchaseInput
							type='password'
						/>
						<PurchaseFormLabel>
							{'Password'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
				</PurchaseInputGroup>
			</div>
			<div className='purchase-form__group'>
				<PurchaseFormTitle>
					{'Shipping address'}
				</PurchaseFormTitle>
				<PurchaseInputGroup>
					<PurchaseInputContainer
						widthInput='340px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'First Name'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='340px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Last Name'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='460px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Street address'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='220px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Apt/Suite (Optional)'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='220px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Zip Code'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='220px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'City'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='220px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'State'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Country'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='350px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Mobile number (Optional)'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
				</PurchaseInputGroup>
			</div>
			<div className='purchase-form__group'>
				<PurchaseFormTitle>
					{'Secure credit card payment'}
				</PurchaseFormTitle>
				<PurchaseInputGroup>
					<PurchaseInputContainer
						widthInput='425px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Credit card number'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='168px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Security code'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='140px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Month'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
					<PurchaseInputContainer
						widthInput='140px'
					>
						<PurchaseInput
							type='text'
						/>
						<PurchaseFormLabel>
							{'Year'}
						</PurchaseFormLabel>
					</PurchaseInputContainer>
				</PurchaseInputGroup>
			</div>
		</PurchaseForm>
	</PurchaseContainer>
)

export default SubscriptionPurchase
