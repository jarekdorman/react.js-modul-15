import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { infoContent } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} image={infoContent.defaultImage} />
    <h2>Info</h2>
    <p>{infoContent.description}</p>
  </Container>
);

export default Info;
