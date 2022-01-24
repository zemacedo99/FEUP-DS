import React, { useState, useEffect } from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import ReactGA from 'react-ga';

import ContributeModal from '../../components/ContributePopup/index';
import SubTitleText from '../../components/SubTitleText/index';
import { Layout } from '../../style';
import { Title, Text, Container } from './style';

export default function About() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.title = 'About';
    ReactGA.pageview('/about');
  }, []);

  const openModal = () => {
    setShowModal(true);
    ReactGA.modalview('/about/contribute');
  };

  return (
    <Container>
      <Layout>
        <Row className="g-0 justify-content-between">
          <Col xs={12} md={6} className="pe-md-5">
            <Title className="mb-4">About</Title>
            <Text>
              This app is inspired in a book about
              Scrum - a simple but powerful way for people to work together.
            </Text>
            <SubTitleText title="Scrum">
              Scrum is about helping small teams create, build, and evolve a product,
              one slice at a time.
              The core of Scrum stands on twelve patterns that you can dive into in this app.
            </SubTitleText>
            <SubTitleText title="Pattern">
              What is a pattern? One simple definition is that a pattern is a
              repeatably applicable solution to a problem that arises in a specific context.
            </SubTitleText>
            <SubTitleText title="Pattern Languages">
              Describes a set of patterns you can use to build your Scrum Team
              and the other associations of people and loci of relationships that are common
              to Scrum practice.
              You build your organization and your process in parallel, each a little at a time,
              weaving together patterns from both pattern languages.
            </SubTitleText>
          </Col>
          <Col xs={12} md={6} className="ps-md-5">
            <Title className="mb-4 mt-sm-0 mt-3"><img width="150px" height="auto" src="/logo.ico" alt="logo" /></Title>
            <SubTitleText title="Product Organization">
              Builds the relationships between the people and teams in a Scrum organization.
            </SubTitleText>
            <SubTitleText title="Value Stream">
              Builds relationships between steps of product construction,
              and the artifacts that represent parts of the process.
            </SubTitleText>
            <SubTitleText title="About Us">
              <Text>
                <b>Developers:</b>
                <br />
                Jeff Sutherland,
                James O. Coplien,
                Lachlan Heasman,
                Mark den Hollander,
                Cesário Ramos
              </Text>
              <Text>
                <b>And The Scrum Patterns Group:</b>
                <br />
                Ademar Aguiar,
                Esther Vervloed,
                Neil Harrison,
                Kiro Harada,
                Joseph Yoder,
                June Kim,
                Alan O&apos;Callaghan,
                Mike Beedle,
                Gertrud Bjørnvig,
                Dina Friis,
                Ville Reijonen,
                Gabrielle Benefield,
                Jens Østergaard,
                Veli-Pekka Eloranta,
                Evan Leonard.
              </Text>
            </SubTitleText>
            <Button className="contribute-button" onClick={openModal}>I want to contribute</Button>
            <ContributeModal show={showModal} onHide={() => setShowModal(false)} />
          </Col>
        </Row>
      </Layout>
    </Container>
  );
}
