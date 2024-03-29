import React,{ useState } from 'react'
import { 
  Box,
	Stack, 
	IconButton,
	Button, 
  Flex,
	useDisclosure, 
	Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  Text,
} from '@chakra-ui/core'
import { BiGhost } from 'react-icons/bi'
import Post from './Post.js'
import PostFormContainer from './PostFormContainer.js'


const Feed = (props) => {
	const { posts, createPost, isLoading } = props
	// Form modal will close if the form is successfully submitted
	const [isSubmitting, setIsSubmitting] = useState(false)
	//	A custom hook to help handle common open, close, or toggle scenarios. 
	// See this docs for more information: https://chakra-ui.com/usedisclosure
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
      {
        posts.length === 0 ? 
          <Flex align="center" py="8" flexDirection="column">
            <Box as={BiGhost} size="20" />
            <Text fontWeight="bold" fontSize="lg">Oooops!</Text>
            <Text>Your feed is empty. Make a post now!</Text>
          </Flex>
        : 
          <Stack mb={{base: "16", md: "4"}} px={{base: "0", sm: "4"}} >
            {
              posts.map((post) => (
                <Post key={post._id} data={post} isLinked={true} isLoading={isLoading} />
              ))
            }
          </Stack>
      }
      
	    
	    {/* Post Form Modal */}
	    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          	{/* Post Form */}
            <PostFormContainer onClose={onClose} handleIsSubmitting={setIsSubmitting} createPost={createPost} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="cyan" type="submit" isLoading={isSubmitting} form="postForm">Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

	    {/* Floating Action Button / Post Button */}
    	<IconButton 
    		pos="fixed" 
    		bottom={{base: "2rem", md: "8"}}
        icon="add"
    		right={{base: "0", md: "8"}}
        left={{base: "0", md: "initial"}}
        mx={{base: "auto", md: "initial"}}
        zIndex="sticky"
        isRound
    		variant="solid"
    		variantColor="secondary"
    		aria-label="Post"
    		shadow="md"
    		size="lg"
        w="16"
        h="16"
    		onClick={onOpen}
    	/>
    </>
	)
}

export default Feed