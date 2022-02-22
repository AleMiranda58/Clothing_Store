import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import Item from '../item/Item';
import './directory.scss';


const Directory = ({ sections }) => {

    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <Item key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);