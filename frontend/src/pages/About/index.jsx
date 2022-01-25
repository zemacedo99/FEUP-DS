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
            </Text>
            <SubTitleText title="Scrum">
              Scrum is not a development method, but rather a product development framework.
              A method prescribes steps that transform a problem definition into a solution.
              Scrum, on the other hand, is a framework for the team to continuously evaluate
              its product and evolve it into a better solution.
            </SubTitleText>
            <SubTitleText title="Pattern">
              A pattern is a repeatably applicable solution to a
              problem that arises in a specific context.
              A set of patterns that you can use to build your Scrum Team
              and the other associations of people and loci of relationships that are common
              to Scrum practice is called a pattern language.
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
              Diam diam est neque quam sapien proin.
              Amet pulvinar ipsum, aliquet nunc euismod.
              Dui faucibus fusce auctor non adipiscing eget.
              Sed feugiat suspendisse in amet massa, neque.
              Lorem nunc euismod nulla pellentesque fusce orci commodo et rutrum.
              Mattis nunc, in vestibulum mi faucibus amet, lectus.
              Ultrices lacus commodo netus odio pellentesque consequat pellentesque.
              Ut est malesuada nam lacus, aenean.
            </Text>
            <SubTitleText title="About Us">
              {/*
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
              */}
              Ana Teresa Feliciano da Cruz,
              André Filipe Meireles do Nascimento,
              António Cadilha da Cunha Bezerra,
              Breno Accioly de Barros Pimentel,
              Catarina Justo dos Santos Fernandes,
              Daniel da Silva Gonçalves,
              Diogo André Barbosa Nunes,
              Gonçalo Batalhao Alves,
              Inês Alves Quarteu,
              Inês Oliveira e Silva,
              João Castro Pinto,
              João Diogo Martins Romão,
              João Miguel Gomes Gonçalves,
              José António Dantas Macedo,
              José Luís Sousa Tavares,
              Luís André Santos Correia Assunção,
              Márcio Cláudio Silva Duarte,
              Mariana Almeida Truta,
              Mariana Oliveira Ramos,
              Nuno Filipe Ferreira de Sousa Resende,
              Pedro Jorge Fonseca Seixas,
              Rafael Valente Cristino,
              Ricardo Amaral Nunes,
              Ricardo Filipe da Silva Néri Marques Carvalho,
              Rita Matos Maranhao Peixoto,
              Tiago Alexandre Pinto de Faria Ferreira Alves,
              Xavier Ruivo Pisco
            </SubTitleText>
            <Button className="contribute-button" onClick={openModal}>I want to contribute</Button>
            <ContributeModal show={showModal} onHide={() => setShowModal(false)} />
          </Col>
        </Row>
      </Layout>
    </Container>
  );
}
