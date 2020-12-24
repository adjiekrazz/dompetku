import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rupiah } from '../utils'

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Row>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Pemasukan <br></br>
              <Badge variant="success">{rupiah(this.props.incomeTotal, 0, true)}</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Piutang <br></br>
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
              <Badge variant="danger">{rupiah(this.props.expenseTotal, 0, true)}</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-lg-12">
          <Card>
            <Card.Body>
              <Card.Text className="text-center">
                Saldo Anda : Rp. 20.000,00 <br></br>
                <i>Kurangi belanja yang tidak perlu, belajarlah hemat atau gunakan untuk investasi masa depan.</i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incomeTotal: state.income.length === 0 ? 0 : state.income.reduce((first, n) => Number(first.amount) + Number(n.amount)),
    expenseTotal: state.expense.length === 0 ? 0 : state.expense.reduce((first, n) => Number(first.amount) + Number(n.amount))
  }
}

export default connect(mapStateToProps)(Home);
