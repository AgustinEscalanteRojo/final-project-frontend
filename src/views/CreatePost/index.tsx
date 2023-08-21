import React, { FC, memo, useState, ChangeEvent, FormEvent } from 'react'
import { PostContainer, Content } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import {
  SelectChangeEvent,
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

import { normalizePost, postResponse, PostInput } from '../../models/Post'

type Allergen =
  | 'Gluten'
  | 'Crustaceans'
  | 'Eggs'
  | 'Fish'
  | 'Peanuts'
  | 'Soy'
  | 'Dairy'
  | 'Nuts'
  | 'Celery'
  | 'Mustard'
  | 'Sesame'
  | 'Sulphites'
  | 'Lupins'
  | 'Mollusks'

const allergensList: Allergen[] = [
  'Celery',
  'Crustaceans',
  'Dairy',
  'Eggs',
  'Fish',
  'Gluten',
  'Lupins',
  'Mollusks',
  'Mustard',
  'Nuts',
  'Peanuts',
  'Sesame',
  'Soy',
  'Sulphites',
]

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
  const [formData, setFormData] = useState<PostInput>({
    _id: '',
    userId: '',
    mainImage: '',
    title: '',
    type: 'Salad',
    duration: '',
    difficulty: 'Easy',
    allergies: [],
    ingredients: [],
    diners: undefined,
    steps: [],
    createdAt: new Date(),
    order: 0,
  })

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSelectChange =
    (name: keyof PostInput) => (event: SelectChangeEvent) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: event.target.value,
      }))
    }

  const handleAllergenChange =
    (allergen: Allergen) => (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked
      setFormData((prevData) => ({
        ...prevData,
        allergies: isChecked
          ? [...prevData.allergies, allergen]
          : prevData.allergies.filter((a) => a !== allergen),
      }))
    }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Handle form submission, possibly using the normalized data
    const normalizedData = normalizePost(formData)
    // ...
  }


  const [steps, setSteps] = useState<string[]>([]);


  return (
    <PostContainer>
      <Header onLogout={onLogout} />

      <Content>
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ marginTop: '26px' }}
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
            required
            fullWidth
          />

          <FormControl fullWidth style={{ marginTop: '26px' }}>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={handleSelectChange('type')}
            >
              <MenuItem value="Salad">Salad</MenuItem>
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
            </Select>
          </FormControl>

          <TextField
            style={{ marginTop: '26px' }}
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            fullWidth
            multiline
            rows={5}
          />

          <TextField
            style={{ marginTop: '26px' }}
            label="Order"
            name="order"
            value={formData.order}
            onChange={handleFormChange}
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {numberOptions.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </TextField>

          <FormControl fullWidth style={{ marginTop: '26px' }}>
            <InputLabel>Difficulty</InputLabel>
            <Select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleSelectChange('difficulty')}
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
            value={formData.duration}
            onChange={handleFormChange}
            fullWidth
          />

          <FormControl
            fullWidth
            style={{ marginTop: '26px', marginBottom: '26px' }}
          >
            <Grid container spacing={2}>
              {allergensList.map((allergen) => (
                <Grid item xs={4} key={allergen}>
                  <FormControlLabel
                    control={
                      <>
                        <Checkbox
                          checked={formData.allergies.includes(allergen)}
                          onChange={handleAllergenChange(allergen)}
                        />
                        <img
                          src={allergyIcons[allergen]}
                          alt={`${allergen} icon`}
                          style={{ width: '30px', marginLeft: '2px' }}
                        />
                      </>
                    }
                    label={allergen}
                  />
                </Grid>
              ))}
            </Grid>
          </FormControl>

          <TextField
            label="Main Image URL"
            name="mainImage"
            value={formData.mainImage}
            onChange={handleFormChange}
            fullWidth
          />


          <Button
            type="submit"
            style={{ marginBottom: '96px', marginTop: '20px' }}
          >
            Post recipe
          </Button>
        </form>
      </Content>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </PostContainer>
  )
}

export default memo(CreatePost)
