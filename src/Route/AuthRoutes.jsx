import ComingBgImg from '../Components/Pages/ComingSoon/ComingBgImg';
import ComingSimple from '../Components/Pages/ComingSoon/ComingSimple';

import ErrorPage1 from '../Components/Pages/ErrorPages/error-page1';
import ErrorPage2 from '../Components/Pages/ErrorPages/error-page2';
import ErrorPage3 from '../Components/Pages/ErrorPages/error-page3';
import ErrorPage4 from '../Components/Pages/ErrorPages/error-page4';

import Logins from '../Auth/Signin';
import LoginOne from '../Components/Pages/Auth/LoginOne';
import LoginTwo from '../Components/Pages/Auth/LoginTwo';
import LoginValidation from '../Components/Pages/Auth/LoginValidation';
import LoginSweetalert from '../Components/Pages/Auth/LoginSweetalert';
import LoginTooltip from '../Components/Pages/Auth/LoginTooltip';
import RegisterSimple from '../Components/Pages/Auth/RegisterSimple';
import RegisterBgImg from '../Components/Pages/Auth/RegisterBgImg';
import RegisterVideo from '../Components/Pages/Auth/RegisterVideo';
import UnlockUser from '../Components/Pages/Auth/UnlockUser';
import ForgetPwd from '../Components/Pages/Auth/ForgetPwd';
import CreatePwd from '../Components/Pages/Auth/CreatePwd';
import Maintenance from '../Components/Pages/Auth/Maintenance';
import LoginSample from '../Components/Pages/Auth/Login';
import ErrorPage5 from '../Components/Pages/ErrorPages/error-page5';
import ComingsoonVideo from '../Components/Pages/ComingSoon/ComingBgVideo';

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Components: <Logins /> },
  { path: `${process.env.PUBLIC_URL}/authentication/login-simple`, Components: <LoginSample /> },
  { path: `${process.env.PUBLIC_URL}/authentication/login-img`, Components: <LoginOne /> },
  { path: `${process.env.PUBLIC_URL}/authentication/login-bg-img`, Components: <LoginTwo /> },
  { path: `${process.env.PUBLIC_URL}/authentication/login-validation`, Components: <LoginValidation /> },
  { path: `${process.env.PUBLIC_URL}/authentication/login-tooltip`, Components: <LoginTooltip /> },
  { path: `${process.env.PUBLIC_URL}/authentication/login-sweetalert`, Components: <LoginSweetalert /> },
  { path: `${process.env.PUBLIC_URL}/authentication/register-simpleimg`, Components: <RegisterSimple /> },
  { path: `${process.env.PUBLIC_URL}/authentication/register-bg-img`, Components: <RegisterBgImg /> },
  { path: `${process.env.PUBLIC_URL}/authentication/register-video`, Components: <RegisterVideo /> },
  { path: `${process.env.PUBLIC_URL}/authentication/unlock-user`, Components: <UnlockUser /> },
  { path: `${process.env.PUBLIC_URL}/authentication/forget-pwd`, Components: <ForgetPwd /> },
  { path: `${process.env.PUBLIC_URL}/authentication/create-pwd`, Components: <CreatePwd /> },
  { path: `${process.env.PUBLIC_URL}/authentication/maintenance`, Components: <Maintenance /> },

  //Coming soon
  {
    path: `${process.env.PUBLIC_URL}/coming/comingbgvideo`,Components: <ComingsoonVideo/>,
  },
  { path: `${process.env.PUBLIC_URL}/coming/comingsimple`, Components: <ComingSimple /> },
  {
    path: `${process.env.PUBLIC_URL}/coming/comingbgimage`, Components: <ComingBgImg />
  },

  //Error Page
  { path: `${process.env.PUBLIC_URL}/error/error-page1`, Components: <ErrorPage1 /> },
  { path: `${process.env.PUBLIC_URL}/error/error-page2`, Components: <ErrorPage2 /> },
  { path: `${process.env.PUBLIC_URL}/error/error-page3`, Components: <ErrorPage3 /> },
  { path: `${process.env.PUBLIC_URL}/error/error-page4`, Components: <ErrorPage4 /> },
  { path: `${process.env.PUBLIC_URL}/error/error-page5`, Components: <ErrorPage5 /> },
];