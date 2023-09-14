import { FC, memo } from 'react'
import { Form, Formik } from 'formik'
import Select from '../Inputs/Select'
import { ValidationSchema } from './constants'
import useLogic from './logic'
import * as S from './styles'
import type { Props } from './types'
import {
  allergiesOptions,
  difficultyOptions,
  typeOptions,
} from '../../common/constants'

const Filters: FC<Props> = ({ onSubmit, onReset, className }) => {
  const { initialValues } = useLogic()

  return (
    <S.Container className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <S.InputContainer>
              <Select
                id="allergies"
                name="allergies"
                label="Allergies to exclude"
                options={allergiesOptions}
                isMulti
              />
            </S.InputContainer>
            <S.InputContainer>
              <Select
                id="difficulty"
                name="difficulty"
                label="Difficulty"
                options={difficultyOptions}
                isMulti
              />
            </S.InputContainer>
            <S.InputContainer>
              <Select
                id="type"
                name="type"
                label="Type"
                options={typeOptions}
                isMulti
              />
            </S.InputContainer>
            <S.ContainerButton>
              <S.ButtonStyle type="submit" variant="contained" color="primary">
                Apply
              </S.ButtonStyle>
              <S.ButtonStyle
                onClick={onReset}
                variant="outlined"
                color="primary"
              >
                Clean
              </S.ButtonStyle>
            </S.ContainerButton>
          </Form>
        )}
      </Formik>
    </S.Container>
  )
}

export default memo(Filters)
