import { FC, memo} from 'react'
import AddIcon from '@mui/icons-material/Add'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UserCard from '../../components/UserCard'
import RecipeReviewCard from '../../components/Card'
import {
  allergiesOptions,
  allergyIcons,
  difficultyOptions,
  typeOptions,
} from '../../common/constants'
import * as S from './styles'
import type { Props } from './types'
import useLogic from './logic'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const {
    allergies,
    currentUser,
    difficultys,
    handleAllergiesChange,
    handleDifficultysChange,
    handleGoToPost,
    handleRemovePost,
    handleTypeChange,
    posts,
    users,
    types,
  } = useLogic()

  return (
    <S.Container>
      <Header onLogout={onLogout} />
      <S.ButtonController>
        <S.IconButtonStyled
          onClick={handleGoToPost}
          color="primary"
          aria-label="add new post"
        >
          <AddIcon fontSize="medium" style={{ color: 'black' }} /> {}
        </S.IconButtonStyled>
      </S.ButtonController>
      <S.Cards>
        {posts?.map((post) => (
          <RecipeReviewCard
            key={post._id}
            post={post}
            isCurrentUserCreator={currentUser?._id === post.userId}
            onRemove={handleRemovePost}
          />
        ))}
      </S.Cards>
      <S.ContainerFilters>
        <S.ContainerAllergies>
          <S.Typography> Allergies </S.Typography>
          {allergiesOptions.map((allergy) => (
            <S.AllergyOption key={allergy}>
              <S.StyledCheckbox
                checked={allergies.indexOf(allergy) > -1}
                onChange={(event) => handleAllergiesChange(event, allergy)}
              />
              <S.AllergyLabel>
                <S.AllergyIconContainer>
                  <S.AllergyIcon src={allergyIcons[allergy]} alt={allergy} />
                  {allergy}
                </S.AllergyIconContainer>
              </S.AllergyLabel>
            </S.AllergyOption>
          ))}
        </S.ContainerAllergies>
        <S.ContainerDifficulty>
          <S.Typography> Difficulty</S.Typography>
          {difficultyOptions.map((difficulty) => (
            <S.DifficultyOption key={difficulty}>
              <S.StyledCheckboxDifficulty
                checked={difficultys.indexOf(difficulty) > -1}
                onChange={(event) => handleDifficultysChange(event, difficulty)}
              />
              <S.DifficultyLabel>
                <S.DifficultyIconContainer>
                  {difficulty}
                </S.DifficultyIconContainer>
              </S.DifficultyLabel>
            </S.DifficultyOption>
          ))}
        </S.ContainerDifficulty>
        <S.ContainerType>
          <S.Typography> Type</S.Typography>
          {typeOptions.map((type) => (
            <S.TypeOption key={type}>
              <S.StyledCheckboxType
                checked={types.indexOf(type) > -1}
                onChange={(event) => handleTypeChange(event, type)}
              />
              <S.TypeLabel>
                <S.TypeIconContainer>{type}</S.TypeIconContainer>
              </S.TypeLabel>
            </S.TypeOption>
          ))}
        </S.ContainerType>
      </S.ContainerFilters>
      <S.ContainerUsers>
        <S.UserCards>
          {users?.map((user, index) => <UserCard key={index} user={user} />)}
        </S.UserCards>
        <S.ButtonStyled variant="contained" color="primary" onClick={() => {}}>
          See all{' '}
        </S.ButtonStyled>
      </S.ContainerUsers>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </S.Container>
  )
}

export default memo(Dashboard)
