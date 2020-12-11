import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      console.log(this.state.liffID)
      this.initLiff()
    })
  }

  render(){
    if (this.state.errors.length === 0) {
      return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      );
    } else {
      return (
        <React.Fragment>
          {this.state.errors.map((value) => {
            <li>{value}</li>
          })}
        </React.Fragment>
      )
    }
  }
}

export default App