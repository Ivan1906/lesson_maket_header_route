import {connect} from 'react-redux'
import {compose, withHandlers, withStateHandlers} from 'recompose';
import {withRouter} from 'react-router-dom';
import {authOperations} from '../../modules/auth';
import LoginView from './LoginView';
import {routes} from '../router';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading});

const mapDispatchToProps = {
  login: authOperations.login
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withStateHandlers({
  fields: {
    email: '',
    password: ''
  }
}, {
  handleFieldChange: (state) => (fieldName, value) => ({
    ...state,
    fields: {
      ...state.fields,
      [fieldName]: value
    }
  })
}), withHandlers({
  handleLogin: props => async() => {
    await props.login(props.fields);
    props
      .history
      .push(routes.home);
  }
}));

export default enhance(LoginView);