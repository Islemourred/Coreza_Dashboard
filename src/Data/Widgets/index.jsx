import {CancelledOrderSvg,DeliveredOrderSvg,EarningCardSvg,MessageCardSvg,NewOrderSvg,NewUserSvg,PendingOrderSvg,ProductCardSvg,} from "../../Components/SvgIcons";
import {CancelledOrder,DeliveredOrder,Earnings,Follower,Following,Messages,NewOrder,NewUser,PendingOrder,Products,TotalPost,} from "../../Constant";
import {OrderStatusone,orderstatusfive,orderstatusfour,orderstatusthree,orderstatustwo,} from "./WidgetChartData";

export let OrderStatusDatas = [
  {
    id: "progress1",
    options: OrderStatusone.option,
    series: OrderStatusone.series,
  },
  {
    id: "progress2",
    options: orderstatustwo.option,
    series: orderstatustwo.series,
  },
  {
    id: "progress3",
    options: orderstatusthree.option,
    series: orderstatusthree.series,
  },
  {
    id: "progress4",
    options: orderstatusfour.option,
    series: orderstatusfour.series,
  },
  {
    id: "progress5",
    options: orderstatusfive.option,
    series: OrderStatusone.serifiorderstatusfive,
  },
];

export let ReportsCardDatas = [
  {
    headingClassName: "header-text-primary",
    Heading: Earnings,
    amount: 6659,
    svgIcon: <EarningCardSvg />,
    progressClass: "progress-gradient-primary",
    progressValue: 50,
  },
  {
    cardClassName: "product-widget",
    headingClassName: "header-text-success",
    Heading: Products,
    amount: 9856,
    svgIcon: <ProductCardSvg />,
    progressClass: "progress-gradient-success",
    progressValue: 60,
  },
  {
    cardClassName: "message-widget",
    headingClassName: "header-text-secondary",
    Heading: Messages,
    amount: 893,
    svgIcon: <MessageCardSvg />,
    progressClass: "progress-gradient-secondary",
    progressValue: 48,
  },
  {
    cardClassName: "user-widget",
    headingClassName: "header-text-info",
    Heading: NewUser,
    amount: 45631,
    svgIcon: <NewUserSvg />,
    progressClass: "progress-gradient-info",
    progressValue: 48,
  },
];

export let OrderDetaildatas = [
  {
    iconClass: "bg-light-primary",
    icon: <NewOrderSvg />,
    tittle: NewOrder,
    spanClassName: "font-primary",
    value: 68,
    amount: "6981",
  },
  {
    iconClass: "bg-light-secondary",
    icon: <PendingOrderSvg />,
    tittle: PendingOrder,
    spanClassName: "font-secondary",
    value: 12,
    amount: "783",
    downIcon: <i className="icofont icofont-arrow-down"></i>,
  },
  {
    iconClass: "bg-light-success",
    icon: <DeliveredOrderSvg />,
    tittle: DeliveredOrder,
    spanClassName: "font-success",
    value: 50,
    amount: "$647",
  },
  {
    iconClass: "bg-light-info",
    icon: <CancelledOrderSvg />,
    tittle: CancelledOrder,
    spanClassName: "font-info",
    value: 20,
    amount: "69",
  },
];

export let ManagerCardDatas = [
  {
    href: "https://www.facebook.com/",
    iconClass: "fa-facebook",
    className: "bg-fb",
  },
  {
    href: "https://myaccount.google.com/",
    iconClass: "fa-google-plus",
    className: "bg-gplus",
  },
  {
    href: "https://twitter.com/",
    iconClass: "fa-twitter",
    className: "bg-twitter",
  },
  {
    href: "https://www.instagram.com/",
    iconClass: "fa-instagram",
    className: "bg-insta",
  },
  {
    href: "https://in.linkedin.com/",
    iconClass: "fa-rss",
    className: "bg-linkedin",
  },
];

export let cardFooterData = [
  { value: 9564, tittle: Follower },
  { sub: "K", value: 49, tittle: Following },
  { sub: "M", value: 96, tittle: TotalPost },
];
