import * as actions from './productsActions';
import Api from '../../api';

export function fetchLatest() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api
        .Products
        .getLatest();

      dispatch(actions.fetchLatest.success(res.data));
    } catch (error) {
      console.error(error);
      dispatch(actions.fetchLatest.error({message: error.message}));
    }
  }
}