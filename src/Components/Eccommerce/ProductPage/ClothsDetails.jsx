import {  P } from '../../../AbstractElements';
import { Febric, Video, Details, Brand } from '../../../Constant';
import React, { Fragment, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const ClothsDetails = () => {
  const [activeTab, setActiveTab] = useState('1');
  const Discription = 'Refresh your wardrobe with this chic top. With an eye-catching square neck, this top also features pretty puff sleeves. Stunning pink color Classic solid pattern Square neck Elasticated puff sleeves Belt included, Polyester fabric, machine wash..';
  const Discription1 = 'Tee Stores is an Indian contemporary clothing brand. The product pages display a fine quality fabric with colorful description. We offer many vivid designs, art, styles that "combine heritage with modernity, simplicity, playfulness and street style."';
  const Discription2 = 'Lora`s Solid Men`s Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.';
  const Discription3 = 'Rock Paper Scissors Various Dots Half Sleeves Girl`s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.';
  return (
    <Fragment>
      <Nav tabs className="border-tab mb-0">
        <NavItem id="myTab" role="tablist">
          <NavLink href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            {Febric}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem id="myTab" role="tablist">
          <NavLink href="#javascript" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            {Video}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem id="myTab" role="tablist">
          <NavLink href="#javascript" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
            {Details}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem id="myTab" role="tablist">
          <NavLink href="#javascript" className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
            {Brand}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <P attrPara={{ className: 'mb-0 m-t-20' }}>{Discription}</P>
          <P attrPara={{ className: 'mb-0 m-t-20' }}>{Discription1}</P>
        </TabPane>
        <TabPane tabId="2">
          <P attrPara={{ className: 'mb-0 m-t-20' }}>{Discription2}</P>
        </TabPane>
        <TabPane tabId="3">
          <P attrPara={{ className: 'mb-0 m-t-20' }}> {Discription3}</P>
        </TabPane>
        <TabPane tabId="4">
          <P attrPara={{ className: 'mb-0 m-t-20' }}>
            Product Dimensions : 18 x 18 x 4 cm <br />
            Date First Available : 31 March 2023 <br />
            Manufacturer : Tee Stores <br />
            Item part number : TS-WT721-XS-WHITE
          </P>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};
export default ClothsDetails;