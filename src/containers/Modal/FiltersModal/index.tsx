import { FC, memo, useCallback, useState } from 'react'
import { Button } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import Filters from '../../../components/Filters'
import { Container, Content, ModalContainer } from './styles'
import type { Props } from './types'
import type { FiltersFormFields } from '../../../models/Post'

const FiltersModal: FC<Props> = ({ onSubmit, onReset, className }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  const handleOnSubmit = useCallback(
    (values: FiltersFormFields) => {
      onSubmit(values)
      handleClose()
    },
    [onSubmit]
  )

  const handleOnReset = useCallback(() => {
    onReset()
    handleClose()
  }, [onReset])

  return (
    <Container className={className}>
      <Button variant="text" onClick={handleOpen}>
        Filters <FilterListIcon />
      </Button>
      <ModalContainer open={openModal} onClose={handleClose}>
        <Content>
          <Filters onReset={handleOnReset} onSubmit={handleOnSubmit} />
        </Content>
      </ModalContainer>
    </Container>
  )
}

export default memo(FiltersModal)
