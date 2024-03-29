import React, { useState, useEffect, useContext } from 'react'
import {Box, Flex, Text, Divider, Spinner} from '@chakra-ui/core'
import SectionHeader from './SectionHeader.js'
import {BiMessageAltDetail, BiMessageAltX} from 'react-icons/bi'
import Avail from './Avail.js'
import axios from 'axios'
import {UserContext} from '../App.js'
import Toast from './Toast.js'

const AvailsSection = () => {
	const [USER] = useContext(UserContext)
	const { user, token } = USER
	const { _id: userId } = user

	const [avails, setAvails] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [message, setMessage] = useState()

	const accept = async (availId, setIsSubmitting) => {
		setIsSubmitting(true)
		try{
			const { data } = await axios.patch(
				`/api/users/${userId}/avails/${availId}`, 
				{response: "ACCEPT"},
				{
					headers: {
						'Authorization': 'Bearer ' + token,
					}
				}
			)
			setAvails(prevState => ([
				...data.avails
			]))
			setIsSubmitting(false)
		}catch(error){
			setMessage({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      })
		}
	}

	const reject = async (availId, setIsSubmitting) => {
		setIsSubmitting(true)
		try{
			const { data } = await axios.patch(
				`/api/users/${userId}/avails/${availId}`, 
				{response: "REJECT"},
				{
					headers: {
						'Authorization': 'Bearer ' + token
					}
				}
			)
			setAvails(prevState => ([
				...data.avails
			]))
			setIsSubmitting(false)
		}catch(error){
			setMessage({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      })
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try{
				const { data } = await axios.get(`/api/users/${userId}/avails`)
				console.log('Avails: ', data)
				setAvails(prevState => ([
					...prevState,
					...data.avails
				]))
				setIsLoading(false)
			}catch(error){
				setMessage({
	        title: "Error",
	        description: error.response.data.message,
	        status: "error",
	        duration: 2000,
	        isClosable: true,
	      })
				setIsLoading(false)
			}
		}
		fetchData()
	}, [userId])

	return (
		<React.Fragment>
			<Toast message={message} />
			<SectionHeader title="Avails" icon={BiMessageAltDetail} />
			{
				isLoading ? 
					<Flex justify="center" pt="8" >
						<Spinner
						  thickness="6px"
						  speed="0.65s"
						  emptyColor="gray.200"
						  color="primary.600"
						  size="xl"
						/>
					</Flex>
				: avails.length === 0 ?
					<Flex align="center" py="8" flexDirection="column">
            <Box as={BiMessageAltX} size="20" />
            <Text fontWeight="bold" fontSize="lg">No one has requested yet.</Text>
            <Text>You can post more donations to get more request.</Text>
          </Flex>
        :
					<Box mx={{base: "0", sm: "4"}} mb={{base: "24", md: "2"}} rounded="lg" bg="white" shadow="sm" pb="2">
						<Divider />
							{

								avails.map((avail) => {
									return (<Avail avail={avail} accept={accept} reject={reject} />)
								})
							}
					</Box>
			}
		</React.Fragment>
	)
}

export default AvailsSection