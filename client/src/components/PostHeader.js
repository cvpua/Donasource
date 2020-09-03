import React from 'react'
import { Flex, Avatar, Text, Badge, Box } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

const PostHeader = (props) => {
	const { 
		avatar, 
		title,
    username,
		author, 
		deadline: mainDeadline,
    status,
    datePosted
	} = props
// Compute for the the time remaining from the deadline
// In terms of days
// If day < 1  then display in terms of hrs
// If hrs < 1 then display in terms of mins
// If mins < 1 then display in terms of sec
// Create a CountdownTimer Component
  const currentDate = new Date()

  const date = new Date(datePosted)
  const time = currentDate.getTime() - date.getTime()

  const days = Math.floor(time / (1000 * 3600 * 24))
  const hours = Math.floor(time / (1000 * 3600))
  const mins = Math.floor(time / (1000 * 60))
  const sec = Math.floor(time / (1000))

	return (
		<Flex align="center" mb="2">
    	{/* Avatar */}
      <Link to={`/${username}`}>
        <Avatar size="md" name={author} src={avatar} mr="4"/>
      </Link>
      <Flex flexDirection="column" w="full">
        {/* Author */}
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" mr="1">{author}</Text>
          <Text fontSize="sm" color="gray.700">{`@${username}`}</Text>
        </Flex>
        {/* time */}
        <Text fontSize="sm" color="gray.700">

          {
            hours > 24 ? `${days}d ago`
            : mins > 60 ? `${hours}hr ago`
            : sec > 60 ? `${mins}min ago`
            : `${sec} sec ago`
          }
        </Text>
      </Flex>
    </Flex>
	)
}

export default PostHeader