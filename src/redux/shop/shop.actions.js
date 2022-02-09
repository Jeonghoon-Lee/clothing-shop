import ShopActionTypes from './shop.types';

export const changeShopCollection = collectionTitle => ({
  type: ShopActionTypes.CHANGE_SHOP_COLLECTION,
  payload: collectionTitle,
});

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
