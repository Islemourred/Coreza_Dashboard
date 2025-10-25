import { Range, getTrackBackground } from "react-range";
import { Price, MAX, MIN, STEP } from "../../../Constant";
import { H6 } from "../../../AbstractElements";
import { getMinMaxPrice } from "../../../Services/Ecommerce.service";
import { useContext, useState } from "react";
import ProductContext from "../../../Helper/product";
import FilterContext from "../../../Helper/filter";

const ProductFilter = () => {
  const { productItem } = useContext(ProductContext);
  const { filterPrice } = useContext(FilterContext);

  const prices = getMinMaxPrice(productItem);
  const step = STEP;
  const min = MIN;
  const max = MAX;
  const [values, setValues] = useState([150, 650]);

  const priceHandle = (value) => {
    setValues(value);
    filterPrice(value);
  };

  return (
    <div className="product-filter pb-0">
      <H6 attrH6={{ className: "f-w-600" }}>{Price}</H6>
      <Range
        values={values}
        step={step}
        min={prices.min}
        max={prices.max}
        onChange={(values) => {
          priceHandle(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            className="price-range"
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <output style={{ marginTop: "30px" }}>{values[0]}</output>
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#4d8aff", "#ccc"],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
            <output style={{ marginTop: "30px" }}>{values[1]}</output>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              borderRadius: "60px",
              backgroundColor: "#4d8aff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default ProductFilter;