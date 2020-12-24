import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap'

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    this.state = {
      date: today,
      amount: 0,
      desc: ''
    }
  }

  handleChange(event) {
    this.setState({ ...this.state, date: event.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tambah Pemasukan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicDate">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control name="date" type="date" onChange={() => this.setState({ ...this.state, date: event.target.value })} />
              <Form.Text className="text-muted">
                Jika kosong, otomatis memakai tanggal sekarang.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicAmount">
              <Form.Label>Jumlah</Form.Label>
              <Form.Control name="amount" type="number" onChange={() => this.setState({ ...this.state, amount: event.target.value })} />
              <Form.Text className="text-muted">
                Masukkan hanya angka, tanpa memakai titik ataupun koma.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicDesc">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control name="desc" as="textarea" rows={2} onChange={() => this.setState({ ...this.state, desc: event.target.value })} />
              <Form.Text className="text-muted">
                Tambahkan keterangan, misalnya <i>Gaji Bulanan</i>.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button onClick={() => this.handleSubmit()} className="mr-2">Tambah</Button>
          <Button onClick={this.props.onHide} variant="danger">Batal</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

class Income extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addModalShow: false
    }
  }

  getID() {
    var id;
    if (this.props.income.length === 0) {
      id = 1;
    } else {
      id = this.props.income[this.props.income.length - 1].id + 1;
    }
    return id;
  }

  handleSubmit(data) {
    this.props.addIncome({ id: this.getID(), ...data})
    this.setState({ addModalShow: false })
  }

  render() {
    return (
      <Row>
        <Col className="col-lg-12 mb-4">
          <Card>
            <Card.Body>
              <Card.Text>Total Pemasukan : Rp. 5.000.000,00</Card.Text>
              <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Jumlah</th>
                      <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                  {this.props.income.length > 0 ? this.props.income.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.date}</td>
                        <td>{value.amount}</td>
                        <td>{value.desc}</td>
                      </tr>
                    )
                  }) : (<tr><td className="text-center" colSpan="3">Belum ada pemasukan.</td></tr>) }
                </tbody>
              </Table>
              <Button variant="success" size="sm" block onClick={() => this.setState({ addModalShow: true})}>Tambah Pemasukan</Button>
            </Card.Body>
          </Card>
          <AddModal
            show={this.state.addModalShow}
            onHide={() => this.setState({ addModalShow: false })}
            onSubmit={this.handleSubmit.bind(this)}
          ></AddModal>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    income: state.income
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIncome: (data) => { 
      dispatch({ type: 'ADD_INCOME', data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Income);
