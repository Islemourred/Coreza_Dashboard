import  {  useState } from 'react';
import { AlertCircle, Clock, Image, Users } from 'react-feather';
import { Card, Col, Input, InputGroup, Nav, NavItem, NavLink } from 'reactstrap';
import { About, Friends, Photos, Timline } from '../../Constant';

const TimelineTab = ({ callbackActive }) => {
  const [activeTab, setActiveTab] = useState('1');
  let TimelineTabData=[
    {icon:<Clock />, tittle:Timline,activeTabClass:"1"},
    {icon:<AlertCircle />, tittle:About,activeTabClass:"2"},
    {icon:<Users />, tittle:Friends,activeTabClass:"3"},
    {icon:<Image />, tittle:Photos,activeTabClass:"4"},
  ]   
  return (
      <Col sm="12" className="box-col-12">
        <Card>
          <div className="social-tab">
            <Nav tabs >
              {TimelineTabData.map((data,index)=>(<NavItem key={index}>
                <NavLink className={activeTab === data.activeTabClass ? 'active' : ''} onClick={() => { setActiveTab(data.activeTabClass); callbackActive(data.activeTabClass);}}>
                  {data.icon}{data.tittle}
                </NavLink>
              </NavItem>))}
            </Nav>
            <InputGroup>
              <Input  type="text" placeholder="Search......." />
              <span className="input-group-text"> 
                <i className="fa fa-search"></i>
              </span>
            </InputGroup>
          </div>
        </Card >
      </Col >
  );
};
export default TimelineTab;