import Cookies from 'js-cookie';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import * as api from '../api';

export default function LoginPage () {
  const router = useRouter ();
  const [user, setUser] = useState ();
  const [pass, setPass] = useState ();

  async function login () {
    console.log ('this login', user, pass);
    let data = 'x=login&username=admin&psw=admin';
    const result = await api.login (data);
    console.log (result);
    if (result) {
      // set cookie token and user
      await Cookies.set ('user', user, {expires: 30});
      await Cookies.set ('token', result.token, {expires: 30});
      router.push ('/');
    }
  }
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={4} xs={24}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username for login"
                onChange={e => {
                  setUser (e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => {
                  setPass (e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={login}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
