import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import liff from '@line/liff';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      liffID: '',
      liffData: {},
      errors: []
    }
  }

  initLiff() {
    if (!this.state.liffID) {
      this.setState({ errors: [...'Liff ID is empty']})
    } else {
      liff.init({ liffId: this.state.liffID}, 
        async () => {
          this.setState({
            liffData: {
              isInClient: await liff.isInClient(),
              language: await liff.getLanguage(),
              os: await liff.getOS(),
              isLogin: await liff.isLoggedIn()
            }
          })
        },
        (error) => {
          this.setState({ errors: [...error] })
        } 
      )
    }
  }

  componentDidMount() {
    this.setState({ liffID: process.env.RAZZLE_SECRET_CODE }, () => {
      this.initLiff()
    })
  }

  handleLogin() {
    liff.login()
  }

  render(){
    if (this.state.errors.length === 0) {
      if (this.state.liffData.isLogin) {
        return (
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
        );
      } else {
        return (
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Ops. Kamu harus login dulu nih. 
                  </Card.Text>
                  <Button variant="success" onClick={this.handleLogin}>Login</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      }
    } else {
      return (
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  {this.state.errors.map((value) => {
                    <li>{value}</li>
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
    }
  }
}

export default App