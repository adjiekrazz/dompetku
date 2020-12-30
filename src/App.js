import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import liff from '@line/liff';
import routes from './routes';
import { ENDPOINT_URL } from './constants/url'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: []
    }
  }

  initLiff() {
    if (!this.state.liffID) {
      this.setState({ errors: [...this.state.errors, 'Liff ID is empty']})
    } else {
      liff.init({ liffId: this.state.liffID}, 
        async () => {
          const data = await {
            isInClient: liff.isInClient(),
            language: liff.getLanguage(),
            os: liff.getOS(),
            isLogin: liff.isLoggedIn()
          }
          this.props.setLiffData(data)

          if (data.isInClient && !data.isLogin) {
            liff.login()
          }

          if (this.props.liffData.isLogin) {
            this.getProfile()
          }
        },
        (error) => {
          this.setState({ errors: [error] })
        } 
      )
    }
  }

  async getProfile() {
    const profile = await liff.getProfile()
    this.props.saveUserData(profile)
    return profile
  }

  componentDidMount() {
    this.setState({ liffID: process.env.RAZZLE_SECRET_CODE }, () => {
      this.initLiff()
    })
  }

  handleLogin() {
    liff.login()
  }

  openInExternal() {
    liff.openWindow({
      url: ENDPOINT_URL,
      external: true
    })
  }

  render(){
    if (this.state.errors.length === 0) {
      if (this.props.liffData.isLogin) {
        return (
          <Switch>
              {routes.map((route, i) => 
                <Route key={i} {...route}></Route>
              )}
          </Switch>
        );
      } else {
        return (
          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Selamat datang di <i>My Wallet</i>. <br/>
                    Nikmati kemudahan dalam pencatatan keuangan harian kamu.
                    Silahkan login dengan akun LINE kamu.
                  </Card.Text>
                  <Button variant="success" size="sm" block onClick={this.handleLogin}>Login</Button>
                </Card.Body>
              </Card>
              {this.props.liffData.isInClient ? () => {
                return (
                  <p className="mt-4 text-center">
                    <Link to="#" onClick={() => this.openInExternal() }>
                      Open in external browser
                    </Link>
                  </p>
                )
              } : '' }
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

const mapStateToProps = (state) => {
  return {
    liffData: state.liffdata,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLiffData: (data) => dispatch({ type: 'SET_LIFF_DATA', data }),
    saveUserData: (userdata) => dispatch({ type: 'SAVE_USER', userdata })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)