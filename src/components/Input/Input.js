import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'
import styled from 'styled-components'

const InputWrapper = styled.div`
	position: relative;
	display: inline-block;
	width: ${props => props.widthInput ? props.widthInput : '100%'};
	margin-bottom: 20px;

	@media (max-width: 1170px) {
		width: 100%;
	}
`

const Label = styled.label`
	position: absolute;
	top: ${props => props.emptyInput ? '50%' : 0};
	left: 15px;
	transform: translateY(-50%);
	background-color: #fff;
	color: #9b9b9b;
	font-size: ${props => props.emptyInput ? '18px' : '14px'};
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

const InputContainer = styled.input`
	width: 100%;
	height: 50px;
	padding: 0 15px;
	border: 1px solid ${props => props.error ? '#fd6464' : '#e6e6e6'};
	font-size: 18px;

	&:focus + ${Label} {
		top: 0;
		font-size: 14px;
	}
`

const InputInner = styled.div`
	position: relative;
`

const Title = styled.div`
	position: absolute;
	right: -55px;
	top: 50%;
	transform: translateY(-50%);
	color: #9b9b9b;
	font-size: 18px;

	@media (max-width: 1170px) {
		display: none;
	}
`

const Icon = styled.div`
	position: absolute;
	top: ${props => props.top};
	right: ${props => props.right};
	bottom: ${props => props.bottom};
	left: ${props => props.left};
	transform: ${props => props.transform};
	width: ${props => props.width ? props.width : '18px'};
	height: ${props => props.height ? props.height : '18px'};
	background-image: url(${props => props.src});
	background-repeat: no-repeat;
	cursor: pointer;

	@media (max-width: 1170px) {
		display: none;
	}
`

const ErrorText = styled.div`
	position: relative;
	bottom: -5px;
	color: #f00;
	font-size: 12px;
`

export default class Input extends Component {
	state = {
		isEmpty: true
	}

	isEmpty = input => this.setState({ isEmpty: input.value.length < 1 })

	handleChange = event => {
		const input = event.target
		this.isEmpty(input)
		this.props.onChange && this.props.onChange(input)
	}

	render() {
		const {
			mask,
			value,
			icon,
			labelText,
			title,
			width,
			type,
			name,
			errorText
		} = this.props
		return (
			<InputWrapper
				widthInput={ width }
			>
				<InputInner>
					<MaskedInput
						mask={ mask || false }
						name={ name }
						value={ value || '' }
						type={ type || 'text' }
						onChange={ this.handleChange }
						error={ errorText }
						render={ (ref, props) => (
							<InputContainer innerRef={ ref } { ...props } />
						) }
					/>
					<Label
						emptyInput={ this.state.isEmpty }
					>
						{ labelText }
					</Label>
					{ icon && (
						<Icon
							src={ icon.src }
							top={ icon.top }
							right={ icon.right }
							transform={ icon.transform }
						/>
					)}
				</InputInner>
				{ title && (
					<Title>
						{ title }
					</Title>
				)}
				{ errorText && (
					<ErrorText>
						{ errorText }
					</ErrorText>
				) }
			</InputWrapper>
		)
	}
}
