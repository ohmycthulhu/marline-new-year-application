import React from 'react';
import LoginPageView from "./LoginPageView";
import axios from 'axios';

interface LoginPageState {
  username: string,
  password: string,
  isLogged: boolean,
  isSendingRequest: boolean,
  loginError: string | null
}

export interface LoginPageProps {
  onLogin: (token: String | undefined) => void | undefined
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {

  state = {
    username: '',
    password: '',
    isLogged: false,
    isSendingRequest: false,
    loginError: null
  };

  constructor(props: LoginPageProps) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentDidMount(): void {
    this.checkLogin();
  }

  checkLogin(): void {
    this.setState({
      isSendingRequest: true
    });
    axios.get('/login').then(({ data: { status } }) => {
      this.setState({
        isSendingRequest: false,
        isLogged: status === 'success'
      });
      if (status === 'success') {
        this.props.onLogin(undefined);
      }
    }).catch((e) => {
      console.log('Error happened', e);
      this.setState({
        isSendingRequest: false
      })
    })
  }

  login(username: string, password: string): void {
    if (this.state.isSendingRequest) {
      return;
    }
    this.setState({
      isSendingRequest: true
    });
    axios.post('/login', {
      username,
      password
    }).then(response => {
      const { status, message, token } = response.data;
      this.setState({
        loginError: message,
        isLogged: status === 'success',
        isSendingRequest: false
      });
      if (status === 'success') {
        this.props.onLogin(token);
      }
    }).catch(e => {
      this.setState({
        isSendingRequest: true
      });
      console.log('There was an error - ', e);
    });
  }

  render(): React.ReactElement<any, any> {
    return (
      <LoginPageView
        onSubmit={this.login}
        error={this.state.loginError}
        loading={this.state.isSendingRequest}
      />
    )
  }
}

export default LoginPage;

