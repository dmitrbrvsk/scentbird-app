import React from 'react'
import styled from 'styled-components'
import logoProduct from '../../images/product.svg'

const MainInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 400px;
	margin-right: 70px;
	padding: 30px;
	border: 1px solid #e6e6e6; 
`

const MainInfoImage = styled.img`
	height: 300px;
`

const MainInfoDescription = styled.div`
	margin-top: 20px;
	border-top: 1px solid #e6e6e6;
`

const SubscriptionMainInfo = () => (
	<MainInfoContainer>
		<MainInfoImage
			src={ logoProduct }
		/>
		<MainInfoDescription>
			{'MainInfoDescription'}
		</MainInfoDescription>
	</MainInfoContainer>
)

export default SubscriptionMainInfo
