import { Btn } from '../../../AbstractElements';
import { Cancel, Print } from '../../../Constant';
import ItemDescription from './ItemDescription';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import { Fragment,  useRef } from 'react';

const PrintComponent = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Fragment>
      <ItemDescription ref={componentRef}  />
      <div className="text-center mb-4">
        <Btn attrBtn={{ color: 'primary', className: 'me-2', onClick: handlePrint }}>
          {Print}
        </Btn>
        <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
          <Btn attrBtn={{ color: 'secondary' }}>{Cancel}</Btn>
        </Link>
      </div>
    </Fragment>
  );
};

export default PrintComponent;