import React from 'react';

import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../pages/Shared/LeftSide/LeftSide';
import RightSide from '../pages/Shared/RightSide/RightSide';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Container className='px-0'>
            <Row>
            <Col lg="2" className='px-0 d-none d-lg-block'>
              <LeftSide></LeftSide>
            </Col>
            <Col lg="7">
                <Outlet></Outlet>
            </Col>
            <Col lg="3">
              <RightSide></RightSide>
            </Col>
            </Row>
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Main;