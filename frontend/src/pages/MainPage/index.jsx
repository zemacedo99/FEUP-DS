import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import infoIcon from '../../assets/infoIcon.svg';
import PatternCardList from '../../components/PatternCardList';
import { Layout, PageTitle } from '../../style';
import { AboutIcon, SubTitle } from './style';

export default function MainPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [patternsList, setPatterns] = useState([]);
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  useEffect(() => {
    setLoading(true);
    document.title = 'A Scrum Book';

    axios.get(`${process.env.REACT_APP_URL}/patterns`).then((res) => {
      setPatterns(res.data);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const navigateToHelp = () => {
    navigate('/about');
  };

  return (
    <Layout>
      <Row className="align-items-center">
        <Col>
          <PageTitle> Home </PageTitle>
        </Col>
        <Col className="d-flex justify-content-end pe-4">
          <AboutIcon onClick={() => navigateToHelp()} onKeyPress={() => navigateToHelp()} role="button" tabIndex={0}>
            <img src={infoIcon} width="30px" alt="info icon" title="Help" style={{ cursor: 'pointer' }} />
          </AboutIcon>
        </Col>
      </Row>
      <SubTitle> The core of Scrum </SubTitle>
      { loading ? (
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      )
        : (
          <PatternCardList
            patterns={patternsList}
            setFavoriteIds={setFavoriteIds}
            setBookmarkIds={setBookmarkIds}
          />
        )}
    </Layout>
  );
}
