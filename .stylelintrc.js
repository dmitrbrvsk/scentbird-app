module.exports = {
	'processors': ['stylelint-processor-styled-components'],
	'extends': [
		'stylelint-config-standard',
		'stylelint-config-styled-components'
	],
	'rules': {
		'indentation': 'tab',
		'number-leading-zero': 'never',
		'selector-pseudo-element-colon-notation': 'single'
	}
};