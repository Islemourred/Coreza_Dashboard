import React, { Fragment } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { LI } from '../../../AbstractElements';


const SocialAuth = () => {
    return (
        <Fragment>
            <LI>
                <a href="http://facebook.com/"><Facebook/></a>
            </LI>
            <LI>
                <a href="https://linkedin.com/"><Linkedin/></a>
            </LI>
            <LI>
                <a href="https://twitter.com/i/flow/login"><Twitter/></a>
            </LI>
            <LI>
                <a href="https://www.instagram.com/"><Instagram/></a>
            </LI>

        </Fragment >
    );
};

export default SocialAuth;