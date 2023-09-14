import { FC, memo } from 'react'
import { InputLabel, MenuItem } from '@mui/material'
import useLogic from './logic'
import { Container, MaterialSelect } from './styles'
import type { Props } from './types'

const Select: FC<Props> = ({
  name,
  id,
  className,
  label,
  options,
  isMulti,
}) => {
  const { value, handleChange } = useLogic(name)

  return (
    <Container className={className}>
      <InputLabel id={`${id}_${label}`}>{label}</InputLabel>
      <MaterialSelect
        labelId={`${id}_${label}`}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        label={label}
        multiple={isMulti}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MaterialSelect>
    </Container>
  )
}

export default memo(Select)
