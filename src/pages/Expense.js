import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Table, Button } from 'react-bootstrap'

class Expense extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Row>
        <Col className="col-lg-12 mb-4">
          <Card>
            <Card.Body>
              <Card.Text>Total Pengeluaran : Rp. 18.000,00</Card.Text>
              <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Jumlah</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                  {this.props.expense.length > 0 ? this.props.expense.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.date}</td>
                        <td>{value.amount}</td>
                        <td>{value.desc}</td>
                      </tr>
                    )
                  }) : (<tr><td className="text-center" colSpan="3">Belum ada pengeluaran.</td></tr>) }
                </tbody>
              </Table>
              <Button variant="success" size="sm" block>Tambah Pengeluaran</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expense: state.wallet.expense
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
