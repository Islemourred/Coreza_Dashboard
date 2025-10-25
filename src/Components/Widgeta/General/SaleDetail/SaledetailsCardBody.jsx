import { Col, Row } from "reactstrap"
import { Saledetail } from "../../../../Data/SaleDetail/Saledetail"
import { H5, H6 } from "../../../../AbstractElements"

const SaledetailsCardBody = () => {
  return (
    <Row className="gy-4">
            {Saledetail.map((item)=>
            <Col md="6" key={item.id} >
              <div className="widget-card">
                <div className="d-flex align-self-center">
                  <div className={`widget-icon bg-light-${item.font}`}><i className={item.icon}></i></div>
                  <div className="flex-grow-1">
                    <H6>{item.day}</H6>
                    <H5>$<span className="counter">{item.number}</span><span className={`font-${item.font} ms-1`}>{item.percentage}</span></H5>
                  </div>
                </div>
              </div>
            </Col>
            )}
          </Row>
  )
}

export default SaledetailsCardBody