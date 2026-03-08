import { Container } from 'react-bootstrap'
import ExperienceItem from '../components/ExperienceItem'
import experienceData from '../data/experience.json'

function ExperiencePage() {
  return (
    <Container className="py-4">
      <h2 className="mb-5">Experiencia</h2>

      <h4 className="text-uppercase text-muted mb-3">Educación</h4>
      {experienceData.education.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}

      <h4 className="text-uppercase text-muted mt-5 mb-3">
        Experiencia laboral
      </h4>
      {experienceData.experience.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </Container>
  )
}

export default ExperiencePage