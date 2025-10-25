import  {  useCallback, useRef } from "react";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import { CreatedByMe, Print } from "../../Constant";
import { H5 } from "../../AbstractElements";
import CreatedByme from "./CreatedByme";
import { Href } from "../../Constant";
import ReactToPrint from "react-to-print";

const ListOfTask = () => {
  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = useCallback(() => {
    return (
      <a href={Href} className="f-w-600">
        <Printer className="me-2" />
        {Print}
      </a>
    );
  }, []);

  return (
      <Card className="mb-0">
        <CardHeader>
          <H5 attrH5={{ className: "mb-0" }}>{CreatedByMe}</H5>
          <ReactToPrint
            trigger={reactToPrintTrigger}
            content={reactToPrintContent}
          />
        </CardHeader>
        <CreatedByme ref={componentRef} />
      </Card>
  );
};

export default ListOfTask;