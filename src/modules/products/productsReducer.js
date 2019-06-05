import {handleActions} from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    products: [],
    isLoading: false,
    isError: false,
    error: null
  }
};

export default handleActions({
  [actions.fetchLatest.start]: (state) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: true,
      isError: false,
      error: null
    }
  }),
  [actions.fetchLatest.success]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      products: state
        .latest
        .products
        .concat(action.payload)
    },
    user: action.payload
  }),
  [actions.fetchLatest.error]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      isError: true,
      error: action.payload
    }
  })
}, INITIAL_STATE);