import { ADS_SET_ITEMS } from './types';

const initialState = {
  items: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADS_SET_ITEMS: {
      return {
        ...state,
        items: payload,
      };
    }

    default: {
      return state;
    }
  }
}
