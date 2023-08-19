import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaqContainer, Content, Backgroundcolor } from './styles'
import type { Props } from './types'
import ImageBackground from '../../components/ImageBackground'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Faq: FC<Props> = ({ onLogout }) => {
  return (
    <FaqContainer>
      <Header onLogout={onLogout} />
      <Content>
        <Backgroundcolor />
        <div>
        <h1>FREQUENT QUESTIONS</h1>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                ¿Como puedo agregar mis recetas favoritas?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Debe ir al botón indicado a tal efecto para borrar su receta.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>¿Puedo eliminar mis recetas?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Debe ir al botón indicado a tal efecto para borrar su receta.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>¿Es gratis la aplicación?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutamente grtais el registro y funcionamiento de la misma.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>¿Puedo cambiar mi nombre de usuario?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              No es posible realizar dicha función.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>¿Puedo cambiar mi contraseña?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Debe dirigirse al apartado de configuración de su cuenta. 
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Content>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </FaqContainer>
  )
}

export default memo(Faq)
