import React from 'react'

import { Container } from './styles'

type Props = {
  onClick: () => void
  children: string
}

const Button = ({ onClick, children }: Props) => {
  return <Container onClick={onClick}>{children}</Container>
}

export default Button
