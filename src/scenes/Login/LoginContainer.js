import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose';
import {authOperations} from '../../modules/auth';
import LoginView from './LoginView';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading});

const mapDispatchToProps = {
  login: authOperations.login
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), withHandlers({
  handleLogin: props => () => {
    props.login();
  }
}));

export default enhance(LoginView);