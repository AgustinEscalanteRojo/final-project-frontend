import { FC, memo } from 'react'
import { Formik, Form } from 'formik'
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import {
  allergyIcons,
  unityOptions,
  allergiesOptions,
} from '../../common/constants'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import { InitialValues, ValidationSchema } from './constants'
import useLogic from './logic'
import { PostContainer, Content, TextField } from './styles'
import type { Props } from './types'

const CreatePost: FC<Props> = ({ onLogout }) => {
  const { handleCreate } = useLogic()

  return (
    <PostContainer>
      <Header onLogout={onLogout} />
      <Content>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleCreate}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form
              onSubmit={handleSubmit}
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              <TextField
                style={{ marginTop: '26px' }}
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                style={{ marginTop: '26px' }}
                label="Diners"
                name="diners"
                value={values.diners}
                onChange={handleChange}
                required
                fullWidth
              />

              <FormControl fullWidth style={{ marginTop: '26px' }}>
                <InputLabel>Type</InputLabel>
                <Select name="type" value={values.type} onChange={handleChange}>
                  <MenuItem value="Salad">Salad</MenuItem>
                  <MenuItem value="Breakfast">Breakfast</MenuItem>
                  <MenuItem value="Dessert">Dessert</MenuItem>
                </Select>
              </FormControl>

              <TextField
                style={{ marginTop: '26px' }}
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={5}
              />

              <FormControl fullWidth style={{ marginTop: '26px' }}>
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

              <TextField
                style={{ marginTop: '26px' }}
                label="Duration"
                name="duration"
                value={values.duration}
                onChange={handleChange}
                fullWidth
              />

              <FormControl fullWidth style={{ marginTop: '26px' }}>
                {values.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
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
                      <InputLabel></InputLabel>
                      <Select
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
                      </Select>
                    </FormControl>
                    <Button
                      variant="outlined"
                      style={{ marginTop: '16px', color: 'red' }}
                      onClick={() => {
                        const updatedIngredients = [...values.ingredients]
                        updatedIngredients.splice(index, 1)
                        handleChange({
                          target: {
                            name: 'ingredients',
                            value: updatedIngredients,
                          },
                        })
                      }}
                    >
                      x
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outlined"
                  style={{ color: 'green' }}
                  onClick={() => {
                    const updatedIngredients = [
                      ...values.ingredients,
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
                </Button>
              </FormControl>

              <FormControl
                fullWidth
                style={{ marginTop: '26px', marginBottom: '26px' }}
              >
                <Grid container spacing={2}>
                  {allergiesOptions.map((allergy) => (
                    <Grid item xs={4} key={allergy}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="allergies"
                            value={allergy}
                            onChange={handleChange}
                            checked={values.allergies.includes(allergy)}
                          />
                        }
                        label={
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <img
                              src={allergyIcons[allergy]}
                              alt={`${allergy} Icon`}
                              style={{
                                width: '25%',
                                marginLeft: '2px',
                              }}
                            />
                            {allergy}
                          </div>
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormControl>

              <FormControl fullWidth style={{ marginTop: '16px' }}>
                {values.steps.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginBottom: '16px',
                    }}
                  >
                    <TextField
                      label="Order"
                      type="number"
                      name={`steps[${index}].order`}
                      value={index + 1}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />

                    <TextField
                      placeholder="Title"
                      name={`steps[${index}].title`}
                      value={step.title}
                      onChange={handleChange}
                      required
                      fullWidth
                    />

                    <TextField
                      label="Description"
                      name={`steps[${index}].description`}
                      value={step.description}
                      onChange={handleChange}
                      required
                      fullWidth
                    />

                    <Button
                      variant="outlined"
                      style={{ color: 'red' }}
                      onClick={() => {
                        const updatedSteps = [...values.steps]
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
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outlined"
                  style={{ color: 'green' }}
                  onClick={() => {
                    const updatedSteps = [
                      ...values.steps,
                      { title: '', description: '', imageUrl: '' },
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
                </Button>
              </FormControl>

              <TextField
                style={{ marginTop: '26px' }}
                label="Main Image URL"
                name="mainImage"
                value={values.mainImage}
                onChange={handleChange}
                fullWidth
              />

              <Button
                type="submit"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  backgroundColor: 'green',
                  color: 'white',
                  marginBottom: '96px',
                  marginTop: '20px',
                }}
                onClick={() => handleCreate(values)}
              >
                Post recipe
              </Button>
            </Form>
          )}
        </Formik>
      </Content>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </PostContainer>
  )
}

export default memo(CreatePost)
