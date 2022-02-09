import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  currentCollectionTitle: '',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.CHANGE_SHOP_COLLECTION:
      return {
        ...state,
        currentCollectionTitle: action.payload,
      };
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
