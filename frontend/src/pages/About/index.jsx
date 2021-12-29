import React, { useState } from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';

import ContributeModal from '../../components/ContributePopup/index';
import SubTitleText from '../../components/SubTitleText/index';
import { Layout } from '../../style';
import { Title, Text, Container } from './style';

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Layout>
        <Row className="g-0 justify-content-between">
          <Col xs={12} md={6} className="pe-md-5">
            <Title className="mb-4">About</Title>
            <Text>
              Orci, at metus viverra facilisis risus maecenas nunc enim.
              Varius eget suscipit cras magnis elit non molestie mattis.
              Risus dictum enim, egestas mauris.
            </Text>
            <SubTitleText title="Scrum">
              Diam diam est neque quam sapien proin.
              Amet pulvinar ipsum, aliquet nunc euismod.
              Dui faucibus fusce auctor non adipiscing eget.
              Sed feugiat suspendisse in amet massa, neque.
              Lorem nunc euismod nulla pellentesque fusce orci commodo et rutrum.
              Mattis nunc, in vestibulum mi faucibus amet, lectus.
              Ultrices lacus commodo netus odio pellentesque consequat pellentesque.
              Ut est malesuada nam lacus, aenean.
            </SubTitleText>
            <SubTitleText title="Pattern">
              Quis est ultricies sagittis nec.
              Risus massa dictumst commodo, ac.
              Eget id interdum habitasse neque vel pellentesque pharetra, malesuada tortor.
              Faucibus quam donec vitae condimentum tristique hac fermentum feugiat.
              Lacus, viverra diam elit integer fermentum penatibus quam.
              Neque proin varius ultrices interdum malesuada mauris diam, consectetur.
            </SubTitleText>
          </Col>
          <Col xs={12} md={6} className="ps-md-5">
            <Title className="mb-4 mt-sm-0 mt-3">Logo</Title>
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
              Quis est ultricies sagittis nec.
              Risus massa dictumst commodo, ac.
              Eget id interdum habitasse neque vel pellentesque pharetra, malesuada tortor.
              Faucibus quam donec vitae condimentum tristique hac fermentum feugiat.
              Lacus, viverra diam elit integer fermentum penatibus quam.
              Neque proin varius ultrices interdum malesuada mauris diam, consectetur.
            </SubTitleText>
            <Button className="contribute-button" onClick={() => { setShowModal(true); }}>I want to contribute</Button>
            <ContributeModal show={showModal} onHide={() => setShowModal(false)} />
          </Col>
        </Row>
      </Layout>
    </Container>
  );
}
