import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';
import {BsFillPersonFill} from 'react-icons/bs';

const TopBar = ({userInfo}) => {
  console.log ('this nav ', userInfo);
  return (
    <Navbar bg="light" expand="lg" style={{position: 'sticky'}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{margin: 'auto 200px auto 20px'}}>
          ระบบหวย
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <div className="text-end">
          <Button variant="success">
            <BsFillPersonFill style={{marginRight: '5px'}} /> {userInfo}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};
export default TopBar;
