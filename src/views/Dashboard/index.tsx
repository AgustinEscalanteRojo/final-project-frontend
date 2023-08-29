import React, { FC, memo, useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'
import { getPosts, removePostById } from '../../services/api/post'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeReviewCard from '../../components/Card'
import { EditPostInput, Post } from '../../models/Post'
import UpdatePost from '../UpdatePost'
import { allergiesOptions, allergyIcons } from '../../common/constants'
import {
  Container,
  ButtonController,
  ContainerAllergies,
  Cards,
  IconButtonStyled,
} from './styles'
import type { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post | null>(null)
  const [isEdit, setIsEdit] = useState(false)
  const [allergies, setAllergies] = React.useState<string[]>([])

  const handleAllergiesChange = (event: SelectChangeEvent<string[]>) => {
    setAllergies(event.target.value as string[])
  }

  const handleGoToPost = useCallback(() => {
    navigate('/create-post')
  }, [navigate])

  const fetchPosts = useCallback(async () => {
    const postsList = await getPosts()
    setPosts(postsList)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleRemovePost = useCallback(async (postId: string) => {
    const currentPosts = await getPosts()
    const filteredPosts = currentPosts.filter(
      (currentPost) => postId !== currentPost._id
    )
    await removePostById(postId)
    setPosts(filteredPosts)
  }, [])

  const handleOnCompleteEdition = useCallback(
    (values: EditPostInput) => {
      const editedPost = { ...post, ...values } as Post
      setPost(editedPost)
    },
    [post]
  )

  if (post && isEdit) {
    return (
      <UpdatePost
        onEditComplete={handleOnCompleteEdition}
        id={post._id}
        initialValues={{
          title: post.title,
          type: post.type,
          duration: post.duration,
          difficulty: post.difficulty,
          allergies: post.allergies as string,
          description: post.description,
          ingredients: post.ingredients,
          diners: post.diners,
          steps: post.steps,
        }}
        onLogout={onLogout}
      />
    )
  }

  return (
    <Container>
      <Header onLogout={onLogout} />

      <ButtonController>
        <IconButtonStyled
          onClick={handleGoToPost}
          color="primary"
          aria-label="add new post"
 
        >
          <AddIcon fontSize="large" style={{ color: 'black' }} /> {}
        </IconButtonStyled>
      </ButtonController>

      <Cards>
        {posts?.map((post, index) => (
          <RecipeReviewCard
            key={index}
            post={post}
            onRemove={handleRemovePost}
          />
        ))}
      </Cards>






      <ContainerAllergies>
        <FormControl
        
        >
          <InputLabel id="allergies-label">ALLERGIES</InputLabel>
          <Select
            labelId="allergies-label"
            id="allergies-select"
            multiple
            value={allergies}
            onChange={handleAllergiesChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 400,
                  width: 200,
                },
              },
            }}
          >
            {allergiesOptions.map((allergy) => (
              <MenuItem key={allergy} value={allergy}>
                <ListItemIcon>
                  <Checkbox checked={allergies.indexOf(allergy) > -1} />
                </ListItemIcon>
                <Box sx={{ width: 25, height: 25 }}>
                  <img
                    src={allergyIcons[allergy]}
                    alt={allergy}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Box>
                <ListItemText primary={allergy} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ContainerAllergies>




      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Dashboard)
