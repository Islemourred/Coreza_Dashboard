import { P, LI, UL } from '../../../../AbstractElements';
import React, { Fragment } from 'react';
import { Heart, MessageSquare } from 'react-feather';
import CountUp from 'react-countup';
import { Label } from 'reactstrap';
import { Comment, Href, Like, ShareHeading } from '../../../../Constant';

const SocialIcon = () => {
  let datas =[
    {icon:<Heart />,tittle:Like ,number:50},
    {icon:<MessageSquare />,tittle:Comment ,number:70},
    {icon:<Heart />,tittle:ShareHeading ,number:20},
  ]
  return (
    <Fragment>
      <P>Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.</P>
      <UL attrUL={{ className: 'post-comment simple-list d-flex flex-row' }}>
        {datas.map((data,index)=>(
          <LI key={index}><Label><a href={Href}>{data.icon}&nbsp;&nbsp;{data.tittle}<CountUp end={data.number} duration={5} /></a></Label></LI>
        ))}
      </UL>
    </Fragment>
  );
};

export default SocialIcon;