import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';

import SubTitleText from '../../components/SubTitleText/index';
import { Title, Text } from './style';

export default function HelpAboutUs() {
  return (
    <Container>
      <Row className="g-0 justify-content-between">
        <Col xs={12} md={6} className="pe-md-5">
          <Title className="mb-4">Help</Title>
          <Text>
            Orci, at metus viverra facilisis risus maecenas nunc enim.
            Varius eget suscipit cras magnis elit non molestie mattis.
            Risus dictum enim, egestas mauris.
          </Text>
          <SubTitleText title="Scrum" text="Diam diam est neque quam sapien proin. Amet pulvinar ipsum, aliquet nunc euismod. Dui faucibus fusce auctor non adipiscing eget. Sed feugiat suspendisse in amet massa, neque. Lorem nunc euismod nulla pellentesque fusce orci commodo et rutrum. Mattis nunc, in vestibulum mi faucibus amet, lectus. Ultrices lacus commodo netus odio pellentesque consequat pellentesque. Ut est malesuada nam lacus, aenean." />
          <SubTitleText title="Pattern" text="Quis est ultricies sagittis nec. Risus massa dictumst commodo, ac. Eget id interdum habitasse neque vel pellentesque pharetra, malesuada tortor. Faucibus quam donec vitae condimentum tristique hac fermentum feugiat. Lacus, viverra diam elit integer fermentum penatibus quam. Neque proin varius ultrices interdum malesuada mauris diam, consectetur." />
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
          <SubTitleText title="About Us" text="Quis est ultricies sagittis nec. Risus massa dictumst commodo, ac. Eget id interdum habitasse neque vel pellentesque pharetra, malesuada tortor. Faucibus quam donec vitae condimentum tristique hac fermentum feugiat. Lacus, viverra diam elit integer fermentum penatibus quam. Neque proin varius ultrices interdum malesuada mauris diam, consectetur." />
        </Col>
      </Row>
    </Container>
  );
}
