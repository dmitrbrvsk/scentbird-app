import React from 'react'
import styled from 'styled-components'
import logoEncrypt from '../../images/encrypt.svg'
import logoTypeCards from '../../images/type-cards.svg'
import logoArrow from '../../images/arrow.svg'

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

const PurchaseForm = styled.form`
	margin-top: 50px;
`

const PurchaseFormGroup = styled.div`
	margin-top: 20px;
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

const PurchaseInputText = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;
	height: 60px;
`

const CreditCard = styled.div`
	padding: 20px 30px 0;
	background-color: #fafafa;
	border: 1px solid #e6e6e6;
`

const CreditCardHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const CreditCardTitle = styled.div`
	color: #7fbf67;
	text-transform: uppercase;
`

const CreditCardImg = styled.div`
	width: 30px;
	height: 35px;
	margin-right: 10px;
	background-image: url(${logoEncrypt});
	background-repeat: no-repeat;
	background-size: cover;
`

const CreditCardTypesImg = styled.div`
	width: 145px;
	height: 20px;
	margin-left: auto;
	background-image: url(${logoTypeCards});
	background-repeat: no-repeat;
	background-size: cover;
`

const PurchaseButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 30px;
`

const PurchaseSubmit = styled.button`
	position: relative;
	width: 250px;
	height: 50px;
	background-color: #ff458f;
	cursor: pointer;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 30px;
		display: block;
		width: 22px;
		height: 16px;
		background-repeat: no-repeat;
		background-image: url(${logoArrow});
	}
`

const PurchaseLink = styled.a`
	font-size: 18px;

	+ ${PurchaseSubmit} {
		margin-left: 40px;
	}
`

const PurchaseSubmitText = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 60px;
	color: #fff;
	text-transform: uppercase;
	font-size: 18px;
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
			<PurchaseFormGroup>
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
			</PurchaseFormGroup>
			<PurchaseFormGroup>
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
					<PurchaseInputContainer
						widthInput='350px'
					>
						<PurchaseInputText>
							{'We may send you special discounts and offers'}
						</PurchaseInputText>
					</PurchaseInputContainer>
				</PurchaseInputGroup>
			</PurchaseFormGroup>
			<PurchaseFormGroup>
				<PurchaseFormTitle>
					{'Secure credit card payment'}
				</PurchaseFormTitle>
				<CreditCard>
					<CreditCardHeader>
						<CreditCardImg />
						<CreditCardTitle>
							{'128-bit encryption. yoy’re safe'}
						</CreditCardTitle>
						<CreditCardTypesImg />
					</CreditCardHeader>
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
				</CreditCard>
			</PurchaseFormGroup>
			<PurchaseButtonContainer>
				<PurchaseLink
					href='/'
				>
					{'Back'}
				</PurchaseLink>
				<PurchaseSubmit>
					<PurchaseSubmitText>
						{'buy now'}
					</PurchaseSubmitText>
				</PurchaseSubmit>
			</PurchaseButtonContainer>
		</PurchaseForm>
	</PurchaseContainer>
)

export default SubscriptionPurchase
