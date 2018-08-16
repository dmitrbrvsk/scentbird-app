import React from 'react'
import styled from 'styled-components'

const LoaderContainer = styled.div`
	text-align: center;
`

const Loader = () => (
	<LoaderContainer>
		{'Загрузка...'}
	</LoaderContainer>
)

export default Loader
