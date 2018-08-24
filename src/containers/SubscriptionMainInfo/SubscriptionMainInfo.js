import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
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
`

const SubscriptionImage = styled.img`
	height: 300px;
`

const SubscriptionDescription = styled.div`
	min-height: 200px;
	margin-top: 20px;
	padding: 20px;
	border-top: 1px solid #e6e6e6;
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
					<SubscriptionImage
						src={ logoProduct }
					/>
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
				<Confirmation />
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
