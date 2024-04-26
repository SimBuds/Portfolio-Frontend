import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import '../assets/Resume.css'; // Importing the CSS file for the Resume page

const Resume = () => {
  return (
    <Container className="resume">
      <Row className="element">
        <Col>
          <h1>Casey Hsu</h1>
          <p>Email: casey-hsu@outlook.com</p>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>Objective</h2>
          <p>To secure a position as a computer programmer where my strong problem-solving skills, attention to detail, and experience in management can be utilized to create high-quality software applications.</p>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>Highlights</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>Strong analytical skills with an ability to quickly identify and troubleshoot issues.</ListGroup.Item>
            <ListGroup.Item>Ability to work well both independently and in a team environment, with excellent communication skills.</ListGroup.Item>
            <ListGroup.Item>Strong at confrontation and handling complex situations.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>Technical Skills</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>Programming Languages: Java, Python, JavaScript, C#, PHP, Swift, Android, Rust, HTML, CSS</ListGroup.Item>
            <ListGroup.Item>Databases: Oracle SQL, MySQL, MongoDB, Postgres</ListGroup.Item>
            <ListGroup.Item>Operating Systems: Linux, Mac, Windows</ListGroup.Item>
            <ListGroup.Item>Frameworks: ASP.NET, Spring Boot, React, Angular</ListGroup.Item>
            <ListGroup.Item>Tools: Docker, Postman, Git</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>Education</h2>
          <p>George Brown College, Toronto, Ontario 2021-2024</p>
          <ListGroup variant="flush">
            <ListGroup.Item>Computer Programming and Analysis Advance Diploma Program</ListGroup.Item>
            <ListGroup.Item>Graduated Winter 2024</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>Awards</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>2022 Dean's Honour List Semester 1 & 2</ListGroup.Item>
            <ListGroup.Item>2023 Dean's Honour List Semester 3 & 4</ListGroup.Item>
            <ListGroup.Item>2024 Dean's Honour List Semester 5 & 6</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>Employment Experience</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Black Angus Steakhouse, Toronto, Ontario</strong><br />
              <br/>
              Bartender — May 2022 – Present<br />
              <br />
              • Greet and serve customers in a friendly and professional manner, promoting positive interactions and building rapport to enhance the customer experience.<br />
              • Managed multiple tasks simultaneously in a fast-paced environment, prioritizing tasks and adapting to changing circumstances.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Leaside Local Public Eatery, Toronto, Ontario</strong><br />
              <br/>
              Night Sous Chef — Mar 2020 – Aug 2021<br />
              <br/>
              • Demonstrated effective communication and leadership skills, working collaboratively with front-of-house staff and management to provide excellent customer service and resolve issues as they arise.<br />
              • Train and mentor new staff on menu items, cooking techniques, and kitchen policies to improve overall kitchen efficiency and quality of service.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Liberty Village Local Public Eatery, Toronto, Ontario</strong><br />
              <br/>
              Day Sous Chef — Jan 2018 – Mar 2020<br />
              <br />
              • Monitor food inventory and place orders to maintain appropriate levels of supplies, minimizing waste and maximizing cost efficiency.<br />
              • Manage kitchen operations, including ordering, inventory control, and cost management to meet budget goals.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>BJ Mechanical, Toronto, Ontario</strong><br />
              <br/>
              HVAC Helper — May 2016 – Jan 2018<br />
              <br />
              • Troubleshot and diagnosed issues with HVAC equipment, using critical thinking and problem-solving skills to identify solutions.<br />
              • Collaborated with team members to complete projects on time and within budget.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Joey Sherway Gardens, Toronto, Ontario</strong><br />
              <br/>
              Line Coach — Nov 2014 – May 2016<br />
              <br />
              • Collaborated with Executive Chef and kitchen staff to prepare and execute high-quality meals for lunch and dinner services.<br />
              • Maintained a clean and organized kitchen environment.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Montana’s Steakhouse, Toronto, Ontario</strong><br />         
              <br/>
              Line Cook — Sept 2013 – Nov 2014<br />
              <br />
              • Worked efficiently under pressure to meet service deadlines and maintain high food quality standards.<br />
              • Upheld high standards of food safety and cleanliness, ensuring compliance with health department regulations.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="element">
        <Col>
          <h2>References</h2>
          <strong>Available upon request.</strong>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;