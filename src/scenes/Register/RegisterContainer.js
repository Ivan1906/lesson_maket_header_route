import {connect} from 'react-redux'
import {compose, withHandlers, withStateHandlers} from 'recompose';
import {withRouter} from 'react-router-dom';
import {authOperations} from '../../modules/auth';
import RegisterView from './RegisterView';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading});

const mapDispatchToProps = {
  register: authOperations.register
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withStateHandlers({
  fields: {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
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
  handleRegister: props => () => {
    props.register(props.fields);
  }
}));

export default enhance(RegisterView);