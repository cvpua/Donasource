import React,{ useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Stack, Box, Flex, Avatar, Text } from '@chakra-ui/core'
import { BiNote } from 'react-icons/bi'
import Post from './Post.js'
import SectionHeader from './SectionHeader.js'
import PostSkeleton from './PostSkeleton.js'

const INIT_POST = {
		avatar: null,
		author: '',
		title: '',
		name: {
			firstName: '',
			lastName: '',
		},
		description: '',
		type: 'donation',
		location: '',
		deadline: '',
		items: [],
		tags: [],
		images: [],
		comments: [],
		likers: [],
}

const PostSection = ({match}) => {
	// to get the parameter in the link
	const { id: postId } = useParams()

	const [post, setPost] = useState(INIT_POST)
	const [comments, setComments] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const addComment = (comment) => {
		console.log('Comment: ', comment)
    setComments((prevState) => ([
      ...prevState,
      comment,
    ]))
  }

  useEffect(() => {
  	const fetchData = async () => {
  		try{
	      const { data } = await axios.get(`/api/posts/${postId}`)
	      console.log('Comments: ', data.comments)
  			setPost(prevState => ({
  				...prevState,
  				...data,
  			}))
  			setComments(data.comments)
				setIsLoading(false)
	    }catch(error){
	      alert(error)
	    }
  	}
  	fetchData()
  }, [postId])

	return (
		<div>
			<SectionHeader title="Post" icon={BiNote} />
			{/* Post */}
			<Box px="5" mb={{base: "20", md: "2"}} >
			{
				isLoading ? <PostSkeleton />
				:
					<Post data={post} addComment={addComment} isLinked={false} isPostSection={true} >
						{/* Comment Stack */}
			      <Stack mt="2">
			        {
			          comments.map((comment) => {
			          	const author = comment.user.name.firstName + " " + comment.user.name.lastName
			            return (
			              <Box key={comment._id} borderTop="1px" borderColor="gray.200" mb="4" pt="4">
			                <Flex mb="2">
			                  {/* Avatar */}
			                  <Avatar size="md" name={author} src={comment.user.avatar} mr="4"/>
			                  {/* Author */}
			                  <Box>
				                  <Text fontWeight="bold" >{author}</Text>
				                  <Text fontWeight="light" fontSize="sm" mb="2">@{comment.user.username}</Text>
				                  <Text fontFamily="body">{comment.content}</Text>
			                  </Box>
			                </Flex>
			              </Box>
			            )
			          })
			        }
		      	</Stack>
		      </Post>
			}
			</Box>
		</div>
	)
}

export default PostSection