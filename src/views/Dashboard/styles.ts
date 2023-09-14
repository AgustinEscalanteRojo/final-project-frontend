import styled from 'styled-components'
import DefaultFilters from '../../components/Filters'
import DefaultTopChefs from './TopChefs'
import DefaultFiltersModal from '../../containers/Modal/FiltersModal'

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 130px 40px 0 40px;
  max-width: 2000px;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-flow: column;
  }
`

export const Posts = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 100px;
`

export const Filters = styled(DefaultFilters)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const TopChefs = styled(DefaultTopChefs)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const FiltersModal = styled(DefaultFiltersModal)`
  display: none;

  @media screen and (max-width: 768px) {
    display: inherit;
    margin-bottom: 16px;
  }
`
