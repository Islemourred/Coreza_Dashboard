import React from "react";
import {
  BasicCard,
  BorderLeft,
  BorderRight,
  BorderTop,
  CardFooter,
  CardSpan,
  DragBothTitleCard,
  DragOnlyCard,
  DragOnlyContent,
  InfoColorBody,
  LongLorem,
  PrimaryColorCard,
  SecondaryColorCard,
} from "../../Constant";
import { Book, Briefcase, Droplet, Heart, MapPin } from "react-feather";

export const CarouselsData = [
  {
    id: 1,
    img: require("../../assets/images/slider/1.jpg"),
  },
  {
    id: 2,
    img: require("../../assets/images/slider/2.jpg"),
  },
  {
    id: 3,
    img: require("../../assets/images/slider/3.jpg"),
  },
  {
    id: 4,
    img: require("../../assets/images/slider/4.jpg"),
  },
  {
    id: 5,
    img: require("../../assets/images/slider/5.jpg"),
  },
  {
    id: 6,
    img: require("../../assets/images/slider/7.jpg"),
  },
  {
    id: 7,
    img: require("../../assets/images/slider/8.jpg"),
  },
  {
    id: 8,
    img: require("../../assets/images/slider/9.jpg"),
  },
  {
    id: 9,
    img: require("../../assets/images/slider/10.jpg"),
  },
  {
    id: 10,
    img: require("../../assets/images/slider/11.jpg"),
  },
  {
    id: 11,
    img: require("../../assets/images/slider/6.jpg"),
  },
];

export const BasicSweetalrtData = [
  {
    id: 1,
    color: "primary",
    class: "sweet-1",
    name: "basic",
    title: "Basic",
  },
  {
    id: 2,
    color: "secondary",
    class: "sweet-2",
    name: "basictitlealert",
    title: "With Title Alert",
  },
  {
    id: 3,
    color: "success",
    class: "sweet-3",
    name: "basicsuccessalert",
    title: "Success Alert",
  },
  {
    id: 4,
    color: "info",
    class: "sweet-4",
    name: "basicinfoalert",
    title: "Info Alert",
  },
  {
    id: 5,
    color: "warning",
    class: "sweet-5",
    name: "basicwarningalert",
    title: "Warning Alert",
  },
];
export const AlertSweetalertData = [
  {
    id: 1,
    color: "success",
    class: "sweet-8",
    name: "alertSuccess",
    title: "Success",
  },
  {
    id: 2,
    color: "danger",
    class: "sweet-7",
    name: "alertDanger",
    title: "Danger",
  },
  {
    id: 3,
    color: "info",
    class: "sweet-9",
    name: "alertInfo",
    title: "Information",
  },
  {
    id: 4,
    color: "warning",
    class: "sweet-6",
    name: "alertWarning",
    title: "Warning",
  },
];

export const AdvancedData = [
  {
    id: 1,
    color: "danger",
    class: "sweet-11",
    name: "advanceDanger",
    title: "Danger",
  },
  {
    id: 2,
    color: "info",
    class: "sweet-13",
    name: "advanceInfo",
    title: "Information",
  },
  {
    id: 3,
    color: "warning",
    class: "sweet-10",
    name: "advanceWarning",
    title: "Warning",
  },
];

