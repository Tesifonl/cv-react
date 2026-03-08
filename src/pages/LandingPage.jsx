import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap'
import profilePhoto from '../assets/foto-perfil.jpg'

function LandingPage() {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col md={7}>

          <h2 className="display-5 fw-bold">Hola, soy Tesifon</h2>
          <p className="lead">
            Tras mas de 20 años en el sector financiero, sigo fiel a una idea:
            nunca dejar de aprender. Actualmente me estoy formando en Desarrollo
            de Aplicaciones Web para seguir creciendo y explorando nuevas 
            oportunidades en el ambito tecnólogico.
          </p>

          <div className="d-flex gap-2 flex-wrap mb-3">
            <Button
              variant="dark"
              href="https://github.com/Tesifonl"
              target="_blank"
            >
              GitHub
            </Button>

            <Button
              variant="outline-dark"
              href="https://linkedin.com/in/tesifon-linares-bonilla-76a332379"
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              variant="outline-secondary"
              href="mailto:tesifonlinares@gmail.com"
            >
              Contacto
            </Button>
          </div>

        </Col>

        <Col md={5} className="text-center mt-4 mt-md-0">
          <img
            src={profilePhoto}
            alt="Foto de perfil"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '350px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <Row>
         <Col md={4} className="mt-3 mt-md-0">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Aprendizaje continuo</Card.Title>
              <Card.Text>
                Interés por seguir aprendiendo nuevas herramientas y tecnologías
                del desarrollo web.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mt-3 mt-md-0">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Conocimientos Finacieros</Card.Title>
              <Card.Text>
                Profesional con mas de 20 años de experiencia en diferentes areas del sector bancario
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mt-3 mt-md-0">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Analisis de Datos</Card.Title>
              <Card.Text>
                Adaptacion a nuevas herramientas y metodologias de trabajo enfocada al analisis de datos
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}

export default LandingPage