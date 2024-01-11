import React, { useCallback, useState } from 'react'

import { Container } from './styles'
import InputWithTags from '../InputWithTags'
import Button from '../Button'
import SearchCandidateResult from '../SearchCandidateResult'
import { client } from '@/src/api'

type Result = {
  name: string
  skills: string[]
}

const SearchCandidate = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = useCallback(async () => {
    setSkills([])
    setError(null)
    setResult(null)
    try {
      const response = await client.getBestCandidateBySkills(skills)

      setResult({ name: response.data.name, skills: response.data.skills })
    } catch (err) {
      setError(JSON.stringify(err))
    }
  }, [skills])

  return (
    <Container>
      <InputWithTags
        label="Adicionar nova habilidade"
        name="skillsToSearch"
        tags={skills}
        setTags={setSkills}
      />

      <Button onClick={handleSearch}>Buscar Candidato Ideal</Button>

      {error && (
        <span>
          Nenhum candidato compativel com as habilidades solicitadas foi
          encontrado
        </span>
      )}
      {result && (
        <SearchCandidateResult name={result.name} skills={result.skills} />
      )}
    </Container>
  )
}

export default SearchCandidate
