import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import LatestListView from './LatestListView';
import {productsOperations, productsSelectors} from '../../modules/products';

const mapStateToProps = state => ({
  products: productsSelectors.getLatest(state),
  isLoading: state.products.latest.isLoading
});

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps), lifecycle({
  componentDidMount() {
    if (this.props.products.length === 0) {
      this
        .props
        .fetchLatest();
    }
  }
}));

export default enhancer(LatestListView);