import { Fragment } from 'react';
import { P } from '../../../../AbstractElements';
import { Heading1, SubHeading } from '../../../../Constant';
import { HeadingsData } from '../../../../Data/Ui-kits/Typography';

const SubHeadings = () => {
  
  return (
    <Fragment>
      <P attrPara={{ className: 'h1 txt-primary' }}  >{Heading1}<small>{SubHeading}</small></P>
      {HeadingsData.map((data, index) => (<P key={index} attrPara={{ className: data.className }}>{data.tittle}<small>{SubHeading}</small></P>))}
    </Fragment>
  );
};

export default SubHeadings;