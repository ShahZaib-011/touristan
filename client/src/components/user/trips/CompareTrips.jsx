import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CompareTripComponent from './CompareTripComponent';
import CompareTripComponent2 from './CompareTripComponent2';

class CompareTrips extends Component {
  render() {     
    return (
      <Container fluid>
        <Row>
          <Col className="md-6">
            <CompareTripComponent trip1 />
          </Col>
          <Col className="md-6">
            <CompareTripComponent2 trip2 />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CompareTrips;
