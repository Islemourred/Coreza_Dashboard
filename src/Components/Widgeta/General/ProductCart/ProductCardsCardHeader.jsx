import { CardHeader } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { ProductsCart } from "../../../../Constant";

const ProductCardsCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{ProductsCart}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductCardsCardHeader;
