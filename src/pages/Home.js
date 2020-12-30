import React from 'react'
import { Row, Col, Card, Badge, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rupiah } from '../utils'
import { ENDPOINT_URL } from '../constants/url'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalSaldo: (this.props.incomeTotal + this.props.debtTotal) - (this.props.receivableTotal + this.props.expenseTotal),
    }
  }

  openInExternal() {
    liff.openWindow({
      url: ENDPOINT_URL,
      external: true
    })
  }

  render() {
    return (
      <Row className={this.props.liffData.isInClient ? '': 'mt-4'}>
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
        <Col className="col-lg-6">
          <Card>
            <Card.Img variant="top" src={this.props.user.pictureUrl}></Card.Img>
            <Card.Body>
              <Card.Text className="text-center">
                Halo, {this.props.user.displayName} <br/>
                <b>Saldo Anda : {rupiah(this.state.totalSaldo, 0, true)} </b><br/>
                <i>Kurangi belanja yang tidak perlu, belajarlah hemat atau gunakan untuk investasi masa depan.</i> <br/>
                {this.props.liffData.isInClient ? 
                  <Button variant="primary" size="sm" block onClick={() => this.openInExternal()} className="mt-2">Open in external browser</Button>
                  :
                  <Button variant="danger" size="sm" block onClick={() => this.props.removeUser()} className="mt-2">Logout</Button>
                }
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
    liffData: state.liffdata,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch({ type: 'REMOVE_USER' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
