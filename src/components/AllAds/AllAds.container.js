import { connect } from 'react-redux';
import { setAdsItems } from '../../store/ads/action';
import AllAds from './AllAds.component';

const mapStateToProps = ({ ads }) => ({
  items: ads.items,
});

const mapDispatchToProps = {
  setAdsItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllAds);
