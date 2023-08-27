import { FC, memo, useState, ChangeEvent, FormEvent } from 'react'
import { PostContainer, Content } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import celeryIcon from '../../icons/celeryAllergensIcon.png'
import crustaceansIcon from '../../icons/crustaceansAllergensIcon.png'
import dairyIcon from '../../icons/dairyAllergensIcon.png'
import eggsIcon from '../../icons/eggsAllergensIcon.png'
import fishIcon from '../../icons/fishAllergensIcon.png'
import glutenIcon from '../../icons/glutenAllergensIcon.png'
import lupinsIcon from '../../icons/lupinsAllergensIcon.png'
import mollusksIcon from '../../icons/mollusksAllergensIcon.png'
import mustardIcon from '../../icons/mustardAllergensIcon.png'
import nutsIcon from '../../icons/nutsinshellAllergensIcon.png'
import peanutsIcon from '../../icons/peanutsAllergensIcon.png'
import sesameIcon from '../../icons/sesameAllergensIcon.png'
import soyIcon from '../../icons/soyAllergensIcon.png'
import sulphitesIcon from '../../icons/sulfitesAllergensIcon.png'
import type { Props } from './types'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'
import useLogic from './logic'

const allergyIcons: Record<string, string> = {
  Celery: celeryIcon,
  Crustaceans: crustaceansIcon,
  Dairy: dairyIcon,
  Eggs: eggsIcon,
  Fish: fishIcon,
  Gluten: glutenIcon,
  Lupins: lupinsIcon,
  Mollusks: mollusksIcon,
  Mustard: mustardIcon,
  Nuts: nutsIcon,
  Peanuts: peanutsIcon,
  Sesame: sesameIcon,
  Soy: soyIcon,
  Sulphites: sulphitesIcon,
}

const numberOptions = Array.from({ length: 10 }, (_, index) => index + 1)

const CreatePost: FC<Props> = ({ onLogout }) => {
  const { handleCreate } = useLogic()

  const allergiesOptions = [
    'Gluten',
    'Crustaceans',
    'Eggs',
    'Fish',
    'Peanuts',
    'Soy',
    'Dairy',
    'Nuts',
    'Celery',
    'Mustard',
    'Sesame',
    'Sulphites',
    'Lupins',
    'Mollusks',
  ]

  const unityOptions = [
    'Liter',
    'Milliliters',
    'Kilograms',
    'Grams',
    'Pound',
    'Ounce',
    'Tablespoon',
    'Tablespoon dessert',
  ]
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
            <form onSubmit={handleSubmit}>
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
                  style={{ marginTop: '16px', color: 'green' }}
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
                              gap: '10px', // Agregamos espacio entre el nombre y el icono
                            }}
                          >
                            <img
                              src={allergyIcons[allergy]}
                              alt={`${allergy} Icon`}
                              style={{
                                width: '10%',
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
                style={{ marginBottom: '96px', marginTop: '20px' }}
                onClick={() => handleCreate(values)}
              >
                Post recipe
              </Button>
            </form>
          )}
        </Formik>
      </Content>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </PostContainer>
  )
}

export default memo(CreatePost)
