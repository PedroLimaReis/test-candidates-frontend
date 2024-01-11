import React, { useCallback, useState } from 'react'

import { Container } from './styles'
import InputWithTags from '../InputWithTags'
import Input from '../Input'
import Button from '../Button'
import { client } from '@/src/api'
import RegisterCandidateResult from '../RegisterCandidateResult'

const RegisterCandidate = () => {
  const [name, setName] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const handleRegister = useCallback(async () => {
    setSkills([])
    setName('')
    setError(null)
    setResult(null)

    try {
      await client.registerCandidate({ name, skills })

      console.log(await client.registerCandidate({ name, skills }))
      setResult('true')
    } catch (err) {
      setError(JSON.stringify(err))
    }
  }, [name, skills])

  return (
    <Container>
      <Input
        label="Nome do candidato"
        name="nameToRegister"
        value={name}
        onChange={setName}
      />

      <InputWithTags
        label="Adicionar nova habilidade"
        name="skillToRegister"
        tags={skills}
        setTags={setSkills}
      />

      <Button onClick={handleRegister}>Cadastrar Candidatos</Button>

      {result && <RegisterCandidateResult />}
      {error && (
        <span>
          Não foi possivel cadastrar os candidatos, verifique as informações e
          tente novamente
        </span>
      )}
    </Container>
  )
}

export default RegisterCandidate
