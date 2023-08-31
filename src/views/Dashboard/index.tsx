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
} from './styles'
import type { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
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

  const handleRemovePost = useCallback(async (postId: string) => {
    const currentPosts = await getPosts()
    const filteredPosts = currentPosts.filter(
      (currentPost) => postId !== currentPost._id
    )
    await removePostById(postId)
    setPosts(filteredPosts)
  }, [])

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

      <ContainerFilters>
        <ContainerAllergies>
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

        <ContainerType>
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

        <ContainerDifficulty>
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
      </ContainerFilters>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Dashboard)
