import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'

class Home extends React.Component {
  render() {
    return (
      <Row>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Pemasukan <br></br>
              <Badge variant="success">Rp. 5.000.000,00</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Saldo Anda <br></br>
              <Badge variant="primary">Rp. 17.000,00</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Hutang <br></br>
              <Badge variant="warning" className="text-gray">Rp. 126.000,00</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Pengeluaran <br></br>
              <Badge variant="danger">Rp. 26.000,00</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Home;
