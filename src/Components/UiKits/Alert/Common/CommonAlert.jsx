import React, { Fragment, useState } from 'react';
import { P, Btn, Alerts } from '../../../../AbstractElements';

const CommonAlert = ({ item, btnText }) => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Fragment>
      {
        btnText ?
          <Alerts attrAlert={{
            className: 'alert-dismissible', color: item.alertcolor,
            isOpen: Open,
            target: 'Alert-' + item.id,
          }} >
            {item.icon}
            <P>{'Your time Over after'} <b>{'5'}</b> {'miniute'}
              <Btn attrBtn={{ className: 'btn-close', color: 'transperant', id: 'Alert-1', onClick: Toggle }} >
                {<span className={item.divCls}>{'dismiss'}</span>}</Btn></P>
          </Alerts >
          :

          <Alerts attrAlert={{
            className: 'alert-dismissible', color: item.alertcolor,
            isOpen: Open,
            target: 'Alert-' + item.id,
          }}
            closeBtn={true}
            attrBtn={{ className: 'btn-close', color: item.btnclose, id: 'Alert-' + item.id, onClick: Toggle }}
            divCls={item.divCls}
          >
            {item.icon}
            <P innerHtml={item.alerttxt} />
          </Alerts>
      }
    </Fragment >
  );
};

export default CommonAlert;