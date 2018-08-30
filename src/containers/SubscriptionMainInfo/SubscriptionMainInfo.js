import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import * as subscriptionActions from '../../actions/Subscription'
import Loader from '../../components/Loader'
import Confirmation from '../../components/Confirmation'
import logoProduct from '../../images/product.svg'

const SubscriptionContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 680px;
	padding: 30px;
	border: 1px solid #e6e6e6;

	@media (max-width: 1170px) {
		padding: 20px;
		border-color: transparent;
	}
`

const SubscriptionImage = styled.div`
	height: 300px;
	background-image: url(${logoProduct});
	background-repeat: no-repeat;
	background-position: center;
	margin-bottom: 20px;
`

const SubscriptionDescription = styled.div`
	min-height: 200px;
	padding: 20px;
	border-top: 1px solid #e6e6e6;

	@media (max-width: 1170px) {
		padding: 20px 0 0;
	}
`

const SubscriptionDescriptionItem = styled.div`
	display: flex;
	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 20px;
	}

	&:last-child {
		padding-top: 20px;
		border-top: 1px solid #e6e6e6;
		font-size: 16px;
		text-transform: uppercase;
	}
`

const SubscriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	margin-right: 70px;

	@media (max-width: 1170px) {
		width: 320px;
		margin-right: 0;
	}
`

const SubscriptionCoupon = styled.div`
	margin-top: 30px;
	font-size: 16px;
`

const SubscriptionLink = styled.a`
	color: #ff458f;
	border-bottom: 1px dashed #979797;
	text-decoration: none;
`

const SubscriptionDescriptionName = styled.div``

const SubscriptionDescriptionValue = styled.div``

class SubscriptionMainInfo extends Component {
	componentDidMount() {
		this.loadSubscription()
	}

	loadSubscription() {
		this.props.actions.loadSubscription()
	}

	render() {
		const { pageSubscription } = this.props
		const { subscription } = pageSubscription

		return (
			<SubscriptionContainer>
				<SubscriptionContent>
					<SubscriptionImage />
					<SubscriptionDescription>
						{ pageSubscription.loading ? (
							<Loader />
						) : (
							subscription && subscription.map(sub => {
								return (
									<SubscriptionDescriptionItem key={ sub.id }>
										<SubscriptionDescriptionName>
											{sub.name}
										</SubscriptionDescriptionName>
										<SubscriptionDescriptionValue>
											{sub.value}
										</SubscriptionDescriptionValue>
									</SubscriptionDescriptionItem>
								)
							})
						)}
					</SubscriptionDescription>
					<SubscriptionCoupon>
						{ 'Have a ' }
						<SubscriptionLink
							href='/'
						>
							{ 'coupon code?' }
						</SubscriptionLink>
					</SubscriptionCoupon>
				</SubscriptionContent>
				<MediaQuery query='(min-width: 1170px)'>
					<Confirmation />
				</MediaQuery>
			</SubscriptionContainer>
		)
	}
}

const mapStateToProps = state => ({
	pageSubscription: state.subscription
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(subscriptionActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionMainInfo)
