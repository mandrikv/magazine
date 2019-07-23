import {
  ADS_SET_ITEMS,
} from './types';

export const setAdsItems = items => ({
  type: ADS_SET_ITEMS,
  payload: items,
});
