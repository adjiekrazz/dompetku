import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'

const About = (props) => {
    return (
        <Row className={props.liffData.isInClient ? '': 'mt-4'}>
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

const mapStateToProps = (state) => {
    return {
        liffData: state.liffdata
    }
}

export default connect(mapStateToProps)(About)