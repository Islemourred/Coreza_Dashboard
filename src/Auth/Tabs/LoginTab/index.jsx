import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, H6, P } from "../../../AbstractElements";
import {
  EmailAddress,
  LoginWithJWT,
  OrSignInWith,
  Password,
  SignIn,
} from "../../../Constant";
import { useNavigate } from "react-router-dom";
import { Jwt_token } from "../../../Config/Config";
import man from "../../../assets/images/login/login_bg.jpg";
import FormHeader from "./FormHeader";
import FormPassword from "./FormPassword";
import { useCRM } from "../../../Helper/CRM/CRMProvider";

const LoginTab = ({ selected }) => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("123456");
  const [togglePassword, setTogglePassword] = useState(false);
  const [error, setError] = useState("");
  const history = useNavigate();
  const { login } = useCRM();
  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);

  // Role-based dashboard routing
  const getRoleDashboard = (role) => {
    const dashboards = {
      admin: "/dashboard/crm-admin",
      manager: "/dashboard/crm-manager",
      sales: "/dashboard/crm-sales",
      support: "/dashboard/crm-support",
      marketing: "/dashboard/crm-marketing",
    };
    return dashboards[role] || "/dashboard/default";
  };

  const loginAuth = async (e) => {
    e.preventDefault();
    setError("");

    if (email !== "" && password !== "") {
      const result = login(email, password);

      if (result.success) {
        setValue(result.user.avatar || man);
        setName(result.user.name);
        localStorage.setItem("profileURL", result.user.avatar || man);
        localStorage.setItem("Name", result.user.name);

        // Navigate to role-specific dashboard
        const dashboard = getRoleDashboard(result.user.role);
        history(`${process.env.PUBLIC_URL}${dashboard}`);
      } else {
        setError(result.message);
      }
    } else {
      setError("Please enter email and password");
    }
  };

  const loginWithJwt = async (e) => {
    e.preventDefault();
    setError("");

    const result = login(email, password);

    if (result.success) {
      setValue(result.user.avatar || man);
      setName(result.user.name);
      localStorage.setItem("profileURL", result.user.avatar || man);
      localStorage.setItem("Name", result.user.name);
      localStorage.setItem("token", Jwt_token);

      // Navigate to role-specific dashboard
      const dashboard = getRoleDashboard(result.user.role);
      history(`${process.env.PUBLIC_URL}${dashboard}`);
    } else {
      setError(result.message);
    }
  };

  return (
    <Form className="theme-form">
      <H4>{selected === "simpleLogin" ? "CRM Sign In" : "Sign In With Jwt"}</H4>
      <P>{"Enter your email & password to login"}</P>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="mb-3 p-3 bg-light rounded">
        <small className="text-muted">
          <strong>Demo Credentials:</strong>
          <br />
          Admin: admin@admin.com
          <br />
          Manager: manager@manager.com
          <br />
          Sales: sales@sales.com
          <br />
          Support: support@support.com
          <br />
          Marketing: marketing@marketing.com
          <br />
          Password: 123456
        </small>
      </div>
      <FormGroup>
        <Label className="col-form-label">{EmailAddress}</Label>
        <Input
          className="form-control"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Password}</Label>
        <div className="position-relative">
          <Input
            className="form-control"
            type={togglePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
            className="show-hide"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            <span className={togglePassword ? "" : "show"}></span>
          </div>
        </div>
      </FormGroup>
      <FormPassword />
      <div>
        {selected === "simpleLogin" ? (
          <Btn
            attrBtn={{
              color: "primary",
              className: "d-block w-100 mt-2",
              onClick: (e) => loginAuth(e),
            }}
          >
            {SignIn}
          </Btn>
        ) : (
          <Btn
            attrBtn={{
              color: "primary",
              className: "d-block w-100 mt-2",
              onClick: (e) => loginWithJwt(e),
            }}
          >
            {LoginWithJWT}
          </Btn>
        )}
      </div>
      <div className="login-social-title">
        <H6>{OrSignInWith}</H6>
      </div>
      <FormHeader selected={selected} />
    </Form>
  );
};

export default LoginTab;
