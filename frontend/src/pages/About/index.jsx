/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import ReactGA from 'react-ga';

import ContributeModal from '../../components/ContributePopup/index';
import SubSubTitleText from '../../components/SubSubTitleText/index';
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
              A Scrum Book is available
              at <a href="https://www.amazon.com/Scrum-Book-Spirit-Game/dp/1680506714">here</a>.
            </Text>
            <SubTitleText title="Scrum">
              Scrum is about helping small teams create,
              build, and evolve a product, one slice at a time.
              Scrum is as much about people as it is about the
              products they build and use. It defines a work environment where teams can challenge
              themselves to become better and better at their work over time.
              Scrum is not a development method, but rather a product development framework.
              A method prescribes steps that transform a problem definition into a solution.
              Scrum, on the other hand, is a framework for the team to continuously evaluate
              its product and evolve it into a better solution.
            </SubTitleText>
            <SubTitleText title="Pattern">
              A pattern is a repeatably applicable solution to a
              problem that arises in a specific context.
              We share this fundamental view of the world, that says
              when you build something you must also repair and make
              better the world around it.
              The world at large then gradually improves,
              becomes more coherent and more Whole.
              A set of patterns that work together to this end is called a pattern language.
              Each pattern describes the context of those patterns
              that are prerequisites for the current one.
              And each pattern also advises us about what other
              patterns might further refine our Whole to
              help complete this one. These relationships, or
              connections, form a structure, a grammar, a language.
              This app presents two such languages:
              Product Organization, and Value Stream.
              <SubSubTitleText title="Product Organization">
                Builds the relationships between the people and teams in a Scrum organization.
              </SubSubTitleText>
              <SubSubTitleText title="Value Stream">
                Builds relationships between steps of product construction,
                and the artifacts that represent parts of the process.
              </SubSubTitleText>
            </SubTitleText>
          </Col>
          <Col xs={12} md={6} className="ps-md-5">
            <Title className="mb-4 mt-sm-0 mt-3"><img width="150px" height="auto" src="/logo.ico" alt="logo" /></Title>
            <Text>
              Credits to the authors of the book <i>A Scrum book: The Spirit of the Game</i>,
              in which this app was inspired, are in order.<br />
              <b>Book authors:</b><br />
              Jeff Sutherland,
              James O. Coplien,
              Lachlan Heasman,
              Mark den Hollander,
              Cesário Ramos <br />
              and <b>The Scrum Patterns Group</b>:
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
            <SubTitleText title="About us">
              <p>
                This app was developed in context of Large Scale Software Development,
                a discipline teached in the Master in Informatics and Computer Engineering of
                the Faculty of Engineering Univercity of Porto.
              </p>
              <p>
                The developers of the app were:
                Ana Teresa Cruz,
                André Nascimento,
                António  Bezerra,
                Breno Accioly,
                Catarina Fernandes,
                Daniel Gonçalves,
                Diogo Nunes,
                Gonçalo Alves,
                Inês Quarteu,
                Inês Silva,
                João Castro Pinto,
                João Romão,
                João Gonçalves,
                José Macedo,
                José Luís Sousa Tavares,
                André Assunção,
                Márcio Duarte,
                Mariana Truta,
                Mariana Ramos,
                Nuno Resende,
                Pedro Seixas,
                Rafael Cristino,
                Ricardo Nunes,
                Ricardo Carvalho,
                Rita Peixoto,
                Tiago Alves,
                Xavier Pisco
              </p>
            </SubTitleText>
            <Button className="contribute-button" onClick={openModal}>I want to contribute</Button>
            <ContributeModal show={showModal} onHide={() => setShowModal(false)} />
          </Col>
        </Row>
      </Layout>
    </Container>
  );
}
