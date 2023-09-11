import { FC, memo } from 'react'
import { Form, Formik, FieldArray, FieldArrayRenderProps } from 'formik'
import {
  allergiesOptions,
  allergyIcons,
  difficultyOptions,
  typeOptions,
} from '../../common/constants'
import { ValidationSchema } from './constants'
import useLogic from './logic'
import * as S from './styles'
import type { Props } from './types'

const Filters: FC<Props> = ({ onSubmit }) => {
  const { initialValues } = useLogic()
  return (
    <S.ContainerFilters>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <S.ContainerAllergies>
              <S.Typography> Allergies To Exclude</S.Typography>
              <FieldArray
                name="allergies"
                render={(arrayHelpers: FieldArrayRenderProps) =>
                  allergiesOptions.map((allergy, index) => (
                    <S.AllergyOption key={allergy}>
                      <S.StyledCheckbox
                        name="allergies"
                        value={allergy}
                        onChange={(e) => {
                          if (e.target.checked) {
                            arrayHelpers.push(allergy)
                          } else {
                            arrayHelpers.remove(index)
                          }
                        }}
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
                  ))
                }
              />
            </S.ContainerAllergies>
            <S.ContainerDifficulty>
              <S.Typography> Difficulty</S.Typography>
              <FieldArray
                name="difficulty"
                render={(arrayHelpers: FieldArrayRenderProps) =>
                  difficultyOptions.map((difficulty, index) => (
                    <S.DifficultyOption key={difficulty}>
                      <S.StyledCheckbox
                        name="difficulty"
                        value={difficulty}
                        onChange={(e) => {
                          if (e.target.checked) {
                            arrayHelpers.push(difficulty)
                          } else {
                            arrayHelpers.remove(index)
                          }
                        }}
                      />
                      <S.DifficultyLabel>
                        <S.DifficultyIconContainer>
                          {difficulty}
                        </S.DifficultyIconContainer>
                      </S.DifficultyLabel>
                    </S.DifficultyOption>
                  ))
                }
              />
            </S.ContainerDifficulty>
            <S.ContainerType>
              <S.Typography> Type</S.Typography>
              <FieldArray
                name="type"
                render={(arrayHelpers: FieldArrayRenderProps) =>
                  typeOptions.map((type, index) => (
                    <S.TypeOption key={type}>
                      <S.StyledCheckbox
                        name="type"
                        value={type}
                        onChange={(e) => {
                          if (e.target.checked) {
                            arrayHelpers.push(type)
                          } else {
                            arrayHelpers.remove(index)
                          }
                        }}
                      />
                      <S.TypeLabel>
                        <S.TypeIconContainer>{type}</S.TypeIconContainer>
                      </S.TypeLabel>
                    </S.TypeOption>
                  ))
                }
              />
            </S.ContainerType>
            <S.ButtonStyle type="submit" variant="contained" color="primary">
              Apply
            </S.ButtonStyle>
            <S.ButtonStyle type="button" variant="contained" color="primary">
              Clean
            </S.ButtonStyle>
          </Form>
        )}
      </Formik>
    </S.ContainerFilters>
  )
}
export default memo(Filters)