export const RibbonData = [
  {
    id: 1,
    class: "ribbon ribbon-primary",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 2,
    class: "ribbon ribbon-secondary",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 3,
    class: "ribbon ribbon-success",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 4,
    class: "ribbon ribbon-info",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 5,
    class: "ribbon ribbon-warning",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 6,
    class: "ribbon ribbon-danger",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 7,
    class: "ribbon ribbon-primary ribbon-right",
    title: "Ribbon",
    wrapperClass: "ribbon-wrapper",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 8,
    class: "ribbon ribbon-secondary ribbon-right",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 9,
    class: "ribbon ribbon-success ribbon-right",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 10,
    class: "ribbon ribbon-info ribbon-right",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 11,
    class: "ribbon ribbon-warning ribbon-right",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 12,
    class: "ribbon ribbon-danger ribbon-right",
    wrapperClass: "ribbon-wrapper",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 13,
    class: "ribbon ribbon-primary ribbon-vertical-left",
    wrapperClass: "ribbon-vertical-left-wrapper",
    title: <i className="icofont icofont-love"></i>,
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 14,
    class: "ribbon ribbon-success ribbon-vertical-left",
    wrapperClass: "ribbon-vertical-left-wrapper",
    title: <i className="icon-gift"></i>,
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 15,
    class: "ribbon ribbon-secondary ribbon-vertical-left",
    wrapperClass: "ribbon-vertical-left-wrapper",
    title: <i className="icon-signal"></i>,
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 16,
    class: "ribbon ribbon-primary ribbon-vertical-right",
    wrapperClass: "ribbon-vertical-right-wrapper",
    title: <i className="fa fa-chain-broken"></i>,
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 17,
    wrapperClass: "ribbon-vertical-right-wrapper",
    class: "ribbon ribbon-secondary ribbon-vertical-right",
    title: <i className="fa fa-ticket"></i>,
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 18,
    wrapperClass: "ribbon-vertical-right-wrapper",
    class: "ribbon ribbon-success ribbon-vertical-right",
    title: <i className="fa fa-taxi"></i>,
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 19,
    wrapperClass: "ribbon-wrapper",
    class: "ribbon ribbon-bookmark ribbon-primary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 20,
    wrapperClass: "ribbon-wrapper",
    class: "ribbon ribbon-bookmark ribbon-secondary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 21,
    wrapperClass: "ribbon-wrapper",
    class: "ribbon ribbon-bookmark ribbon-success",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 22,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-bookmark ribbon-right ribbon-primary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 23,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-bookmark ribbon-right ribbon-secondary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 24,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-bookmark ribbon-right ribbon-success",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 25,
    wrapperClass: "ribbon-wrapper",
    class: "ribbon ribbon-clip ribbon-primary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 26,
    wrapperClass: "ribbon-wrapper",
    class: "ribbon ribbon ribbon-clip ribbon-secondary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 27,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-clip ribbon-success",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 28,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-clip-right ribbon-right ribbon-primary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 29,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-clip-right ribbon-right ribbon-secondary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 30,
    wrapperClass: "ribbon-wrapper-right",
    class: "ribbon ribbon-clip-right ribbon-right ribbon-success",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 31,
    wrapperClass: "ribbon-wrapper-bottom",
    class: "ribbon ribbon-clip-bottom ribbon-primary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 32,
    wrapperClass: "ribbon-wrapper-bottom",
    class: "ribbon ribbon-clip-bottom ribbon-secondary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 33,
    wrapperClass: "ribbon-wrapper-bottom",
    class: "ribbon ribbon-clip-bottom ribbon-success",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 34,
    wrapperClass: "ribbon-wrapper-bottom",
    class: "ribbon ribbon-clip-bottom-right ribbon-primary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 35,
    wrapperClass: "ribbon-wrapper-bottom",
    class: "ribbon ribbon-clip-bottom-right ribbon-secondary",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
  {
    id: 36,
    wrapperClass: "ribbon-wrapper-bottom",
    class: "ribbon ribbon-clip-bottom-right ribbon-success",
    title: "Ribbon",
    pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
  },
];
export const BasicCardData = [
  {
    headingSpan: CardSpan,
    sm: 12,
    xl: 6,
    footer: CardFooter,
    title: BasicCard,
    bodyClass: "pt-0",
    paragraphText: LongLorem,
  },
  {
    cardHeaderClassName: "bg-primary border-card",
    sm: 12,
    xl: 6,
    title: PrimaryColorCard,
    colorClass: "bg-primary",
    paragraphText: LongLorem,
    footer: CardFooter,
    settingIcon: true,
  },
  {
    cardHeaderClassName: "b-l-primary border-bottom-light",
    sm: 12,
    xl: 4,
    title: BorderLeft,
    paragraphText: LongLorem,
  },
  {
    cardHeaderClassName: "b-t-success border-bottom-light",
    sm: 12,
    xl: 4,
    title: BorderTop,
    paragraphText: LongLorem,
  },
  {
    cardHeaderClassName: "b-r-secondary border-bottom-light",
    sm: 12,
    xl: 4,
    title: BorderRight,
    paragraphText: LongLorem,
  },
  {
    sm: 12,
    xl: 6,
    title: SecondaryColorCard,
    cardHeaderClassName: "bg-secondary",
    paragraphText: LongLorem,
    footer: CardFooter,
  },
  {
    sm: 12,
    xl: 6,
    title: InfoColorBody,
    bodyClass: "bg-info",
    paragraphText: LongLorem,
    footer: CardFooter,
  },
];



export const TabCardData = [
  {
  
    pare1:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    pare2:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s.",
    pare3:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
    navClass: "pull-right  nav-pills nav-primary",
    state: "activeTab",
  },
];

export const dragData = [
  {
    title: DragBothTitleCard,
    bordType: "initialBoard",
    board: {
      columns: [
        {
          id: 1,
          title: "Backlog",
          cards: [
            {
              id: 1,
              title: "Add card",
              description: "Add capability to add a card in a column",
            },
          ],
        },
        {
          id: 2,
          title: "Doing",
          cards: [
            {
              id: 2,
              title: "Drag-n-drop support",
              description: "Move a card between the columns",
            },
          ],
        },
      ],
    },
  },
  {
    title: DragOnlyCard,
    bordType: "disableCardDrag",
    board: {
      columns: [
        {
          id: 1,
          title: "Backlog",
          cards: [
            {
              id: 1,
              title: "Add card",
              description: "Add capability to add a card in a column",
            },
          ],
        },
        {
          id: 2,
          title: "Doing",
          cards: [
            {
              id: 2,
              title: "Drag-n-drop support",
              description: "Move a card between the columns",
            },
          ],
        },
      ],
    },
  },
  {
    title: DragOnlyContent,
    bordType: "DragOnlyContent",
    board: {
      columns: [
        {
          id: 1,
          title: "Backlog",
          cards: [
            {
              id: 1,
              title: "Add card",
              description: "Add capability to add a card in a column",
            },
          ],
        },
        {
          id: 2,
          title: "Doing",
          cards: [
            {
              id: 2,
              title: "Drag-n-drop support",
              description: "Move a card between the columns",
            },
          ],
        },
      ],
    },
  },
];

export const FriendsData = [
  {
    id: 1,
    img: require("../../assets/images/user/3.jpg"),
    title: "Jason Borne",
  },
  {
    id: 2,
    img: require("../../assets/images/user/5.jpg"),
    title: "Anna Mull",
  },
  {
    id: 3,
    img: require("../../assets/images/user/2.png"),
    title: "Dion Cast",
  },
  {
    id: 4,
    img: require("../../assets/images/user/3.jpg"),
    title: "Karlene Lex",
  },
  {
    id: 5,
    img: require("../../assets/images/user/6.jpg"),
    title: "Vella Chism",
  },
  {
    id: 6,
    img: require("../../assets/images/user/10.jpg"),
    title: "Wai Schalk",
  },
  {
    id: 7,
    img: require("../../assets/images/user/14.png"),
    title: "Karlene Lex",
  },
  {
    id: 8,
    img: require("../../assets/images/user/1.jpg"),
    title: "Karlene Lex",
  },
  {
    id: 9,
    img: require("../../assets/images/user/4.jpg"),
  },
  {
    id: 10,
    img: require("../../assets/images/user/11.png"),
  },
  {
    id: 11,
    img: require("../../assets/images/user/8.jpg"),
  },
];

export const LatestPhotosData = [
  {
    id: 1,
    img: require("../../assets/images/social-app/post-1.png"),
  },
  {
    id: 2,
    img: require("../../assets/images/social-app/post-2.png"),
  },
  {
    id: 3,
    img: require("../../assets/images/social-app/post-3.png"),
  },
  {
    id: 4,
    img: require("../../assets/images/social-app/post-4.png"),
  },
  {
    id: 5,
    img: require("../../assets/images/social-app/post-5.png"),
  },
  {
    id: 6,
    img: require("../../assets/images/social-app/post-6.png"),
  },
  {
    id: 7,
    img: require("../../assets/images/social-app/post-7.png"),
  },
  {
    id: 8,
    img: require("../../assets/images/social-app/post-8.png"),
  },
];

export const AboutMeData = [
  {
    id: 1,
    icon: <Briefcase />,
    designation: "UX desginer at Pixelstrap",
    place: "banglore - 2023",
  },
  {
    id: 2,
    icon: <Book />,
    designation: "studied computer science",
    place: "at london univercity - 2021",
  },
  {
    id: 3,
    icon: <Heart />,
    designation: "relationship status",
    place: "single",
  },
  {
    id: 4,
    icon: <MapPin />,
    designation: "lived in london",
    place: "last 5 year",
  },
  {
    id: 5,
    icon: <Droplet />,
    designation: "blood group",
    place: "O+ positive",
  },
];
export const FollowingsData = [
  {
    id: 1,
    img: require("../../assets/images/user/3.png"),
    name: "Sarah Loren",
  },
  {
    id: 2,
    img: require("../../assets/images/user/2.png"),
    name: "Bucky Barnes",
  },
  {
    id: 3,
    img: require("../../assets/images/user/10.jpg"),
    name: "Comeren Diaz",
  },
  {
    id: 4,
    img: require("../../assets/images/user/11.png"),
    name: "Jason Borne",
  },
  {
    id: 5,
    img: require("../../assets/images/user/3.png"),
    name: "Andew Jon",
  },
];
export const FollowersData = [
  {
    id: 1,
    img: require("../../assets/images/user/2.png"),
    name: "Bucky Barnes",
  },
  {
    id: 2,
    img: require("../../assets/images/user/3.png"),
    name: "Sarah Loren",
  },
  {
    id: 3,
    img: require("../../assets/images/user/4.jpg"),
    name: "Jason Borne",
  },
  {
    id: 4,
    img: require("../../assets/images/user/10.jpg"),
    name: "Comeren Diaz",
  },
  {
    id: 5,
    img: require("../../assets/images/user/11.png"),
    name: "Andew Jon",
  },
];
