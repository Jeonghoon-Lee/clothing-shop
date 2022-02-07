import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { changeShopCollection } from '../../redux/shop/shop.actions';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, changeCurrentCollection }) => {
  const { collectionId } = useParams();

  useEffect(() => {
    changeCurrentCollection(collectionId);
  }, [changeCurrentCollection, collectionId]);

  return (
    <div className='collection-page'>
      <h2 className='title'>{collection && collection.title.toUpperCase()}</h2>
      <div className='items'>
        {collection &&
          collection.items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  collection: selectCollection(state.shop.currentCollectionTitle)(state),
});

const mapDispatchToProps = dispatch => ({
  changeCurrentCollection: collectionTitle =>
    dispatch(changeShopCollection(collectionTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
