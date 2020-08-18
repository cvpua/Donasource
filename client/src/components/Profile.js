import React from 'react'
import {	Avatar, Text, Box, Flex, Stat, StatGroup, StatLabel, StatNumber } from '@chakra-ui/core'
import SectionHeader from './SectionHeader.js'
import { FaUserAlt, FaLocationArrow, FaSms, FaAt } from 'react-icons/fa'
import Feed from './Feed.js'

const Profile = () => {
	return (
		<div>
			<SectionHeader title="Profile" icon={FaUserAlt} />
			<Box mx="4" shadow="md" bg="gray.50" rounded="lg">
			<Flex py="10" pb="4" borderBottom="4px" borderColor="gray.200" mb="4" flexDirection="column" justify="center" align="center">
				{/* Avatar */}
				<Avatar size="2xl" name="Marco Mirandilla" mb="2"/>
				{/* Name */}
				<Text fontSize="2xl" fontWeight="semibold">Marco Mirandilla</Text>
				{/* Username */}
				<Text fontWeight="light">@rcmirandilla</Text>

				{/* Bio */}
				<Flex px="8" pb="4" justify="center" >
				<Text textAlign="center">Iskolar ng Bayan || YSES || ELBI || tarashot || boss mapagmahalzxczxczxczxcz</Text>
				</Flex>
				<Flex flexDirection="column" mt="2">
					{/* Location */}
					<Flex align="center" justify="center">
					<Box as={FaLocationArrow} color="primary.600" />
					<Text ml="2">Los Banos, Laguna</Text>
					</Flex>
					{/* Email */}
					<Flex align="center" justify="center">
					<Box as={FaAt} color="primary.600" />
					<Text ml="2">rcmirandilla@up.edu.ph</Text>
					</Flex>
					{/* Contact */}
					<Flex align="center" justify="center">
					<Box as={FaSms} color="primary.600" />
					<Text ml="2">09286019739</Text> 
					</Flex>
				</Flex>
				<StatGroup >
					{/* Donations */}
				  <Stat d="flex" p="4" flexDirection="column" justifyContent="center" alignItems="center">
				    <StatNumber>345,670</StatNumber>
				    <StatLabel color="primary.600">Donations</StatLabel>
				  </Stat>
				  {/* Requests */}
				  <Stat d="flex" p="4" flexDirection="column" justifyContent="center" alignItems="center">
				    <StatNumber>345,670</StatNumber>
				    <StatLabel color="primary.600" >Requests</StatLabel>
				  </Stat>
				</StatGroup>
			</Flex>
			<Feed />
			</Box>
		</div>
	)
}

export default Profile