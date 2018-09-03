import React, { Component } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import SubscriptionDesc from 'components/SubscriptionDesc'
import Input from 'components/Input'
import CheckboxWithText from 'components/CheckboxWithText'
import cardFormat from 'utils/cardFormat'
import logoEncrypt from 'images/encrypt.svg'
import logoTypeCards from 'images/type-cards.svg'
import logoArrow from 'images/arrow.svg'
import logoQuestion from 'images/question.svg'
import logoLock from 'images/lock.svg'

const SubscriptionContainer = styled.div`
	width: 700px;

	@media (max-width: 1170px) {
		width: 320px;
	}
`

const PurchaseForm = styled.form`
	margin-top: 50px;

	@media (max-width: 1170px) {
		margin-top: 0;
		padding: 0 15px;
	}
`

const PurchaseFormGroup = styled.div`
	margin-top: 20px;
`

const PurchaseFormTitle = styled.div`
	font-size: 24px;
	margin-bottom: 15px;

	@media (max-width: 1170px) {
		text-align: center;
		font-size: 20px;
	}
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

	@media (max-width: 1170px) {
		display: none;
	}
`

const CreditCard = styled.div`
	padding: 20px 30px 30px;
	background-color: #fafafa;
	border: 1px solid #e6e6e6;

	@media (max-width: 1170px) {
		padding: 20px 15px 30px;
	}
`

const CreditCardHeader = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	margin-bottom: 20px;
`

const CreditCardTitle = styled.div`
	color: #7fbf67;
	text-transform: uppercase;

	@media (max-width: 1170px) {
		font-size: 12px;
	}
`

const CreditCardImg = styled.div`
	width: 30px;
	height: 35px;
	margin-right: 10px;
	background-image: url(${logoEncrypt});
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1170px) {
		width: 25px;
		height: 30px;
	}
`

const CreditCardTypesImg = styled.div`
	width: 145px;
	height: 20px;
	margin-left: auto;
	background-image: url(${logoTypeCards});
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1170px) {
		margin: 15px 0 0;
	}
`

const PurchaseButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 30px;

	@media (max-width: 1170px) {
		justify-content: center;
	}
`

const PurchaseSubmit = styled.button`
	position: relative;
	width: 100%;
	height: 50px;
	background-color: #ff458f;
	cursor: pointer;

	@media (min-width: 1170px) {
		width: 250px;

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
	}
`

