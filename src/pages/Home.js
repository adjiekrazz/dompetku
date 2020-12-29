import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rupiah } from '../utils'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalSaldo: (this.props.incomeTotal + this.props.debtTotal) - (this.props.receivableTotal + this.props.expenseTotal)
    }
  }

  componentDidMount() {

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
              <Badge variant="primary">{rupiah(this.props.receivableTotal, 0, true)}</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-6 col-lg-3 mb-4">
          <Card>
            <Card.Body>
              Hutang <br></br>
              <Badge variant="warning" className="text-gray">{rupiah(this.props.debtTotal, 0, true)}</Badge>
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
                Saldo Anda : {rupiah(this.state.totalSaldo, 0, true)} <br></br>
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
    incomeTotal: state.income.length === 0 ? 0 : state.income.reduce((val, n) => (val + Number(n.amount)), 0),
    expenseTotal: state.expense.length === 0 ? 0 : state.expense.reduce((val, n) => (val + Number(n.amount)), 0),
    debtTotal: state.debt.length === 0 ? 0 : state.debt.reduce((val, n) => (val + Number(n.amount)), 0),
    receivableTotal: state.receivable.length === 0 ? 0 : state.receivable.reduce((val, n) => (val + Number(n.amount)), 0),
  }
}

export default connect(mapStateToProps)(Home);
