import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  FaqContainer,
  Content,
  Backgroundcolor,
  Tittle,
  QuestionTitle,
  StyledTypography,
} from './styles'
import type { Props } from './types'

const Faq: FC<Props> = ({ onLogout }) => {
  return (
    <FaqContainer>
      <Header onLogout={onLogout} />
      <Content>
        <div>
          <Tittle>How can we help you?</Tittle>
          <StyledTypography>
            The following are the details of any questions you may have about
            our website.
          </StyledTypography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <QuestionTitle>Account information</QuestionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Backgroundcolor>
                <StyledTypography>
                  Below you will find information on how to create an account
                  for a user and how to log in.
                </StyledTypography>
              </Backgroundcolor>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1b-content"
                  id="panel1b-header"
                >
                  <StyledTypography>User registration</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To register as a user, you must enter the required fields:
                      email, password of at least 8 characters, username,
                      firstname, age, country and select gender. A brief
                      biography of the user can also be made. Once the
                      registration is done, you must go to the login section.{' '}
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <StyledTypography>User Login</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To log in as a user, you must enter the email with which
                      you have registered and the password with at least eight
                      characters.
                    </StyledTypography>
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
              <QuestionTitle>How ....</QuestionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1b-content"
                  id="panel1b-header"
                >
                  <StyledTypography>How do I create a recipe?</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To create a recipe, click on the "+" sign and you will be
                      redirected to the form.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <StyledTypography>
                    How do I publish a recipe?
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      In the form to create the recipe, you must fill in the
                      fields: title, diners, type, a description of the recipe,
                      difficulty, duration, ingredients that can be added with
                      their quantity and select the type of allergen. Then you
                      can add the steps of your recipe with a brief description.
                      Finally, add a photo of your dish. Once filled in, click
                      on the save recipe button to display your recipe on your
                      wall.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <StyledTypography>How can I delete recipes?</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To delete your recipes, go to your dashboard and click on
                      the trash can icon.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1e-content"
                  id="panel1e-header"
                >
                  <StyledTypography>
                    How can I edit a recipe that I have already published?
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To edit a published recipe, you must go to the recipe and
                      click on the pencil. You will be redirected to the form
                      and you will be able to add or edit the field you want.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1f-content"
                  id="panel1f-header"
                >
                  <StyledTypography>
                    How do I favorite a recipe?
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To favorite a recipe, you must click on the heart. When it
                      turns red, it has been saved as a favorite.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1f-content"
                  id="panel1f-header"
                >
                  <StyledTypography>How can I save a recipe?</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      To mark a recipe, click on the icon. When it turns blue,
                      it has been saved as a saved item.
                    </StyledTypography>
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
              <QuestionTitle>User profile</QuestionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1b-content"
                  id="panel1b-header"
                >
                  <StyledTypography>Followers/Following </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      In this section, we reflect the followers and following.
                      You can click on the side to follow or unfollow.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <StyledTypography>View my recipes </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      In this view, within your profile, all the recipes you
                      have published will be displayed.
                    </StyledTypography>
                  </Backgroundcolor>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <StyledTypography>View my favorites</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backgroundcolor>
                    <StyledTypography>
                      In this view, within your profile, all the recipes that
                      you have set as favorites will be displayed.
                    </StyledTypography>
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