const PurchaseLink = styled.a`
	color: #9b9b9b;
	font-size: 18px;

	+ ${PurchaseSubmit} {
		margin-left: 40px;

		@media (max-width: 1170px) {
			margin-left: 0;
		}
	}

	@media (max-width: 1170px) {
		display: none;
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

	@media (max-width: 1170px) {
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

class SubscriptionPurchase extends Component {
	state = {
		email: '',
		password: '',
		cardNumber: '',
		securityCode: '',
		cardMonth: '',
		cardYear: '',
		shippingMobile: '',
		hideBillingAddress: true
	}

	handleShowBillingAddress = event => {
		const { checked } = event.target
		this.setState({ hideBillingAddress: checked })
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
			<SubscriptionContainer>
				<MediaQuery query='(min-width: 1170px)'>
					<SubscriptionDesc
						title={ 'month-to-month subscription' }
						text={ 'Billed monthly. Renews automatically, cancel any time. Free shipping.' }
					/>
				</MediaQuery>
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
								name={ 'shippingFirstName' }
								width={ '340px' }
								labelText={ 'First Name' }
							/>
							<Input
								name={ 'shippingLastName' }
								width={ '340px' }
								labelText={ 'Last Name' }
							/>
							<Input
								name={ 'shippingStreet' }
								width={ '460px' }
								labelText={ 'Street address' }
							/>
							<Input
								name={ 'shippingApt' }
								width={ '220px' }
								labelText={ 'Apt/Suite (Optional)' }
							/>
							<Input
								name={ 'shippingZip' }
								width={ '220px' }
								labelText={ 'Zip Code' }
							/>
							<Input
								name={ 'shippingCity' }
								width={ '220px' }
								labelText={ 'City' }
							/>
							<Input
								name={ 'shippingState' }
								width={ '220px' }
								labelText={ 'State' }
							/>
							<Input
								name={ 'shippingCountry' }
								labelText={ 'Country' }
							/>
							<Input
								name={ 'shippingMobile' }
								value={ this.state.shippingMobile }
								onChange={ this.handleInput }
								width={ '350px' }
								labelText={ 'Mobile number (Optional)' }
								mask={ [
									/\d/, ' ', /\d/, /\d/, /\d/, ' ',
									/\d/, /\d/, /\d/, ' ',
									/\d/, /\d/, ' ',
									/\d/, /\d/
								] }
							/>
							<PurchaseText>
								{'We may send you special discounts and offers'}
							</PurchaseText>
						</PurchaseInputGroup>
					</PurchaseFormGroup>
					<CheckboxWithText
						text={ 'Use this address as my billing address' }
						checked={ this.state.hideBillingAddress }
						onChange={ this.handleShowBillingAddress }
					/>
					{!this.state.hideBillingAddress && (
						<PurchaseFormGroup>
							<PurchaseFormTitle>
								{'Billing address'}
							</PurchaseFormTitle>
							<PurchaseInputGroup>
								<Input
									name={ 'billingFirstName' }
									width={ '340px' }
									labelText={ 'First Name' }
								/>
								<Input
									name={ 'billingLastName' }
									width={ '340px' }
									labelText={ 'Last Name' }
								/>
								<Input
									name={ 'billingStreet' }
									width={ '460px' }
									labelText={ 'Street address' }
								/>
								<Input
									name={ 'billingApt' }
									width={ '220px' }
									labelText={ 'Apt/Suite (Optional)' }
								/>
								<Input
									name={ 'billingZip' }
									width={ '220px' }
									labelText={ 'Zip Code' }
								/>
								<Input
									name={ 'billingCity' }
									width={ '220px' }
									labelText={ 'City' }
								/>
								<Input
									name={ 'billingState' }
									width={ '220px' }
									labelText={ 'State' }
								/>
								<Input
									name={ 'billingCountry' }
									labelText={ 'Country' }
								/>
							</PurchaseInputGroup>
						</PurchaseFormGroup>
					)}
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
									icon={ {
										src: logoLock,
										top: '50%',
										right: '5px',
										transform: 'translateY(-50%)'
									} }
									mask={ [
										/\d/, /\d/, /\d/, /\d/, ' ',
										/\d/, /\d/, /\d/, /\d/, ' ',
										/\d/, /\d/, /\d/, /\d/, ' ',
										/\d/, /\d/, /\d/, /\d/
									] }
								/>
								<Input
									name='securityCode'
									value={ this.state.securityCode }
									onChange={ this.handleInput }
									width={ '168px' }
									labelText={ 'Security code' }
									icon={ {
										src: logoQuestion,
										top: '50%',
										right: '-32px',
										transform: 'translateY(-50%)'
									} }
									mask={ [/\d/, /\d/, /\d/, /\d/, /\d/] }
								/>
								<Input
									name='cardMonth'
									value={ this.state.cardMonth }
									onChange={ this.handleInput }
									width={ '140px' }
									labelText={ 'Month' }
									mask={ [/\d/, /\d/] }
								/>
								<Input
									name='cardYear'
									value={ this.state.cardYear }
									onChange={ this.handleInput }
									width={ '140px' }
									labelText={ 'Year' }
									title={ 'Exp.' }
									mask={ [/\d/, /\d/] }
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
						<PurchaseSubmit type='button'>
							<PurchaseSubmitText>
								{'buy now'}
							</PurchaseSubmitText>
						</PurchaseSubmit>
					</PurchaseButtonContainer>
				</PurchaseForm>
			</SubscriptionContainer>
		)
	}
}

export default SubscriptionPurchase
