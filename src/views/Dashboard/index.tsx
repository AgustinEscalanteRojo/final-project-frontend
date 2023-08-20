import { FC, memo, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import ImageBackground from '../../components/ImageBackground'
import type { Props } from './types'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Container, ButtonController } from './styles'
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const [allergies, setAlergies] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAlergies(event.target.value)
  }

  const handleGoToPost = useCallback(() => {
    navigate('/create-post')
  }, [navigate])
  
  return (
    <Container>
      <Header onLogout={onLogout} />
      <ButtonController>
        <Button onClick={handleGoToPost}>Add New Recipe</Button>
      </ButtonController>

      <Card />

      <div>
        <FormControl sx={{ ml: -130, mt: -85, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            ALLERGIES
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={allergies}
            onChange={handleChange}
            autoWidth
            label="Allergies"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem>Gluten</MenuItem>
            <MenuItem>Crustaceans</MenuItem>
            <MenuItem>Eggs</MenuItem>
            <MenuItem>Fish</MenuItem>
            <MenuItem>Peanuts</MenuItem>
            <MenuItem>Soy</MenuItem>
            <MenuItem>Dairy</MenuItem>
            <MenuItem>Nuts in shell</MenuItem>
            <MenuItem>Celery</MenuItem>
            <MenuItem>Mustard</MenuItem>
            <MenuItem>Sesame</MenuItem>
            <MenuItem>Sulphites</MenuItem>
            <MenuItem>Lupins</MenuItem>
            <MenuItem>Mollusks</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Dashboard)
