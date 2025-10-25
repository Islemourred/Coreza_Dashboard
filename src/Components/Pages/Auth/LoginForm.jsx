import  { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, H6, P, UL, LI } from '../../../AbstractElements';
import { CreateAccount, EmailAddress, ForgotPassword, Signinaccount, Password, RememberPassword } from '../../../Constant';


const LoginForm = () => {   
    const [showPass, setShowPass] = useState(false);

    return (
            <div className="login-main">
            <Form className="theme-form login-form">
                <div className="login-header text-center">
                    <H4>{Signinaccount}</H4>
                    <P>Enter your email & password to login</P>
                </div>
                <FormGroup>
                    <Label>{EmailAddress}</Label>
                    <div className="input-group">
                        <Input type="email" required="" placeholder="Test@gmail.com" />
                    </div>
                </FormGroup>
                <FormGroup className='position-relative pass-hide'>
                    <Label>{Password}</Label>
                    <Input className="form-control" type={showPass ? "text" : "Password"} name="login[password]" required="" placeholder="*********" />
                    <div className="show-hide">
                        <span className="show" onClick={()=>{setShowPass(!showPass) }}>

                        </span>
                    </div>
                </FormGroup>
                <FormGroup className='position-relative'>
                    <div className="checkbox">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}/authentication/forget-pwd`} className="link">
                        {ForgotPassword}?
                    </Link>
                </FormGroup>
                <FormGroup>
                    <Btn attrBtn={{ color: 'primary', className: 'w-100', type: 'submit' }} >SIGN IN </Btn>
                </FormGroup>
                <div className="login-social-title">
                    <H6>Or Sign in with</H6>
                </div>
                <FormGroup>
                    <UL attrUL={{ className: 'simple-list login-social flex-row' }}>
                        <LI>
                            <a href="https://in.linkedin.com/">
                               <Linkedin/>
                            </a>
                        </LI>
                        <LI>
                            <a href="https://twitter.com/i/flow/login">
                               <Twitter/>
                            </a>
                        </LI>
                        <LI>
                            <a href="https://www.instagram.com/">
                                <Instagram/>
                            </a>
                        </LI>
                        <LI>
                            <a href="https://www.facebook.com/">
                            <Facebook/>
                            </a>
                        </LI>
                    </UL>
                </FormGroup>
                <P attrPara={{ className: 'text-center mt-4 mb-0' }}>Don't have account?
                    <Link to={`${process.env.PUBLIC_URL}/authentication/create-pwd`} className="ms-2">
                        {CreateAccount}
                    </Link>
                </P>
            </Form>
            </div>
    );
};

export default LoginForm;