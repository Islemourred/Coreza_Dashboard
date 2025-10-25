import { Fragment } from "react";
import { P } from "../../../../AbstractElements";
import { BlockquotesDatas } from "../../../../Data/Ui-kits/Typography";

const DynamicBlockquotes = () => {
  return (
    <Fragment>
      {BlockquotesDatas.map((data, index) => (
        <Fragment key={index}>
          <P attrPara={{ className: 'sub-title' }}>{data.tittle}</P>
          <blockquote className={`blockquote ${data.class}`}>
            <P className="mb-0">{data.text}</P>
            <footer className="blockquote-footer">
              {data.footer}
              <cite title="Source Title">{data.lastFooter}</cite>
            </footer>
          </blockquote>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default DynamicBlockquotes;

