import { connect } from 'react-redux';
import { setAdsItems } from '../../store/ads/action';
import Pagination from './PaginationComponens';

const mapStateToProps = ({ ads }) => ({
  items: ads.items,
});

const mapDispatchToProps = {
  setAdsItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
