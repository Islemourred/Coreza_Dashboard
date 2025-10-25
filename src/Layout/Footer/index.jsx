import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Footer,P } from '../../AbstractElements'

const FooterComponent = () => {
  return (
    <Fragment>
      <Footer attrFooter={{ className: "footer" }}>
        <Container fluid={true}>
          <Row>
            <Col md="6" className='p-0 footer-left'>
              <P attrPara={{className:"mb-0"}} >Copyright © 2023 Tivo. All rights reserved.</P>
            </Col>
            <Col  md="6" className='p-0 footer-right'>
              <P attrPara={{className:"mb-0 ms-3"}} >Hand-crafted & made with <i className="fa fa-heart font-danger"></i></P>
            </Col>
          </Row>
        </Container>
      </Footer>
    </Fragment>
  )
}

export default FooterComponent;