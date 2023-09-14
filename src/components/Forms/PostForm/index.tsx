import { FC, memo } from 'react'
import { Form, Formik } from 'formik'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import {
  allergiesOptions,
  allergyIcons,
  unityOptions,
} from '../../../common/constants'
import { DefaultInitialValues, ValidationSchema } from './constants'
import * as S from './styles'
import {
  TextField,
  Title,
  FormContainer,
  FormControlStyle,
  FormControlIngredients,
  ButtonRemoveIngredient,
  ButtonAddIngredient,
  ButtonRemoveStep,
  ButtonAddStep,
  ButtonSaveRecipe,
  SelectIngredients,
  FormControlStep,
  Steps,
  StepsTitle,
  ContainerIcons,
  ImgIcons,
  FormAllergieslStyle,
  TypographyStyle,
  Container,
  ButtonContainer,
} from './styles'
import type { Props } from './types'

const PostForm: FC<Props> = ({ initialValues, onSubmit, formError }) => {
  const titleEdit = 'EDIT YOUR RECIPE'
  const titleCreate = 'CREATE YOUR NEW RECIPE'

  return (
    <Container>
      <Formik
        initialValues={initialValues || DefaultInitialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, isValid }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <FormContainer>
              <Title variant="h4" align="center" gutterBottom>
                {window.location.pathname === '/postform'
                  ? titleCreate
                  : titleEdit}
              </Title>
              <TextField
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors?.title}
              />
              {errors?.title && <S.InputError>{errors.title}</S.InputError>}
              <TextField
                label="Diners"
                name="diners"
                value={values.diners}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors?.diners}
              />
              {errors?.diners && <S.InputError>{errors.diners}</S.InputError>}
              <FormControlStyle>
                <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Select
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                  >
                    <MenuItem value="Salad">Salad</MenuItem>
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Dessert">Dessert</MenuItem>
                    <MenuItem value="Chinese">Chinese</MenuItem>
                    <MenuItem value="Japanese">Japanese</MenuItem>
                    <MenuItem value="Mediterranean">Mediterranean</MenuItem>
                    <MenuItem value="Thai">Thai</MenuItem>
                    <MenuItem value="American">American</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                  </Select>
                </FormControl>
              </FormControlStyle>
              <TextField
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={5}
              />
              <FormControlStyle>
                <FormControl fullWidth>
                  <InputLabel>Difficulty</InputLabel>
                  <Select
                    name="difficulty"
                    value={values.difficulty}
                    onChange={handleChange}
                  >
                    <MenuItem value="Easy">Easy</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </FormControlStyle>
              <TextField
                label="Duration in min"
                name="duration"
                value={values.duration}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {values.duration ? 'min' : ''}
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth>
                {(values?.ingredients || []).map((ingredient, index) => (
                  <FormControlIngredients key={index}>
                    <TextField
                      placeholder="Ingredients"
                      name={`ingredients[${index}].name`}
                      value={ingredient.name}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Quantity"
                      name={`ingredients[${index}].quantity`}
                      value={ingredient.quantity}
                      onChange={handleChange}
                      type="number"
                      required
                      fullWidth
                    />
                    <FormControl fullWidth>
                      <InputLabel id="gender-label">Unity</InputLabel>
                      <SelectIngredients
                        labelId="gender-label"
                        label="Unity"
                        name={`ingredients[${index}].unity`}
                        value={ingredient.unity}
                        onChange={handleChange}
                        required
                      >
                        {unityOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </SelectIngredients>
                    </FormControl>
                    <ButtonRemoveIngredient
                      variant="outlined"
                      onClick={() => {
                        const updatedIngredients = [
                          ...(values?.ingredients || []),
                        ]
                        updatedIngredients.splice(index, 1)
                        handleChange({
                          target: {
                            name: 'ingredients',
                            value: updatedIngredients,
                          },
                        })
                      }}
                    >
                      X
                    </ButtonRemoveIngredient>
                  </FormControlIngredients>
                ))}
                <ButtonAddIngredient
                  variant="outlined"
                  onClick={() => {
                    const updatedIngredients = [
                      ...(values?.ingredients || []),
                      { name: '', quantity: '', unity: unityOptions[0] },
                    ]
                    handleChange({
                      target: {
                        name: 'ingredients',
                        value: updatedIngredients,
                      },
                    })
                  }}
                >
                  Add Ingredient
                </ButtonAddIngredient>
              </FormControl>
              <FormAllergieslStyle>
                <TypographyStyle> Allergies </TypographyStyle>
                <FormControl fullWidth>
                  <Grid container spacing={2}>
                    {allergiesOptions.map((allergy) => (
                      <Grid item xs={6} key={allergy}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="allergies"
                              value={allergy}
                              onChange={handleChange}
                              checked={(values?.allergies || '').includes(
                                allergy
                              )}
                            />
                          }
                          label={
                            <ContainerIcons>
                              <ImgIcons
                                src={allergyIcons[allergy]}
                                alt={`${allergy} Icon`}
                              />
                              {allergy}
                            </ContainerIcons>
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormControl>
              </FormAllergieslStyle>
              <FormControlStep>
                <FormControl fullWidth>
                  {(values?.steps || []).map((step, index) => (
                    <Steps key={index}>
                      <TextField
                        label="Order"
                        type="number"
                        name={`steps[${index}].order`}
                        value={index + 1}
                        InputProps={{ readOnly: true }}
                        fullWidth
                      />
                      <StepsTitle
                        placeholder="Title"
                        name={`steps[${index}].title`}
                        value={step.title}
                        onChange={handleChange}
                        required
                        fullWidth
                      />
                      <StepsTitle
                        label="Description"
                        name={`steps[${index}].description`}
                        value={step.description}
                        onChange={handleChange}
                        required
                        fullWidth
                      />
                      <ButtonRemoveStep
                        variant="outlined"
                        onClick={() => {
                          const updatedSteps = [...(values?.steps || [])]
                          updatedSteps.splice(index, 1)
                          handleChange({
                            target: {
                              name: 'steps',
                              value: updatedSteps,
                            },
                          })
                        }}
                      >
                        Remove Step {index + 1}
                      </ButtonRemoveStep>
                    </Steps>
                  ))}
                  <ButtonAddStep
                    variant="outlined"
                    onClick={() => {
                      const currentSteps = [...(values?.steps || [])]
                      const lastOrder = currentSteps.pop()
                      const updatedSteps = [
                        ...(values?.steps || []),
                        {
                          title: '',
                          description: '',
                          order: (lastOrder?.order || 0) + 1,
                        },
                      ]
                      handleChange({
                        target: {
                          name: 'steps',
                          value: updatedSteps,
                        },
                      })
                    }}
                  >
                    Add Step
                  </ButtonAddStep>
                </FormControl>
              </FormControlStep>
              <TextField
                label="Main Image URL"
                name="mainImage"
                value={values.mainImage || ''}
                onChange={handleChange}
                fullWidth
              />
              {formError && <S.FormError>{formError}</S.FormError>}
              <ButtonContainer>
                <ButtonSaveRecipe type="submit" disabled={!isValid}>
                  Save recipe
                </ButtonSaveRecipe>
              </ButtonContainer>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(PostForm)
