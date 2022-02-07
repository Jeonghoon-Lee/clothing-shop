import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: SHOP_DATA,
  currentCollectionTitle: '',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.CHANGE_SHOP_COLLECTION:
      return {
        ...state,
        currentCollectionTitle: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
