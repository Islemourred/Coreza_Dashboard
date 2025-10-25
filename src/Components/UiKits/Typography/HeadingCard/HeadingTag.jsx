import React from 'react';
import { Fragment } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements';

const HeadingTag = () =>{
    return(
      <Fragment>
        <H1>{'This is a Heading 1'}</H1>
        <H2>{'This is a Heading 2'}</H2>
        <H3>{'This is a Heading 3'}</H3>
        <H4>{'This is a Heading 4'}</H4>
        <H5>{'This is a Heading 5'}</H5>
        <H6>{'This is a Heading 6'}</H6>
      </Fragment>
    );
};

export default HeadingTag;