import React, { Fragment } from 'react';
import { Heart, MessageSquare, Share } from 'react-feather';
import { P } from '../../../../AbstractElements';
import { LI, UL } from '../../../../AbstractElements';
import CountUp from 'react-countup';
import { Label } from 'reactstrap';

const SocialIcon = () => {
  return (
    <Fragment>
      <P>Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.</P>
      <UL attrUL={{ className: 'post-comment simple-list flex-row' }}>
        <LI>
          <Label>
            <a href="#javascript">
              <Heart />&nbsp;&nbsp;Like 
              <CountUp end={50} duration={5} />
            </a>
          </Label>
        </LI>
        <LI>
          <Label>
            <a href="#javascript">
              <MessageSquare />&nbsp;&nbsp;Comment
              <CountUp end={70} duration={5} />
            </a>
          </Label>
        </LI>
        <LI>
          <Label>
            <a href="#javascript">
              <Share />&nbsp;&nbsp;share
              <CountUp end={20} duration={5} />
            </a>
          </Label>
        </LI>
      </UL>
    </Fragment>
  );
};

export default SocialIcon;