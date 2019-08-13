import { connect } from 'react-redux';
import ListAds from './ListAds.component';

const mapStateToProps = ({ ads }) => ({
  items: ads.items,
});

export default connect(
  mapStateToProps,
)(ListAds);
