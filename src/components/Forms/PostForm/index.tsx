import { FC, memo } from 'react'
import { Form, Formik } from 'formik'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
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
} from './styles'
import type { Props } from './types'

const PostForm: FC<Props> = ({ initialValues, onSubmit }) => {
  const titleEdit = 'Edit Your Recipe'
  const titleCreate = 'Create Your New Recipe'
  return (
    <Formik
      initialValues={initialValues || DefaultInitialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
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
            />
            <TextField
              label="Diners"
              name="diners"
              value={values.diners}
              onChange={handleChange}
              required
              fullWidth
            />
            <FormControlStyle>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select name="type" value={values.type} onChange={handleChange}>
                  <MenuItem value="Salad">Salad</MenuItem>
                  <MenuItem value="Breakfast">Breakfast</MenuItem>
                  <MenuItem value="Dessert">Dessert</MenuItem>
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
                  <MenuItem value="Moderate">Intermediate</MenuItem>
                  <MenuItem value="Difficult">Advanced</MenuItem>
                </Select>
              </FormControl>
            </FormControlStyle>
            <TextField
              label="Duration in min"
              name="duration"
              value={values.duration}
              onChange={handleChange}
              fullWidth
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
                    required
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <SelectIngredients
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
            <FormControlStyle>
              <FormControl fullWidth>
                <Grid container spacing={2}>
                  {allergiesOptions.map((allergy) => (
                    <Grid item xs={4} key={allergy}>
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
            </FormControlStyle>
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
                    const updatedSteps = [
                      ...(values?.steps || []),
                      { title: '', description: '' },
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
            <ButtonSaveRecipe type="submit">Save recipe</ButtonSaveRecipe>
          </FormContainer>
        </Form>
      )}
    </Formik>
  )
}

export default memo(PostForm)
