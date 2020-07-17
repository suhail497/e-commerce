import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from "reselect"
import './directory.styles.scss';
import { connect } from "react-redux"
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { DirectoryMenuContainer } from './directory.styles';



const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
}


const mapStateToProps = createStructuredSelector(
  {
    sections: selectDirectorySections
  }
)


export default connect(mapStateToProps, null)(Directory);
