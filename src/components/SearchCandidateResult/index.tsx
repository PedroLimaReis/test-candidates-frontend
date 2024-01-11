import React from 'react'

import { Container, Title, Name, Skills } from './styles'

type Props = {
  name: string
  skills: string[]
}

const SearchCandidateResult = ({ name, skills }: Props) => {
  return (
    <Container>
      <Title>CANDIDATO ENCONTRADO 🎉🎉</Title>

      <Name>Nome do Candidato: {name}</Name>
      <Skills>Skills: {skills.join(', ')}</Skills>
    </Container>
  )
}

export default SearchCandidateResult
