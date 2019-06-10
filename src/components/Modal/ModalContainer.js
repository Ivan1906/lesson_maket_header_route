import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose';
import {withRouter} from 'react-router-dom';
import ModalView from './ModalView';
import {routes} from '../router';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading});

const mapDispatchToProps = {};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withState('initialValue', 'ChangeInitialValue', {message: ''}), withState('disabledBtn', 'changeDisabledBtn', false), withHandlers({
  setInitialValue: ({ChangeInitialValue, initialValue, changeDisabledBtn, disabledBtn}) => (name, value) => {
    ChangeInitialValue(() => ({
      ...initialValue,
      [name]: value
    }));

    let {message} = ({
      ...initialValue,
      [name]: value
    });

    if (message !== '') {
      changeDisabledBtn(() => disabledBtn = true);
    } else {
      changeDisabledBtn(() => disabledBtn = false);
    }
  },
  back: ({history}) => e => {
    e.stopPropagation();
    history.goBack();
  },
  handleLogin: ({history, login, initialValue}) => async() => {
    //await login(initialValue);
    history.push(routes.home);
  }
}));

export default enhance(ModalView);