import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Resume = () => {
  return (
    <Container fluid className="p-5 bg-black text-white">
      <Row className="mb-5">
        <Col>
          <h2>Objective</h2>
          <p>To secure a position as a computer programmer where my strong problem-solving skills, attention to detail, and experience in management can be utilized to create high-quality software applications.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Highlights</h2>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">Proficient in Java, Python, C#, PHP, JavaScript with a strong understanding of programming principles and algorithms.</ListGroup.Item>
            <ListGroup.Item variant="dark">Strong analytical skills with an ability to quickly identify and troubleshoot issues.</ListGroup.Item>
            <ListGroup.Item variant="dark">Ability to work well both independently and in a team environment, with excellent communication skills.</ListGroup.Item>
            <ListGroup.Item variant="dark">Strong at confrontation and handling complex situations.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Technical Skills</h2>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">Programming Languages: C#, Java, Python, and React, HTML, CSS, JavaScript, PHP, SQL.</ListGroup.Item>
            <ListGroup.Item variant="dark">Databases: Oracle SQL, MYSQL, Microsoft SQL Server</ListGroup.Item>
            <ListGroup.Item variant="dark">Operating Systems: Linux, Mac, Windows</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Education</h2>
          <p>George Brown College, Toronto, Ontario 2021-2024</p>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">Computer Programming and Analysis Advance Diploma Program</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Awards</h2>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">2022 Dean's Honour List Semester 1 & 2</ListGroup.Item>
            <ListGroup.Item variant="dark">2023 Dean's Honour List Semester 3 & 4</ListGroup.Item>
            <ListGroup.Item variant="dark">2024 Dean's Honour List Semester 5</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Employment Experience</h2>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              <strong>Black Angus Steakhouse, Toronto, Ontario</strong><br />
              Bartender — May 2022 – Present<br />
              • Greet and serve customers in a friendly and professional manner, promoting positive interactions and building rapport to enhance the customer experience.<br />
              • Managed multiple tasks simultaneously in a fast-paced environment, prioritizing tasks and adapting to changing circumstances.
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>Leaside Local Public Eatery, Toronto, Ontario</strong><br />
              Night Sous Chef — Mar 2020 – Aug 2021<br />
              • Demonstrated effective communication and leadership skills, working collaboratively with front-of-house staff and management to provide excellent customer service and resolve issues as they arise.<br />
              • Train and mentor new staff on menu items, cooking techniques, and kitchen policies to improve overall kitchen efficiency and quality of service.
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>Liberty Village Local Public Eatery, Toronto, Ontario</strong><br />
              Day Sous Chef — Jan 2018 – Mar 2020<br />
              • Monitor food inventory and place orders to maintain appropriate levels of supplies, minimizing waste and maximizing cost efficiency.<br />
              • Manage kitchen operations, including ordering, inventory control, and cost management to meet budget goals.
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>BJ Mechanical, Toronto, Ontario</strong><br />
              HVAC Helper — May 2016 – Jan 2018<br />
              • Troubleshot and diagnosed issues with HVAC equipment, using critical thinking and problem-solving skills to identify solutions.<br />
              • Collaborated with team members to complete projects on time and within budget.
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>Joey Sherway Gardens, Toronto, Ontario</strong><br />
              Line Coach — Nov 2014 – May 2016<br />
              • Collaborated with Executive Chef and kitchen staff to prepare and execute high-quality meals for lunch and dinner services.<br />
              • Maintained a clean and organized kitchen environment.
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>Montana’s Steakhouse, Toronto, Ontario</strong><br />
              Line Cook — Sept 2013 – Nov 2014<br />
              • Worked efficiently under pressure to meet service deadlines and maintain high food quality standards.<br />
              • Upheld high standards of food safety and cleanliness, ensuring compliance with health department regulations.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;