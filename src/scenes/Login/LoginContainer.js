import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose';
import {withRouter} from 'react-router-dom';
import {authOperations} from '../../modules/auth';
import LoginView from './LoginView';
import {routes} from '../router';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading, errorMessage: state.auth.login.error});

const mapDispatchToProps = {
  login: authOperations.login
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withState('initialValue', 'ChangeInitialValue', {
  email: '',
  password: ''
}), withState('disabledBtn', 'changeDisabledBtn', false), withHandlers({
  setInitialValue: ({ChangeInitialValue, initialValue, changeDisabledBtn, disabledBtn}) => (name, value, errors) => {
    ChangeInitialValue(() => ({
      ...initialValue,
      [name]: value
    }));

    let {password} = ({
      ...initialValue,
      [name]: value
    });

    if (password !== '' && !errors.email) {
      changeDisabledBtn(() => disabledBtn = true);
    } else {
      changeDisabledBtn(() => disabledBtn = false);
    }
  },
  handleLogin: ({history, login, initialValue}) => async() => {
    await login(initialValue);
    history.push(routes.home);
  }
}));

export default enhance(LoginView);