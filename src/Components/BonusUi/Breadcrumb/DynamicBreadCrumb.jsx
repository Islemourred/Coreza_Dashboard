import { Fragment } from "react";
import { LI, OL } from "../../../AbstractElements";
import { Home, Href, Library } from "../../../Constant";

const DynamicBreadCrumb = () => {
  let data = [
    { olClass: "m-b-30 bg-secondary" },
    { olClass: "m-b-30 bg-success" },
    { olClass: "m-b-30 bg-info" },
    { olClass: "m-b-30 bg-warning" },
    { olClass: "m-b-30 bg-danger" },
    { olClass: "m-b-30 bg-light", texClass: "txt-dark" },
    { olClass: "m-b-0 bg-dark" },
  ];
  return (
    <Fragment>
      {data.map((colour, index) => (
        <OL
          key={index}
          attrOL={{
            className: `simple-List breadcrumb breadcrumb-colored ${colour.olClass}`,
          }}
        >
          <LI attrLI={{ className: "breadcrumb-item" }}>
            <a href={Href} className={colour.texClass ? colour.texClass : ""}>
              {Home}
            </a>
          </LI>
          <LI
            attrLI={{ className: `breadcrumb-item active ${colour.texClass ? colour.texClass:""}` }}
          >
            {Library}
          </LI>
        </OL>
      ))}
    </Fragment>
  );
};

export default DynamicBreadCrumb;
