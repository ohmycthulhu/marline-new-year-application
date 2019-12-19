import React, { ChangeEvent } from 'react';
import '../styles/loginPage.css'

export interface LoginPageViewProps {
  onSubmit: (username: string, password: string) => void,
  error: string | null,
  loading: boolean
}

interface LoginPageViewState {
  username: string,
  password: string
}

class LoginPageView extends React.Component<LoginPageViewProps, LoginPageViewState> {

  public state = {
    password: '',
    username: ''
  };

  submit(): void {
    if (this.state.password && this.state.username) {
      this.props.onSubmit(this.state.username, this.state.password);
    }
  }

  getLoading(): React.ReactElement<any, any> {
    return (
      <img
        src={require('../assets/loading.gif')}
        alt='Loading'
      />
    )
  }

  render(): React.ReactElement<any, any> {
    const body = (
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="login-page-error">
          { this.props.error }
        </div>
        <div className='login-page-input-holder'>
          <input type="text"
                 placeholder='Username'
                 value={this.state.username}
                 required
                 onChange={(val: ChangeEvent<HTMLInputElement>) => this.setState({ username: val.currentTarget.value })}
          />
        </div>
        <div className='login-page-input-holder'>
          <input type="password"
                 placeholder='Password'
                 value={this.state.password}
                 required
                 onChange={(val: ChangeEvent<HTMLInputElement>) => this.setState({ password: val.currentTarget.value })}
          />
        </div>
        <div className='login-page-buttons'>
          <button
            type='submit'
            onClick={() => this.submit()}
          >
            Login
          </button>
        </div>
      </form>
    );
    return (
      <div className="login-page-holder">
        <div className='login-page-body'>
          { this.props.loading ? this.getLoading() : body }
        </div>
      </div>
    )
  }
}

export default LoginPageView;

