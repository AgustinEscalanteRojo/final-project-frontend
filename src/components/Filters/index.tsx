import { FC, memo, useState } from 'react'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning'
import PublicIcon from '@mui/icons-material/Public'
import BarChartIcon from '@mui/icons-material/BarChart'
import RestaurantIcon from '@mui/icons-material/Restaurant'
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
import { ContainerButton } from './styles'
import { Grid } from '@mui/material'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Filters: FC<Props> = ({ onSubmit }) => {
  const { initialValues } = useLogic()
  const [openAllergies, setOpenAllergies] = useState(false)
  const [openDifficulty, setOpenDifficulty] = useState(false)
  const [openTypes, setOpenTypes] = useState(false)

  const handleOpenAllergies = () => {
    setOpenAllergies(true)
  }

  const handleCloseAllergies = () => {
    setOpenAllergies(false)
  }

  const handleOpenDifficulty = () => {
    setOpenDifficulty(true)
  }

  const handleCloseDifficulty = () => {
    setOpenDifficulty(false)
  }

  const handleOpenTypes = () => {
    setOpenTypes(true)
  }

  const handleCloseTypes = () => {
    setOpenTypes(false)
  }

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit} >
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
           
          >
          
            <Box 
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <IconButton
                onClick={handleOpenAllergies}
                disableRipple
                sx={{
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <WarningIcon />
                <Typography>Filter by Allergies</Typography>
              </IconButton>
              <IconButton
                onClick={handleOpenDifficulty}
                disableRipple
                style={{ marginRight: '140px', marginLeft: '130px' }}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <BarChartIcon />
                <Typography>Filter by Difficulty</Typography>
              </IconButton>
              <IconButton
                onClick={handleOpenTypes}
                disableRipple
                sx={{
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <RestaurantIcon />
                <Typography>Filter by Type</Typography>
              </IconButton>
            </Box>
          </Grid>
          <Dialog open={openAllergies} onClose={handleCloseAllergies}>
            <DialogContent sx={{ textAlign: 'center' }}>
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
            </DialogContent>
          </Dialog>
          <Dialog open={openDifficulty} onClose={handleCloseDifficulty}>
            <DialogContent sx={{ textAlign: 'center' }}>
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
            </DialogContent>
          </Dialog>
          <Dialog open={openTypes} onClose={handleCloseTypes}>
            <DialogContent sx={{ textAlign: 'center' }}>
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
            </DialogContent>
          </Dialog>
          <ContainerButton
          >
            <S.ButtonStyle type="submit" variant="contained" color="primary">
              Apply
            </S.ButtonStyle>
            <S.ButtonStyle type="button" variant="contained" color="primary">
              Clean
            </S.ButtonStyle>
          </ContainerButton>
        </Form>
      )}
    </Formik>
  )
}

export default memo(Filters)
