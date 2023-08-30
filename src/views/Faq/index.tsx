import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FaqContainer, Content, Backgroundcolor, Tittle } from './styles'
import type { Props } from './types'

const Faq: FC<Props> = ({ onLogout }) => {
  return (
    <FaqContainer>
      <Header onLogout={onLogout} />
      <Content>
        <div>
          <Tittle>How can we help you?</Tittle>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <Typography>Main question 1 content</Typography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1b-content"
                  id="panel1b-header"
                >
                  <Typography>Subquestion 1.1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <Typography>Subquestion 1.1 content</Typography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel1a-header"
            >
              <Typography>Question 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <Typography>Main question 2 content</Typography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2b-content"
                  id="panel1b-header"
                >
                  <Typography>Subquestion 2.1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <Typography>Subquestion 2.1 content</Typography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel1a-header"
            >
              <Typography>Question 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <Typography>Main question 3 content</Typography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3b-content"
                  id="panel1b-header"
                >
                  <Typography>Subquestion 3.1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <Typography>Subquestion 3.1 content</Typography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel1a-header"
            >
              <Typography>Question 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <Typography>Main question 4 content</Typography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4b-content"
                  id="panel1b-header"
                >
                  <Typography>Subquestion 4.1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <Typography>Subquestion 4.1 content</Typography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <Typography>Main question 5 content</Typography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5b-content"
                  id="panel1b-header"
                >
                  <Typography>Subquestion 5.1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <Typography>Subquestion 5.1 content</Typography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <Typography>Main question 6 content</Typography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6b-content"
                  id="panel1b-header"
                >
                  <Typography>Subquestion 6.1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <Typography>Subquestion 6.1 content</Typography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>
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
