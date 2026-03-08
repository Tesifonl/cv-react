import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

function ProjectCard({ title, description, link, tags }) {
  const [showMore, setShowMore] = useState(false)

  const shortText =
    description.length > 100
      ? `${description.slice(0, 100)}...`
      : description

  const getBadgeVariant = (tag) => {
    switch (tag.toLowerCase()) {
      case 'react':
        return 'primary'
      case 'javascript':
        return 'secondary'
      case 'bootstrap':
        return 'success'
      case 'react router':
        return 'info'
      case 'dom':
        return 'warning'
      case 'localstorage':
        return 'dark'
      case 'html':
        return 'danger'
      case 'css':
        return 'info'
      default:
        return 'secondary'
    }
  }

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text>
          {showMore ? description : shortText}
        </Card.Text>

        <div className="mb-3">
          {tags.map((tag, index) => (
            <Badge
              bg={getBadgeVariant(tag)}
              className="me-2"
              key={index}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto d-flex gap-2">
          <Button
            variant="outline-secondary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Ver menos' : 'Ver más'}
          </Button>

          <Button variant="dark" href={link} target="_blank">
            GitHub / Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard