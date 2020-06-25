import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faqContent } from '../../data/dataStore';
import styles from './faq.scss';

const Faq = () => (
  <Container>
    <Hero titleText={faqContent.title} image={faqContent.defaultImage}/>
    <p>{faqContent.description}</p>
    {Object.keys(faqContent.qa).map((item) => {
      return (
        <article className={styles.article} key={item}>
          <p className={styles.question}>{faqContent.qa[item].question}</p>
          <p className={styles.answer}>{faqContent.qa[item].answer}</p>
        </article>
      );
    })}
  </Container>
);

export default Faq;
