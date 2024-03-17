import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className="p-5 bg-black text-white">
      <Row className="mb-5">
        <Col>
          <h2>Current Employment Experience</h2>
          <ListGroup variant="flush">
            
            <ListGroup.Item>
              <strong>Black Angus Steakhouse, Toronto, Ontario</strong><br />
              Bartender — May 2022 – Present<br />
              • Greet and serve customers in a friendly and professional manner, promoting positive interactions and building rapport to enhance the customer experience.<br />
              • Managed multiple tasks simultaneously in a fast-paced environment, prioritizing tasks and adapting to changing circumstances.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Leaside Local Public Eatery, Toronto, Ontario</strong><br />
              Night Sous Chef — Mar 2020 – Aug 2021<br />
              • Demonstrated effective communication and leadership skills, working collaboratively with front-of-house staff and management to provide excellent customer service and resolve issues as they arise.<br />
              • Train and mentor new staff on menu items, cooking techniques, and kitchen policies to improve overall kitchen efficiency and quality of service.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Liberty Village Local Public Eatery, Toronto, Ontario</strong><br />
              Day Sous Chef — Jan 2018 – Mar 2020<br />
              • Monitor food inventory and place orders to maintain appropriate levels of supplies, minimizing waste and maximizing cost efficiency.<br />
              • Manage kitchen operations, including ordering, inventory control, and cost management to meet budget goals.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>BJ Mechanical, Toronto, Ontario</strong><br />
              HVAC Helper — May 2016 – Jan 2018<br />
              • Troubleshot and diagnosed issues with HVAC equipment, using critical thinking and problem-solving skills to identify solutions.<br />
              • Collaborated with team members to complete projects on time and within budget.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Joey Sherway Gardens, Toronto, Ontario</strong><br />
              Line Coach — Nov 2014 – May 2016<br />
              • Collaborated with Executive Chef and kitchen staff to prepare and execute high-quality meals for lunch and dinner services.<br />
              • Maintained a clean and organized kitchen environment.
            </ListGroup.Item>
            <ListGroup.Item>
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

export default Experience;