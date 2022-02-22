import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import  CollectionPreview  from '../collectionPreview/CollectionPreview'
import { selectCollections } from '../../redux/shop/shop.selector'

import './collections-overview.scss'


const CollectionsOverView = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverView);