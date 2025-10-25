import React, { Fragment } from 'react'
import { Card, CardBody, Container } from 'reactstrap'
import { Breadcrumbs, H4 } from '../../AbstractElements'

const index = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Sample Card" parent="Apps" title="Sample Card" />
        <Container fluid={true}>
            <div className="row">
              <div className="col-sm-12">
                <Card>
                  <div className="card-header pb-0">
                    <H4>Sample Card</H4><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </div>
                  <CardBody>
                    <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </Fragment>
  )
}

export default index