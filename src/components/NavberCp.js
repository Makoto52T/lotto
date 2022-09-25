import React, {useState, useEffect} from 'react';
import {Navbar, ListGroup, Container, Nav} from 'react-bootstrap';
import {
  BsFillHouseFill,
  BsCardList,
  BsFillFileEarmarkPostFill,
} from 'react-icons/bs';
import {useRouter} from 'next/router';
import styles from '../scss/navbar/style.module.scss';

export default function NavberCp () {
  const router = useRouter ();
  const [data, setData] = useState ([
    {name: 'หน้าแรก', icon: <BsFillHouseFill />, link: '/', active: true},
    {
      name: 'Orders',
      icon: <BsFillFileEarmarkPostFill />,
      link: '/order',
      active: false,
    },
    {name: 'รายงาน', icon: <BsCardList />, link: '/report', active: false},
  ]);

  useEffect (() => {
    init ();
  }, []);

  function init () {
    setData (prevState =>
      prevState.map ((x, i) => {
        if (x.link === router.pathname)
          return {name: x.name, icon: x.icon, link: x.link, active: true};
        return {name: x.name, icon: x.icon, link: x.link, active: false};
      })
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ListGroup variant="flush">
              <ListGroup.Item className={styles.ListGroupConfig}>
                {data.map ((x, i) => (
                  <Nav.Link
                    href={x.link}
                    key={i}
                    active={x.active}
                    // onClick={setActive}
                  >
                    {x.icon} {x.name}
                  </Nav.Link>
                ))}
              </ListGroup.Item>
            </ListGroup>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
