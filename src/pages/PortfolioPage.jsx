import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import proyectoPrincipal from "../assets/proyecto1.jpg"

function PortfolioPage() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">PROYECTO PRINCIPAL</h2>

      <Card className="shadow-sm mb-5">
        <Row className="g-0">
          <Col md={6}>
            <Card.Img
              src={proyectoPrincipal}
              alt="Proyecto principal"
              className="border-end p-2"
            />
          </Col>

          <Col md={6}>
            <Card.Body>
              <Card.Title className="fs-3">Proyecto Modulo Grado Superior en Desarrollo de Aplicaciones Web</Card.Title>

              <Card.Text>
              Actualmente desarrollando el proyecto de aplicación web como trabajo de homologación  del proyecto final, en el marco del Grado Superio en Desarrollo de Aplicaciones Web, aplicando conocimientos de progracion, bases de datos y desarrollo web
              </Card.Text>

              <Button
                variant="dark"
                href="https://github.com/Tesifonl/FANSVOLEY.git"
                target="_blank"
              >
                Ver en GitHub
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <h3 className="mb-4">OTROS PROYECTOS</h3>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>SistemaMatriculacion_v6</Card.Title>
          <Card.Text>
           Aplicación desarrollada en java como parte de las tareas del modulo de Programación
          </Card.Text>
          <Button
            variant="outline-dark"
            href="https://github.com/Tesifonl/SistemaMatriculacion_v6.git"
            target="_blank"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

    </Container>
  )
}

export default PortfolioPage