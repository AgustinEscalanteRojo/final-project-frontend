import { FC, memo, useState } from 'react'
import { Form, Formik } from 'formik'
import {
  allergiesOptions,
  allergyIcons,
  difficultyOptions,
  typeOptions,
} from '../../common/constants'
import useLogic from './logic'
import { DefaultInitialValues, ValidationSchema } from './constants'
import * as S from './styles'
import type { Props } from './types'
import { FiltersFormFields, Post } from '../../models/Post'
import { getPosts } from '../../services/api/post'

const Filters: FC<Props> = ({ initialValues, onSubmit }) => {
  const {
    allergies,
    difficultys,
    types,
    handleAllergiesChange,
    handleDifficultysChange,
    handleTypeChange,
  } = useLogic()

  const [posts, setPosts] = useState<Post[]>([])

  return (
    <S.ContainerFilters>
      <Formik
        initialValues={initialValues || DefaultInitialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <S.ContainerAllergies>
              <S.Typography> Allergies </S.Typography>
              {allergiesOptions.map((allergy) => (
                <S.AllergyOption key={allergy}>
                  <S.StyledCheckbox
                    checked={allergies.indexOf(allergy) > -1}
                    onChange={(event) => handleAllergiesChange(event, allergy)}
                    value={allergies}
                  />
                  <S.AllergyLabel>
                    <S.AllergyIconContainer>
                      <S.AllergyIcon
                        src={allergyIcons[allergy]}
                        alt={allergy}
                      />
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
                    value={difficulty}
                    checked={difficultys.indexOf(difficulty) > -1}
                    onChange={(event) =>
                      handleDifficultysChange(event, difficulty)
                    }
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
                    value={type}
                    checked={types.indexOf(type) > -1}
                    onChange={(event) => handleTypeChange(event, type)}
                  />
                  <S.TypeLabel>
                    <S.TypeIconContainer>{type}</S.TypeIconContainer>
                  </S.TypeLabel>
                </S.TypeOption>
              ))}
            </S.ContainerType>
            <S.ButtonStyle
              type="submit"
              variant="contained"
              color="primary"
              // onClick={handleFilter}
            >
              Filter by
            </S.ButtonStyle>
          </Form>
        )}
      </Formik>
    </S.ContainerFilters>
  )
}
export default memo(Filters)
