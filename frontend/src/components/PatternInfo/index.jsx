import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { BsLink45Deg, BsAsterisk } from 'react-icons/bs';

import PropTypes from 'prop-types';

import Divider from '@mui/material/Divider';

import ProgressiveImg from '../ProgressiveImage/index';
import RelatedCardList from '../RelatedCardList';
import {
  PatTitle, PatSection, PatParagraph,
  RelatedSection, Link, Confidence,
} from './style';

export default function PatternInfo({
  id, title, languages, stars, image, problem, solution, relatedList1, relatedList2, link,
}) {
  const rows = [];
  for (let i = 0; i < stars; i += 1) {
    rows.push(<BsAsterisk size={15} key={i} className="ms-1" />);
  }
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  const [src, { blur }] = ProgressiveImg(`../assets/patlet_${id}}.jpg`, image);
  return (
    <>
      <Row>
        <PatTitle>
          {title}
          <Confidence title="Confidence Level">
            { rows }
          </Confidence>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="scrumbook"
            title="Pattern Page on the Scrumbook"
          >
            <BsLink45Deg size={50} className="ps-2" />
          </Link>
        </PatTitle>
        { languages.map((el) => (<PatSection key={el}>{el}</PatSection>)) }
      </Row>
      <Row>
        <div className="d-flex justify-content-center">
          <img
            src={src}
            style={{
              maxWidth: '100%', maxHeight: '50vh', paddingTop: '2em', paddingBottom: '2em', borderRadius: '25px', filter: blur ? 'blur(20px)' : 'none', transition: blur ? 'none' : 'filter 0.3s ease-out',
            }}
            alt="pattern"
          />
        </div>
        <PatParagraph>
          {problem}
        </PatParagraph>
        <br />
        <PatParagraph><strong>Therefore:</strong></PatParagraph>
        <br />
        <PatParagraph className="mb-5">
          {solution}
        </PatParagraph>
        <Divider variant="fullWidth" />
        {(relatedList1.length > 0 || relatedList2.length > 0) && (
          <PatSection className="mt-5">
            Read Next
          </PatSection>
        )}
        {relatedList1.length > 0 && <RelatedSection className="mt-2">Product Organization</RelatedSection>}
        <RelatedCardList className="my-component" patterns={relatedList1} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
        {relatedList2.length > 0 && <RelatedSection className="mt-2">Value Stream</RelatedSection>}
        <RelatedCardList className="my-component" patterns={relatedList2} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
      </Row>
    </>
  );
}

PatternInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  stars: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  relatedList1: PropTypes.arrayOf(PropTypes.object).isRequired,
  relatedList2: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string.isRequired,
};
