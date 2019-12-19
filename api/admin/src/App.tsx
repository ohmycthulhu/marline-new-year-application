import React from 'react';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import './App.css';
import axios from 'axios';
// @ts-ignore
import Cookies from 'js-cookie/src/js.cookie';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://192.168.1.13:3333';

axios.defaults.headers['TOKEN'] = Cookies.get('_token');

interface AppState {
  isLogged: boolean
}

export default class App extends React.Component<{}, AppState> {

  public state: Readonly<AppState> = {
    isLogged: false
  };

  public login(token: String | undefined) {
    if (token) {
      Cookies.set('_token', token);
      axios.defaults.headers['TOKEN'] = token;
    }
    this.setState({
      isLogged: true
    });
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const body = this.state.isLogged ? (
      <HomePage />
    ) : ( <LoginPage onLogin={(token) => this.login(token)} /> );
    return (
        <div className="App">
          { body }
        </div>
    );
  }
}
