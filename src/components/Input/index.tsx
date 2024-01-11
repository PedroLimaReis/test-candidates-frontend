import React from 'react'

import { Container, Label, InputText } from './styles'

type Props = {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
}

const Input = ({ label, name, value, onChange }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  )
}

export default Input
