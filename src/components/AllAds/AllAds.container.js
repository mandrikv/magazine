import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAdsItems } from '../../store/ads/action';
import AllAds from './AllAds.component';

const mapStateToProps = ({ ads }) => ({
  items: ads.items,
});

const mapDispatchToProps = {
  setAdsItems,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AllAds),
);
