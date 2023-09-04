import React, { FC, memo, useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { getPosts, removePostById } from '../../services/api/post'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeReviewCard from '../../components/Card'
import { Post } from '../../models/Post'
import {
  allergiesOptions,
  allergyIcons,
  difficultyOptions,
  typeOptions,
} from '../../common/constants'
import {
  Container,
  ButtonController,
  ContainerAllergies,
  Cards,
  IconButtonStyled,
  StyledCheckbox,
  AllergyOption,
  AllergyIcon,
  AllergyLabel,
  AllergyIconContainer,
  ContainerType,
  TypeOption,
  StyledCheckboxType,
  TypeLabel,
  TypeIconContainer,
  ContainerDifficulty,
  DifficultyOption,
  StyledCheckboxDifficulty,
  DifficultyLabel,
  DifficultyIconContainer,
  ContainerFilters,
  UserCards,
  Typography,
  ContainerUsers,
  ButtonStyled,
} from './styles'
import type { Props } from './types'
import { getAllUsers } from '../../services/api/user'
import { User } from '../../models/User'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [allergies, setAllergies] = React.useState<string[]>([])
  const [types, setTypes] = React.useState<string[]>([])
  const [difficultys, setdifficultys] = React.useState<string[]>([])

  const handleDifficultysChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    difficulty: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setdifficultys([...difficultys, difficulty])
    } else {
      setdifficultys(difficultys.filter((a) => a !== difficulty))
    }
  }

  const handleAllergiesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    allergy: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setAllergies([...allergies, allergy])
    } else {
      setAllergies(allergies.filter((a) => a !== allergy))
    }
  }

  const handleTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setTypes([...types, type])
    } else {
      setTypes(types.filter((a) => a !== type))
    }
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

  const fetchUsers = useCallback(async () => {
    const usersList = await getAllUsers()
    setUsers(usersList)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleRemovePost = useCallback(async (postId: string) => {
    const currentPosts = await getPosts()
    const filteredPosts = currentPosts.filter(
      (currentPost) => postId !== currentPost._id
    )
    await removePostById(postId)
    setPosts(filteredPosts)
  }, [])

  function getRandomPastelColor() {
    const pastelColors = [
      '#FFD1DC', // Light Pink
      '#FFABAB', // Light Red
      '#FFC3A0', // Light Orange
      '#FF677D', // Light Coral
      '#D4A5A5', // Light Mauve
      '#392F5A', // Light Indigo
      '#31A2AC', // Light Teal
      '#61C0BF', // Light Cyan
      '#6B4226', // Light Brown
      '#D9BF77', // Light Yellow
    ]

    return pastelColors[Math.floor(Math.random() * pastelColors.length)]
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
          <AddIcon fontSize="medium" style={{ color: 'black' }} /> {}
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

      <ContainerUsers>
        <UserCards>
          {users?.map((user, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: getRandomPastelColor() }}>
                  {user.username.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.username}
                secondary={user.firstName}
              />
            </ListItem>
          ))}
        </UserCards>
        <ButtonStyled variant="contained" color="primary" onClick={() => {}}>
          See all{' '}
        </ButtonStyled>
      </ContainerUsers>

      <ContainerFilters>
        <ContainerAllergies>
          <Typography> Allergies </Typography>
          {allergiesOptions.map((allergy) => (
            <AllergyOption key={allergy}>
              <StyledCheckbox
                checked={allergies.indexOf(allergy) > -1}
                onChange={(event) => handleAllergiesChange(event, allergy)}
              />
              <AllergyLabel>
                <AllergyIconContainer>
                  <AllergyIcon src={allergyIcons[allergy]} alt={allergy} />
                  {allergy}
                </AllergyIconContainer>
              </AllergyLabel>
            </AllergyOption>
          ))}
        </ContainerAllergies>

        <ContainerDifficulty>
          <Typography> Difficulty</Typography>
          {difficultyOptions.map((difficulty) => (
            <DifficultyOption key={difficulty}>
              <StyledCheckboxDifficulty
                checked={difficultys.indexOf(difficulty) > -1}
                onChange={(event) => handleDifficultysChange(event, difficulty)}
              />
              <DifficultyLabel>
                <DifficultyIconContainer>{difficulty}</DifficultyIconContainer>
              </DifficultyLabel>
            </DifficultyOption>
          ))}
        </ContainerDifficulty>

        <ContainerType>
          <Typography> Type</Typography>
          {typeOptions.map((type) => (
            <TypeOption key={type}>
              <StyledCheckboxType
                checked={types.indexOf(type) > -1}
                onChange={(event) => handleTypeChange(event, type)}
              />
              <TypeLabel>
                <TypeIconContainer>{type}</TypeIconContainer>
              </TypeLabel>
            </TypeOption>
          ))}
        </ContainerType>
      </ContainerFilters>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Dashboard)
