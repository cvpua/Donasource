import React from 'react'
import { Field } from 'formik'
import { NumberInput, NumberInputStepper, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/core'

const MyNumeric = (props) => {
	const { label, name, ...rest } = props

	return (
		<Field name={name}>
			{
				({field,form}) => (
					<FormControl isInvalid={form.errors[name] && form.touched[name]} mb="4">
						<FormLabel htmlFor={name}>{label}</FormLabel>
						<NumberInput 
							id={name} {...rest} {...field}
						>
							<NumberInputField />
						  <NumberInputStepper>
						    <NumberIncrementStepper />
						    <NumberDecrementStepper />
						  </NumberInputStepper>
						</NumberInput>
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				)
			}
		</Field>
	)
}

export default MyNumeric