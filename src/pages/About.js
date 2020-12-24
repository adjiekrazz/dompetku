import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const About = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Text className="text-center">
                            <i>My Wallet 1.0</i> <br></br>
                            Aplikasi ini dibuat sebagai submission dalam kelas Line Frontend Framework
                            yang diadakan melalui plaftorm dicoding. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default About