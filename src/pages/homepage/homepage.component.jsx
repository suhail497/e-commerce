import React from 'react';

import Directory from '../../components/directory/directory.component';


import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styled';

const textStyles = { color: 'red', fontSize: '24px' }


const HomePage = () => (

  <HomePageContainer>
    <Directory />
    <p style={textStyles} >
      hello
    </p>
  </HomePageContainer>
);

export default HomePage;
