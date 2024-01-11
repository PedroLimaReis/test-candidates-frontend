import { Container } from '../styles/pages/home'
import RegisterCandidate from '../components/RegisterCandidate'
import SearchCandidate from '../components/SearchCandidate'

export default function Home() {
  return (
    <Container>
      <RegisterCandidate />
      <SearchCandidate />
    </Container>
  )
}
