import React, { Component } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import CheckboxWithText from '../CheckboxWithText'
import cardFormat from '../../utils/cardFormat'
import logoEncrypt from '../../images/encrypt.svg'
import logoTypeCards from '../../images/type-cards.svg'
import logoArrow from '../../images/arrow.svg'
import logoQuestion from '../../images/question.svg'

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

const PurchaseInputGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -10px;

	> * {
		margin: 10px;
	}
`

const PurchaseText = styled.div`
	height: 60px;
	line-height: 60px;
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
	color: #9b9b9b;
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

class SubscriptionPurchase extends Component {
	state = {
		email: '',
		password: '',
		cardNumber: ''
	}

	handleInput = input => {
		const { name, value } = input
		this.setState({ [name]: value })
	}

	cardFormat = event => {
		const { value } = event.target
		this.setState({
			cardNumber: cardFormat(value)
		})
	}

	render() {
		return (
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
							<Input
								width={ '340px' }
								labelText={ 'Email address' }
								value={ this.state.email }
								name='email'
								onChange={ this.handleInput }
							/>
							<Input
								width={ '340px' }
								labelText={ 'Password' }
								value={ this.state.password }
								name='password'
								onChange={ this.handleInput }
								type={ 'password' }
							/>
						</PurchaseInputGroup>
					</PurchaseFormGroup>
					<PurchaseFormGroup>
						<PurchaseFormTitle>
							{'Shipping address'}
						</PurchaseFormTitle>
						<PurchaseInputGroup>
							<Input
								width={ '340px' }
								labelText={ 'First Name' }
							/>
							<Input
								width={ '340px' }
								labelText={ 'Last Name' }
							/>
							<Input
								width={ '460px' }
								labelText={ 'Street address' }
							/>
							<Input
								width={ '220px' }
								labelText={ 'Apt/Suite (Optional)' }
							/>
							<Input
								width={ '220px' }
								labelText={ 'Zip Code' }
							/>
							<Input
								width={ '220px' }
								labelText={ 'City' }
							/>
							<Input
								width={ '220px' }
								labelText={ 'State' }
							/>
							<Input
								labelText={ 'Country' }
							/>
							<Input
								width={ '350px' }
								labelText={ 'Mobile number (Optional)' }
							/>
							<PurchaseText>
								{'We may send you special discounts and offers'}
							</PurchaseText>
						</PurchaseInputGroup>
					</PurchaseFormGroup>
					<CheckboxWithText
						text={ 'Use this address as my billing address' }
					/>
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
								<Input
									name='cardNumber'
									value={ this.state.cardNumber }
									onChange={ this.handleInput }
									width={ '425px' }
									labelText={ 'Credit card number' }
								/>
								<Input
									width={ '168px' }
									labelText={ 'Security code' }
									srcIcon={ logoQuestion }
								/>
								<Input
									width={ '140px' }
									labelText={ 'Month' }
								/>
								<Input
									width={ '140px' }
									labelText={ 'Year' }
									title={ 'Exp.' }
								/>
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
	}
}

export default SubscriptionPurchase
