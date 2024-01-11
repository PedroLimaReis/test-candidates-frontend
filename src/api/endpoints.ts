import { api } from './api'

type Candidate = {
  name: string
  skills: string[]
}

export const registerCandidate = (candidate: Candidate) => {
  return api.post('/candidates', candidate)
}

export const getBestCandidateBySkills = (skills: string[]) => {
  return api.get(`/candidates/search?skills=${skills.join(',')}`)
}
