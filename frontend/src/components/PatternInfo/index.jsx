import React, { useState, useEffect } from 'react';
import {
  Row, Col, Nav, Spinner,
} from 'react-bootstrap';
import { BsLink45Deg, BsAsterisk } from 'react-icons/bs';

import PropTypes from 'prop-types';

import Divider from '@mui/material/Divider';

import { PageTitle } from '../../style/GlobalStyle';
import PatternReview from '../PatternReview';
import ProgressiveImg from '../ProgressiveImage/index';
import RelatedCardList from '../RelatedCardList';
import {
  PatSection, PatParagraph,
  RelatedSection, Link, Confidence,
  OverrideBookmark, OverrideFavorite,
  ButtonsSection, CustomButton, NavLink,
} from './style';

export default function PatternInfo({
  id, title, languages, stars, image, problem, solution, relatedPatternsPO, relatedPatternsVS, link,
}) {
  const [conf, setConf] = useState([]);
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];
  const [graph, setGraph] = useState('');
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  const [src, { blur }] = ProgressiveImg(`../assets/patlet_${id}}.jpg`, image);

  const handleSelect = (eventKey) => setGraph(eventKey);

  useEffect(() => {
    const r = [];
    for (let i = 0; i < stars; i += 1) {
      r.push(<BsAsterisk size={15} key={i} className="ms-1" />);
    }
    setConf(r);
  }, []);

  useEffect(() => {
    if (relatedPatternsVS === null || relatedPatternsPO === null) return;
    setGraph(relatedPatternsVS.length > 0 ? 'VS' : 'PO');
  }, [relatedPatternsPO, relatedPatternsVS]);

  const getPatterns = () => (graph === 'VS' ? relatedPatternsVS : relatedPatternsPO);

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener('resize', resizeW); // Update the width on resize

    return () => window.removeEventListener('resize', resizeW);
  });

  return (
    <>
      <Row>
        <PageTitle>
          {title}
          <Confidence title="Confidence Level">
            { conf }
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
        </PageTitle>
        <Row className="d-flex justify-content-between">
          <Col className="col-12 col-md-6">
            { languages.map((el) => (<PatSection key={el}>{el}</PatSection>)) }
          </Col>
          <ButtonsSection style={{ maxWidth: 'fit-content' }}>
            <CustomButton>
              <OverrideFavorite patlet_id={id} setFavoriteIds={setFavoriteIds} />
            </CustomButton>
            <CustomButton>
              <OverrideBookmark patlet_id={id} setBookmarkIds={setBookmarkIds} />
            </CustomButton>
            <PatternReview patletId={id} deviceSize={deviceSize} />
          </ButtonsSection>
        </Row>
      </Row>
      <Row style={{ marginBottom: '8em' }}>
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
        <PatParagraph>
          {solution}
        </PatParagraph>
        {(!relatedPatternsPO || !relatedPatternsVS) ? (
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        )
          : (relatedPatternsPO.length > 0 || relatedPatternsVS.length > 0) && (
          <>
            <Divider variant="fullWidth" className="my-4" />
            <PatSection>
              Read Next
            </PatSection>
            {deviceSize < 768
              ? (
                <>
                  <Nav variant="pills" className="justify-content-center mt-3 mb-2" activeKey={graph} onSelect={handleSelect}>
                    {relatedPatternsVS.length > 0 && <Nav.Item><NavLink eventKey="VS">Value Stream</NavLink></Nav.Item>}
                    {relatedPatternsPO.length > 0 && <Nav.Item><NavLink eventKey="PO">Product Org.</NavLink></Nav.Item>}
                  </Nav>
                  <div>
                    <RelatedCardList className="my-component" patterns={getPatterns()} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
                  </div>
                </>
              )
              : (
                <>
                  {relatedPatternsPO.length > 0 && <RelatedSection className="mt-2">Product Organization</RelatedSection>}
                  <RelatedCardList className="my-component" patterns={relatedPatternsPO} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
                  {relatedPatternsVS.length > 0 && <RelatedSection className="mt-2">Value Stream</RelatedSection>}
                  <RelatedCardList className="my-component" patterns={relatedPatternsVS} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
                </>
              )}

          </>
          )}
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
  relatedPatternsPO: PropTypes.arrayOf(PropTypes.shape({})),
  relatedPatternsVS: PropTypes.arrayOf(PropTypes.shape({})),
  link: PropTypes.string.isRequired,
};

PatternInfo.defaultProps = {
  relatedPatternsPO: null,
  relatedPatternsVS: null,
};
