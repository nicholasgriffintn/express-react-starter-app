import React from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { setAuthStatus, login } from '../../store/actions/session';
import { bindActionCreators } from 'redux';
import ErrorMessage from './ErrorMessage';

const LoginForm = ({
  classes,
  logoText,
  login,
  handleInputChange,
  inputs,
  setAuthStatus,
  error,
}) => (
  <div className="auth_main">
    <div className="auth_card">
      <div className="auth_title">
        <h2>{logoText}</h2>
      </div>
      <ErrorMessage errorMessage={error} />
      <form
        className="auth_form"
        onSubmit={(e) => {
          e.preventDefault();
          login(inputs.username, inputs.password);
        }}
      >
        <div className="auth_form_wrap">
          <div className="auth_form_input">
            <input
              required
              id="username"
              name="username"
              label="Username"
              value={inputs.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="auth_form_input">
            <input
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              value={inputs.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="auth_card_actions">
            <button className="btn btn-primary btn-full" type="submit">
              Login
            </button>
          </div>
          <div className="auth_card_actions">
            <button
              className="btn btn-secondary btn-full"
              type="button"
              onClick={() => setAuthStatus('forgotPassword')}
            >
              Forgot your password?
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  error: state.session.error,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthStatus: bindActionCreators(setAuthStatus, dispatch),
  login: bindActionCreators(login, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      inputs: {
        username: '',
        password: '',
      },
    },
    {
      handleInputChange:
        ({ inputs }) =>
        (e) => ({
          inputs: {
            ...inputs,
            [e.target.name]: e.target.value,
          },
        }),
    }
  )
)(LoginForm);
