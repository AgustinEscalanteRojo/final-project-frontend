import { FC, memo, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import ImageBackground from '../../components/ImageBackground'
import type { Props } from './types'
import Card from '../../components/Card'
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
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

import { Container, ButtonController, ContainerAllergies } from './styles'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

const allergiesOptions = [
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

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [allergies, setAllergies] = React.useState<string[]>([])

  const handleAllergiesChange = (event: SelectChangeEvent<string[]>) => {
    setAllergies(event.target.value as string[])
  }

  const handleGoToPost = useCallback(() => {
    navigate('/create-post')
  }, [navigate])

  return (
    <Container>
      <Header onLogout={onLogout} />




      <ButtonController>
  <IconButton
    onClick={handleGoToPost}
    color="primary"
    aria-label="add new post"
    style={{
      border: '3px solid #b5803f',  
      borderRadius: '20%',            
      width: '60px',                 
      height: '60px',                 
    }}
  >
    <AddIcon fontSize="large" style={{ color: 'black' }} /> {/* Cambiar el color del símbolo a blanco */}
  </IconButton>
</ButtonController>





      <Card />

      <ContainerAllergies>
        <FormControl
          sx={{ minWidth: 220, marginLeft: '20px', backgroundColor: 'white' }}
        >
          <InputLabel id="allergies-label">ALLERGIES</InputLabel>
          <Select
            labelId="allergies-label"
            id="allergies-select"
            multiple
            value={allergies}
            onChange={handleAllergiesChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 400, // Ajusta la altura máxima según tus necesidades
                  width: 220, // Ajusta el ancho máximo según tus necesidades
                },
              },
            }}
          >
            {allergiesOptions.map((allergy) => (
              <MenuItem key={allergy} value={allergy}>
                <ListItemIcon>
                  <Checkbox checked={allergies.indexOf(allergy) > -1} />
                </ListItemIcon>
                <Box sx={{ width: 25, height: 25 }}>
                  <img
                    src={allergyIcons[allergy]}
                    alt={allergy}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Box>
                <ListItemText primary={allergy} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ContainerAllergies>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Dashboard)
