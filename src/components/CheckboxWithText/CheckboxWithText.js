import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.label`
	display: flex;
	padding: 20px 0 40px;
	cursor: pointer;
	user-select: none;
`

const CheckboxText = styled.span`
	color: #666;
`

const Checkbox = styled.div`
	position: relative;
	width: 16px;
	height: 16px;
	border: 1px solid #1d1b2b;

	+ ${CheckboxText} {
		margin-left: 8px;
	}
`

const CheckboxInput = styled.input`
	position: absolute;
	left: -9999px;
	height: 0;
	margin: 0;
	opacity: 0;
	z-index: -1;

	&:checked {
		+ ${Checkbox} {
			background-color: #ff5f9e;
			border-color: #ff217a;

			&:before {
				content: '';
				position: absolute;
				top: 3px;
				left: 2px;
				width: 8px;
				height: 4px;
				background-color: transparent;
				border: 2px solid #fff;
				border-top: none;
				border-right: none;
				transform: rotate(-45deg);
			}
		}
	}
`

const CheckboxWithText = props => {
	const { text } = props
	return (
		<CheckboxContainer>
			<CheckboxInput
				type='checkbox'
			/>
			<Checkbox primary />
			{ text && (
				<CheckboxText>
					{text}
				</CheckboxText>
			)}
		</CheckboxContainer>
	)
}

export default CheckboxWithText
