import { Col } from "reactstrap"
import { LI, UL } from "../../../../AbstractElements"
import { Loss, Profit } from "../../../../Constant"

const ProfitAndLoss = () => {
  return (
    <Col xs="7">
    <div className="text-end">
      <UL className="simple-list">
        <LI>{Profit}<span className="product-order font-primary m-l-10">8989<i className="icon-angle-up f-12 m-l-10"></i></span></LI>
        <LI>{Loss}<span className="product-order font-primary m-l-10">2560<i className="icon-angle-down f-12 m-l-10"></i></span></LI>
      </UL>
    </div>
  </Col>
  )
}

export default ProfitAndLoss