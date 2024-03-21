import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/Capstone.css'

function Capstone() {
  return (
    <Container className="capstone mt-5">
      <h1 className="text-center mb-4 text-white">Capstone Project</h1>
      <Row>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Project Summary</Card.Title>
              <a href="https://github.com/SimBuds/Capstone/blob/main/F23_T08_Project_Summary.docx">View Project Summary</a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Project Vision</Card.Title>
              <a href="https://github.com/SimBuds/Capstone/blob/main/F23_T08_Project_Vision.pdf">View Project Vision</a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Project Requirements</Card.Title>
              <a href="https://github.com/SimBuds/Capstone/blob/main/F23_T08_High_Level_Requirements.doc">View Project Requirements</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Project Plan</Card.Title>
              <a href="https://github.com/SimBuds/Capstone/blob/main/F23_T08_Project_Plan.docx">View Project Plan</a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Requirements Analysis Design</Card.Title>
              <a href="https://github.com/SimBuds/Capstone/blob/main/F23_T08_Requirements%20Analysis_Design.docx">View Requirements Analysis Design</a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Wireframe Mockups</Card.Title>
              <a href="https://www.figma.com/file/Zs6YmyAw2AixdqqEdrOXHN/Menu-Master?type=design&node-id=0%3A1&mode=design&t=Pp4T8yi3ffN4B8RY-1">View Wireframe Mockups</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Status Reports</Card.Title>
              <a href="https://github.com/SimBuds/Capstone/blob/main/W2024_COMP3078_Project_Status_Report_1.docx">View Status Reports</a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>System Implementation</Card.Title>
              <Card.Text>Coming Soon</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Capstone;